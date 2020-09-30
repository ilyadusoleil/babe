/* eslint no-console: 0 */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model');
const SECRET_KEY = 'supercalifragilisticexpialidocious';

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(409);
    res.send({
      error: '409',
      message:
        'There is an account already registered with this email. Please use a different email address or log in.',
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({ ...req.body, password: hash });
  try {
    const { _id } = await User.create(newUser);
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    res.status(201);
    res.send({ accessToken });
  } catch (error) {
    res.status(500);
    res.send({ error: '500', message: 'Server error. Could not create user.' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    const validated = await bcrypt.compare(password, user.password);
    if (!validated) throw new Error();
    const accessToken = jwt.sign({ _id: user._id }, SECRET_KEY);
    res.status(200);
    res.send({ accessToken });
  } catch (error) {
    res.status(401);
    res.send({
      error: '401',
      message: 'Your email or password is incorrect. Please try again.',
    });
  }
};

const loadUserDetails = async (req, res) => {
  try {
    const { _id, email, name, partner, partnerEmail, currency } = req.user;
    const userDetails = { _id, email, name, partner, partnerEmail, currency };
    res.status(201);
    res.send(userDetails);
  } catch {
    res.status(404);
    res.send({ error: '404', message: 'Account not found.' });
  }
};

const editUserDetails = async (req, res) => {
  try {
    const { _id, field } = req.params;
    const { value } = req.body;
    await User.findOneAndUpdate({ _id }, { $set: { [field]: value } });
    res.status(204);
  } catch (error) {
    res.status(500);
    res.send({
      error: '500',
      message: 'Error updating user in database.',
    });
  }
};

module.exports = { signup, login, loadUserDetails, editUserDetails };
