import '../page.css';
import Regression from './Benford.png'
import EDA from './EDA.png';
import Heatmap from './heatmap.png';
import Image from "next/image";
import ImageSkeleton from '@/app/components/skeletons/skeleton';
import { Suspense } from 'react';

export default function Page() {
    return (
        <div className='page-container'>
            <div className='overview'>
                <li className='overview-item'><a href='#overview'><i>Overview</i></a></li>
                <li className='overview-item'><a href='#technical-features'><i>Technical Features</i></a></li>
                <li className='overview-item'><a href='#takeaways'><i>Takeaways</i></a></li>
            </div>
            <div className='contents'>
                <div className='scroll-content'>
                    <h1 className='title'>Benford's Analysis of COVID-19 Data</h1>
                    <h3 className='description'>Wharton Data Science Academy Research</h3>
                    <h3 className='description'>R | Exploratory Data Analysis | Statistical Modeling</h3>
                    <i>Link: <a className='project-link' href='https://drive.google.com/file/d/1EazbmfdjcKyVWYdE_1Dltejj2rFyChF5/view?usp=sharing'>Research Paper</a></i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>During my time at the Wharton Data Science Academy from May to July 2021, I conducted a research project applying Benford's Law to analyze COVID-19 data. Benford's Law predicts the frequency distribution of leading digits in many real-life datasets, and deviations from this distribution can indicate anomalies or potential data manipulation. This analysis aimed to assess the integrity of reported COVID-19 case numbers.</p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>Utilizing R and Exploratory Data Analysis (EDA) techniques, I examined over 28,000 COVID-19 case entries. By calculating the logarithm of p-values for case and death data, I modeled a linear regression to plot p-values ranging from 0.1 to 0.05, providing insights into the conformity of the data with Benford's Law.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='technical-features'>Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <h3>Data Collection and Preparation</h3>
                </div>
                <div className='regular-content'>
                    <p>Collected a dataset comprising over 28,000 COVID-19 case entries, ensuring data cleanliness and readiness for analysis by handling missing values and standardizing formats.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Data Collection and Preparation' src={EDA}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Application of Benford's Law</h3>
                </div>
                <div className='regular-content'>
                    <p>Applied Benford's Law to the dataset to analyze the frequency distribution of leading digits in reported COVID-19 cases and deaths, identifying deviations that could indicate anomalies or inconsistencies.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='Application of Benford`s Law' src={Regression}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Statistical Modeling</h3>
                </div>
                <div className='regular-content'>
                    <p>Calculated the logarithm of p-values for case and death data, modeling a linear regression to plot p-values ranging from 0.1 to 0.05, providing a visual representation of data conformity to Benford's Law.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Statistical Modeling' src={Heatmap}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>This research project provided valuable insights into the application of statistical methods for data validation. Key learnings include:</p>
                    <li><strong>Understanding Benford's Law:</strong> Gained a deep understanding of Benford's Law and its applicability in detecting anomalies within large datasets.</li>
                    <li><strong>Data Integrity Assessment:</strong> Developed skills in assessing the integrity of publicly reported data, crucial for informing policy decisions during a global health crisis.</li>
                    <li><strong>Recognition:</strong> The project was honored with the Outstanding Project Award at the 4th Wharton Data Science Live Conference, competing among over 100 teams.</li>
                    <p>Overall, this experience enhanced my proficiency in statistical analysis and data science methodologies, emphasizing the importance of data integrity in public health reporting.</p>
                </div>
            </div>
        </div>
    );
}
