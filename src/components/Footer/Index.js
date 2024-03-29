import { React, useEffect, useState } from 'react';
import footerbg from '../../assets/images/footer-bg-movie-app.jpeg';
import { Link } from 'react-router-dom';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const IconRSHB = () => {
  return (
    <a href='' class='flex mx-auto justify-center items-center md:mx-0'>
      <Link to='/'>
        <ConnectedTvIcon
          sx={{
            height: '2.3rem',
            width: '4rem',
            marginRight: '0.1rem',
            color: 'white',
          }}
        />
        <span class='self-center text-xl font-semibold whitespace-nowrap text-white'>
          RSHB TV
        </span>
      </Link>
    </a>
  );
};
const Footer = () => {
  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 768px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(min-width: 768px)')
      .addEventListener('change', (e) => setMatches(e.matches));
  }, []);

  return (
    <div className={`relative w-full h-[30vh] ${!matches ? 'mb-52' : ''}`}>
      <div className='absolute w-full  pt-5 md:pt-0 h-full text-white z-20 flex'>
        <div className='container my-auto flex flex-col gap-y-8'>
          {matches && <IconRSHB />}
          <div className='basis-12/12 flex w-full flex-col sm:flex-row gap-y-8 gap-x-0  justify-start flex-wrap px-5 md:px-12 '>
            <div className='basis-4/12 '>
              <a href='#' className='text-lg font-semibold'>
                Home
              </a>
            </div>
            <div className='basis-4/12 '>
              <a href='#' className='text-lg font-semibold'>
                Live
              </a>
            </div>
            <div className='basis-4/12 '>
              <a href='#' className='text-lg font-semibold'>
                Contact us
              </a>
            </div>
            <div className='basis-4/12 '>
              <a href='#' className='text-lg font-semibold'>
                About us
              </a>
            </div>
            <div className='basis-4/12 '>
              <a href='#' className='text-lg font-semibold'>
                Top IMDB
              </a>
            </div>
            <div className='basis-4/12 '>
              <a href='#' className='text-lg font-semibold'>
                Recent release
              </a>
            </div>
          </div>
          {/* <div className="m-auto flex w-1/2 text-white justify-around  pt-4">
            <a href="https://www.instagram.com/faizmaruf_/">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/in/faizalauddinmaruf/">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/faizmaruf">
              <GitHubIcon />
            </a>
          </div> */}
        </div>
      </div>
      <div className='w-full h-full absolute bottom-0 z-10 bg-gradient-to-b from-transparent to-primaryBg '></div>
      <img
        src={footerbg}
        className='object-cover w-full h-full absolute z-0 overflow-hidden'
      />
    </div>
  );
};

export default Footer;
