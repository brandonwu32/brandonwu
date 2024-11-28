import Image from "next/image";
import Brandon from '@/app/static/Brandon.jpg'

export default function Home() {
  return (
    <div className="home-container">
      <div className='home-left'>
        <Image src={Brandon} alt={''} className='photo'/>
      </div>
      <div className='home-right'>
        <h1 className='greeting'>Hello, I'm Brandon.</h1>
        <div className='body'>
          <p className='bio'>I'm a student at the University of California, Berkeley studying Computer Science.</p>
          <p className='bio'>I enjoy coding up useful full-stack applications and learning about the various applications of Linear Programming and Algorithms to optimize Machine Learning.</p>
          <p className='bio'>I recently completed a SDE Internship at Amazon Web Services, where I
            built an application that stored and provided dynamic configurations for 54 different actions
            used by the AWS Marketplace engineering team.
          </p>
          <p className='bio'>
            Previously, I was a software engineering intern at
            Trellis Health (Tech Stars '23) and BLCK UNICRN (LA Tech Week 2024), an undergraduate researcher
            in Berkeley's EECS Department, and a project manager at Codebase@Berkeley.
          </p>
          <p className='bio'>
            When I'm not coding you can find me playing sports like badminton and table tennis, or
            cooking.
          </p>
          <p className='bio'>
            Thank you for visiting my website!
          </p>
        </div>
        <div className='contacts'>
          contacts
        </div>
      </div>
    </div>
  );
}
