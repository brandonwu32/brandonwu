import styles from '../page.css';
import ProjB2 from './projectb2.png';
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
                    <h1 className='title'>Data 100: Principles and Techniques of Data Science</h1>
                    <h3 className='description'>Grade Received: A</h3>
                    <h3 className='description'>Python | Pandas | Machine Learning</h3>
                    <i>Link: <a className='project-link' href='https://ds100.org/'>Course Website</a> </i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>Data 100 is UC Berkeley's intermediate-level data science course, bridging concepts from statistics, computer science, and data analysis. It emphasizes hands-on experience with data manipulation, visualization, modeling, and decision-making.</p>
                </div>

                <div className='regular-content'>
                    <h3>Key Topics Covered</h3>
                </div>
                <div className='regular-content'>
                    <p><strong>1. Data Manipulation:</strong> Pandas DataFrames, SQL-style queries, and data cleaning techniques.</p>
                    <p><strong>2. Visualization:</strong> Using Matplotlib, Seaborn, and Altair to create insightful charts and graphs.</p>
                    <p><strong>3. Statistical Modeling:</strong> Linear regression, classification models, and evaluating model performance.</p>
                    <p><strong>4. Machine Learning:</strong> Concepts of overfitting, bias-variance tradeoff, and decision-making under uncertainty.</p>
                    <p><strong>5. Ethical Considerations:</strong> Bias in data and responsible use of predictive models.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="course-highlights">Coursework Highlights</h2>
                </div>

                <div className='regular-content'>
                    <h3>Project B: Spam and Ham Classification</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Project Visualization' src={ProjB2}></Image>
                    </div>
                </div>
                <div className='regular-content'>
                    <p>Developed a logistic regression classifier to distinguish between spam and ham emails, utilizing natural language processing techniques to analyze email content.</p>
                    <p>Employed Python libraries such as scikit-learn for machine learning, NLTK for text analysis, and Matplotlib for data visualization.</p>
                    <p>Achieved 98.5% accuracy in email classification, placing me 15th on the leaderboard of 1120 submissions</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways</h2>
                </div>
                <div className='regular-content'>
                    <p>This course deepened my ability to work with real-world data, from cleaning to deriving actionable insights.</p>
                    <p>I appreciated the emphasis on ethical decision-making, particularly when applying machine learning to socially impactful domains.</p>
                    <p>Project 2 was particularly rewarding as it solidified my understanding of the end-to-end data science pipeline.</p>
                </div>
            </div>
        </div>
    );
}
