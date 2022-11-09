import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/rylandadams/">
          <AiFillLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/Pugsly99">
          <BsGithub />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
