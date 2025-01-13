import styles from '../page.css';
import LowRank from './lrma.png';
import Compressed from './compressed.jpeg';
import Image from "next/image";


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
                    <h1 className='title'>EECS 127: Optimization Models in Engineering</h1>
                    <h3 className='description'>Grade Received: A-</h3>
                    <h3 className='description'>Linear Algebra | Convex Optimization | Applications in Engineering</h3>
                    <i>Link: <a className='project-link' href='https://www2.eecs.berkeley.edu/Courses/EECS127/'>Course Website</a></i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>EECS 127 at UC Berkeley provides an introduction to optimization models and their applications, ranging from machine learning and statistics to decision-making and control. The course emphasizes numerically tractable problems, such as linear or constrained least-squares optimization.</p>
                </div>

                <div className='regular-content'>
                    <h3>Key Topics Covered</h3>
                </div>
                <div className='regular-content'>
                    <p><strong>1. Linear Algebra Foundations:</strong> Vectors, matrices, eigenvalue and singular value decomposition. :contentReference</p>
                    <p><strong>2. Optimization Models:</strong> Least-squares, linear programming, quadratic programming, and second-order cone programming.</p>
                    <p><strong>3. Convexity and Duality:</strong> Understanding convex sets, functions, and the concept of duality in optimization.</p>
                    <p><strong>4. Applications:</strong> Implementing optimization techniques in machine learning, control systems, and decision-making processes.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="course-highlights">Coursework Highlights</h2>
                </div>

                <div className='regular-content'>
                    <h3>Problem Set 4: Image Compression</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Image Compression Project' src={LowRank}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Implemented low-rank matrix approximation to recover compressed images, leveraging singular value decomposition (SVD) to reduce data redundancy while preserving essential features.</p>
                    <p>Calculated the approximation error to evaluate compression performance and validate the effectiveness of the recovery process.</p>
                    <p>Demonstrated the practical application of matrix factorization in image compression and error analysis, enhancing understanding of optimization in real-world scenarios.</p>
                </div>

                <div className='regular-content'>
                    <h3>Problem Set 5: Compressed Sensing for Network Attack Detection</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Compressed Sensing Project' src={Compressed}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Simulated a cyclic power network with 100 nodes and 100 lines, generating random reactances and nodal phases to model power flow and detect sensor attacks.</p>
                    <p>Applied Lasso regression to sparse recovery, solving the optimization problem using CVX to identify attacked sensors (nodes and lines) based on noisy power measurements.</p>
                    <p>Achieved over 94% success rate in attack detection across 100 simulation trials, leveraging compressed sensing principles to optimize sensor network security.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways</h2>
                </div>
                <div className='regular-content'>
                    <p>Developed a strong foundation in optimization techniques and their practical applications in engineering.</p>
                    <p>Gained hands-on experience with tools like CVX for solving complex optimization problems.</p>
                    <p>Enhanced problem-solving skills by applying theoretical concepts to real-world scenarios, such as network security.</p>
                    <p>This course put me in an environment different from all of the courses I've taken previously.</p>
                    <p>Though the problem sets are application focused, lectures and exams would test heavily on understanding of theory driving these applications. I would have never learned about things like Quadratically Contrained Quadratic Programs or Lagrangians had I not taken this class.</p>
                    <p>The mini-projects assigned with some problem sets were the most intriguing part of the class to me because I was able to apply theory learned in class on real world tasks. The image compression project and how accurate re-construction can get with just SVD was shocking.</p>
                </div>
            </div>
        </div>
    );
}
