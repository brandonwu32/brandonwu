import styles from '../page.css';
import Proj2b from './proj2b.png'
import Image from "next/image";
import ImageSkeleton from '@/app/components/skeletons/skeleton'
import {Suspense} from 'react';

export default function Page() {

    return (
        <div className='page-container'>
            <div className='overview'>
                <li className='overview-item'><a href='#overview'><i>Overview</i></a></li>
                <li className='overview-item'><a href='#course-highlights'><i>Course Highlights</i></a></li>
                <li className='overview-item'><a href='#takeaways'><i>Takeaways</i></a></li>
            </div>
            <div className='contents'>
                <div className='scroll-content'>
                    <h1 className='title'>CS 161: Computer Security</h1>
                    <h3 className='description'>Grade Received: A</h3>
                    <h3 className='description'>Go | Cryptography | Hacking</h3>
                    <i>Link: <a className='project-link' href='https://fa24.cs161.org/'>Course Website</a> </i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>


                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>CS 161 is UC Berkeley’s undergraduate course in computer security. It provides a comprehensive introduction to cryptography, system security, web security, and network security/architecture. The course emphasizes understanding security principles, identifying vulnerabilities, and designing systems that are resistant to attacks.</p>
                </div>

                <div className='regular-content'>
                    <h3>Key Topics Covered</h3>
                </div>
                <div className='regular-content'>
                    <p><strong>1. Cryptography:</strong> Symmetric Key Encryption, Public Key Cryptography, Digital Signatures, Hash Functions.</p>
                    <p><strong>2. System Security:</strong> Memory Safety (Buffer Overflows, Use-After-Free), Secure Software Development, Exploits (e.g., Stack Smashing, ROP), Mitigation Techniques (ASLR, Stack Canaries, DEP).</p>
                    <p><strong>3. Web Security:</strong> Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), SQL Injection, Same-Origin Policy.</p>
                    <p><strong>4. Network Security:</strong> Transport Layer Security (TLS), Man-in-the-Middle Attacks, TCP/IP Protocol Analysis, DNS and HTTP Security.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="course-highlights">Coursework Highlights</h2>
                </div>

                <div className='regular-content'>
                    <h3>Project 2</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='none' src={Proj2b}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Implemented a simplified encryption scheme that provided secure sharing of files across multiple users.</p>
                    <p>I worked alongside a partner to develop the scheme as well as the test suite using Go. We passed all but 2 test cases putting our score in the 90th percentile of implementations</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>Security is not a single feature but a mindset integrated into every stage of software development.</p>
                    <p>Understanding how attackers think is essential for designing effective defenses.</p>
                    <p>Balancing usability, performance, and security is a constant challenge in system design.</p>
                    <p>I thoroughly enjoyed the Web Security half of this course because of my interest in Capture The Flag Challenges (CTFs). Project 2 is one of the projects I'm most proud of because it showed me that putting a lot of time and considering into my work will often yield good results. </p>
                </div>
            </div>
        </div>
    )
}