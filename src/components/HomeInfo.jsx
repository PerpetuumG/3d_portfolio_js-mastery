import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className={'info-box'}>
      <p className={'font-medium sm:text-xl text-center'}>{text}</p>
      <Link to={link} className={'neo-brutalism-white neo-btn'}>
        {btnText}
        <img src={arrow} alt='arrow' className={'w-4 h-4 object-contain'} />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1
      className={
        'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-5 text-white mx-5'
      }
    >
      Hi, I'm <span className={'font-semibold'}>Georg</span> 👋 <br /> a Software Engineer From
      Earth
    </h1>
  ),
  2: (
    <InfoBox
      text={'Worked with many companies and picked up many skill along the way.'}
      btnText={'Learn more'}
      link={'/about'}
    />
  ),
  3: (
    <InfoBox
      text={'Led multiple projects to success over the years. Curious about the impact?'}
      btnText={'Visit my portfolio'}
      link={'/projects'}
    />
  ),
  4: (
    <InfoBox
      text={"Need a project done or looking for a dev? I'm just a few keystrokes away"}
      btnText={"Let's talk"}
      link={'/contact'}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
