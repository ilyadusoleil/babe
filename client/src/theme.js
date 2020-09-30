import styled from '@emotion/styled';

const colors = {
  pink: '#e63946',
  baby: '#ffc3d0',
  white: '#f1faee',
  pale: '#a8dadc',
  mid: '#457b9d',
  dark: '#1d3557',
};

const MainView = styled('section')`
  height: 70vh;
  width: 100%;
  max-width: 600px;
  flex: 2 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto;
  border: solid ${colors.white} thick;
  border-top: none;
  padding-top: 2vh;
  border-radius: 0 0 50px 50px;
  background: ${colors.mid};
  overflow: scroll;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

const MainViewStatic = styled('section')`
  height: 70vh;
  width: 100%;
  max-width: 600px;
  flex: 2 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  border: solid ${colors.white} thick;
  border-top: none;
  padding: 2vh 0;
  border-radius: 0 0 50px 50px;
  background: ${colors.mid};
`;

const DashSummary = styled('div')`
  flex: 1 1 auto;
  font-size: 3vh;
  margin: auto;
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 80%;
  height: 50vh;
`;

const DashOptions = styled('div')`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 20vh;
  align-items: center;
  justify-content: space-evenly;
`;

const AboutPage = styled('div')`
  flex: 1 1 auto;
  font-size: 2vh;
  margin: 5vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  max-width: 80%;
`;

const FormLabel = styled('label')`
  padding: 1.2em;
  font-size: 1.8vh;
  color: ${colors.white};
`;

const RadioLabel = styled('label')`
  padding: 0 1.2em;
  color: ${colors.white};

  span {
    font-size: 5vh;
  }
`;

const SliderLabel = styled('label')`
  width: 100%;
  text-align: center;
  padding: 0 1.2em 1.2em 1.2em;
  font-size: 1.8vh;
  color: ${colors.white};
`;

const FormInput = styled('input')`
  border: none;
  border-radius: 50px;
  padding: 0.25em;
  background: ${colors.white};
  color: ${colors.dark};
  font-family: 'Poppins';
  font-size: 1.8vh;
  text-indent: 10px;
  width: auto;
`;

const FormRadio = styled('input')`
  width: 1vh;
  height: 1vh;
  appearance: none;
  display: inline-block;
  padding: 0.25em;
  margin-left: 1.2em;
  border: 2px solid ${colors.white};
  border-radius: 50%;
  background-color: ${colors.white};
  transform: scale(2);

  :checked {
    background-color: ${colors.dark};
  }
`;

const FormButton = styled('button')`
  width: 100%;
  font-family: 'Poppins';
  font-size: 1.8vh;
  line-height: 1;
  color: ${colors.white};
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const DeleteButton = styled('button')`
  font-size: 3vh;
  width: 100%;
  color: ${colors.dark};
  padding: 1vh 3vh;
  background: ${colors.white};
  border: solid ${colors.pink} thin;
  position: relative;

  &::after {
    content: '🧨';
    background: ${colors.white};
    font-style: normal;
    position: absolute;
    top: 18%;
    left: 27%;
    padding: 0 20%;
    font-size: 3vh;
    color: ${colors.dark};
    opacity: 0;
  }

  &:hover {
    box-shadow: none;
    &::after {
      opacity: 1;
    }
  }
`;

const FormSection = styled('div')`
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const FormSlider = styled('input')`
  width: 100%;
  appearance: none;
  border-radius: 50px;
  height: 25px;
  background: ${colors.white};
  outline: none;

  ::-webkit-slider-thumb {
    appearance: none;
    height: 40px;
    width: 16px;
    border-radius: 5px;
    background: ${colors.dark};
    cursor: pointer;
  }
`;

export {
  colors,
  MainView,
  MainViewStatic,
  FormLabel,
  FormInput,
  FormRadio,
  RadioLabel,
  FormButton,
  FormSection,
  FormSlider,
  SliderLabel,
  DashSummary,
  DashOptions,
  DeleteButton,
  AboutPage,
};
