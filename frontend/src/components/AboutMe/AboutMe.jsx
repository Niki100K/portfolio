import React from 'react';
import './AboutMe.css';
import aws from '../../assets/aws.png';
import medal from '../../assets/medal.png';
import { PiArrowBendDownRightBold } from 'react-icons/pi';

const AboutMe = () => {
  const about = [
    {
      h2: 'Main Information',
      p: 'Hi, I\'m <strong>Nikolai Kaloyanov</strong> from Bulgaria, living in a small city called <a>Blagoevgrad</a>. I\'m 21 years old and want to join the IT industry. With my little year of experience in <span>React/JavaScript</span> and <span>Laravel/PHP</span>, I am a perfect candidate for employment as a Full Stack Developer. An additional advantage for me is that I can change my place of residence anywhere if the company needs it.',
    },
    {
      h2: 'Personal Experience',
      ul: [
        '2 years as a footballer',
        '2.5 years in taekwondo',
        '1 year of programming',
      ],
    },
    {
      h2: 'Contact',
      contact: [
        'Email: niki5kaloianov@gmail.com',
        'Phone: +359 8956 848 63'
      ]
    }
  ];

  return (
    <div className='AboutMe c flex-c'>
      <div className='con c r'>
        <div className='text c flex-c'>
          {about.map((info, index) => (
            <div className='info c flex-c' key={index}>
              {index !== 1 && <h2>{info.h2}</h2>}
              <p dangerouslySetInnerHTML={{ __html: info.p }}></p>
              {info.ul &&
              <div className='infoImage c r'>
                <ul>
                  <h2>{info.h2}</h2>
                  {info.ul.map((li, indexLi) => (
                    <li key={indexLi}>
                      <PiArrowBendDownRightBold className='arrow' />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
                <div className='image c'>
                  <img src={medal} alt="" />
                </div>
              </div>
              }
              {info.contact?.map((contact, indexContact) => (
                <p key={indexContact}>{contact}</p>
              ))}
            </div>
          ))}
        </div>
        <div className='img c'>
          <img src={aws} alt='' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
