/* eslint no-console: 0 */
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model');
const SECRET_KEY = 'supercalifragilisticexpialidocious';

const create = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) return res.status(409).send('User already exists');
  const hash = await bcrypt.hash(password, 10);
  const newUser = new User({ ...req.body, password: hash });
  try {
    const { _id } = await User.create(newUser);
    const accessToken = jwt.sign({ _id }, SECRET_KEY);
    res.status(201);
    res.send({ accessToken });
  } catch (error) {
    res.status(400);
    res.send({ error, message: 'Could not create user' });
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
    res.send('Username or password is incorrect');
  }
};

const load = async (req, res) => {
  try {
    const { name, partner, currency } = req.user;
    const userDetails = { name, partner, currency };
    res.status(201);
    res.send(userDetails);
  } catch {
    res.status(404);
    res.send('Account not found');
  }
};

module.exports = { create, login, load };