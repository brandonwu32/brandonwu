import '../page.css';
import Image from "next/image";
import Pipeline from './pipeline.png';
import AppConfig from './appconfig.png';
import IAM from './iam.png';
import ImageSkeleton from '@/app/components/skeletons/skeleton'
import {Suspense} from 'react';

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
                    <h1 className='title'>Software Development Engineer Intern</h1>
                    <h3 className='description'>Migrating Dynamic Configurations to AWS AppConfig</h3>
                    <h3 className='description'>Java | Typescript | IAM | CDK</h3>
                    <i>Link: <a className='project-link' href='https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html'>AWS AppConfig</a> </i>
                </div>


                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>


                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>During my internship at Amazon Web Services in New York, I worked on configuration
                        management and deployment pipelines for internal AWS services. My project focused on
                        building scalable, cost-efficient systems to automate configuration rollouts while ensuring
                        accuracy and reliability across distributed environments.
                        </p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>I developed infrastructure-as-code solutions with AWS CDK, automated CI/CD workflows with
                        CodePipeline, and integrated AppConfig caching to reduce operational costs. These changes
                        enabled teams to deploy configurations more safely while reducing reliance on costly API calls.</p>
                </div>

                <div className='regular-content'>
                    <h3>Deliverable</h3>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='pipeline' src={Pipeline}></Image>                    </div>
                </div>
                <div className='regular-content'>
                    <p>The deliverables were adopted by internal AWS teams and demonstrated to senior engineers as
                        part of the final internship presentation.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="technical-features">Technical Features</h2>
                </div>
                <div className='regular-content'>
                    <h3>CI/CD Pipeline Automation</h3>
                </div>
                <div className='regular-content'>
                    <p>Migrated 54 service principal allow-lists and implemented an AWS CDK + CodePipeline
                        solution to track configuration changes and roll out updates gradually, reducing risks of
                        large-scale failures.</p>
                </div>

                <div className='regular-content'>
                    <h3>AppConfig Caching Integration</h3>
                </div>
                <div className='regular-content'>
                    <p>Integrated the AWS AppConfig Caching Client, reducing API call costs by 70%. Used AWS
                        Lambda extensions as a ground truth validation system to ensure configuration consistency.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                            <Image className='image' alt='appconfig' src={AppConfig}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>IAM Roles & Storage Optimization</h3>
                </div>
                <div className='regular-content'>
                    <p>Implemented IAM roles and evaluated trade-offs between S3 pay-per-use storage and AppConfig
                        hosted systems, ultimately optimizing for both cost efficiency and reliability of configuration
                        storage.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='iam' src={IAM}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>My AWS internship highlighted the importance of building cost-efficient, scalable, and
                        reliable cloud systems. I learned:</p>
                    <li><strong>The power of infrastructure-as-code:</strong> Using AWS CDK enabled reproducible
                        deployments and reduced manual configuration errors.</li>
                    <li><strong>Cost-awareness in system design:</strong> Optimizing API usage and storage choices
                        can lead to significant long-term savings.</li>
                    <li><strong>Safe configuration rollouts:</strong> Gradual deployment strategies minimize risk in
                        large-scale distributed systems.</li>
                    <li><strong>Validation mechanisms matter:</strong> Using Lambda extensions as a ground truth
                        source ensured system reliability under real workloads.</li>
                    <p>This experience deepened my understanding of cloud infrastructure and strengthened my
                        ability to design systems with both performance and cost-efficiency in mind.</p>
                </div>
            </div>
        </div>
    )
}