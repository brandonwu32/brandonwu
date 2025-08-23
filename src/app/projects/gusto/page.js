import '../page.css';
import Table from './table.jpg';
import API from './api.jpeg';
import Frontend from './frontend.svg';
import Autosigning from './autosigning.png';
import Notifications from './notifications.png';
import Image from "next/image";
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
                    <h1 className='title'>Gusto</h1>
                    <h3 className='description'>Software Engineering Intern</h3>
                    <h3 className='description'>Ruby on Rails | GraphQL | PostgreSQL | React</h3>
                    <i>Link: <a className='project-link' href='https://gusto.com/'>Gusto</a> </i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>At Gusto, I contributed to the Payroll Compliance team, building systems that
                        automated Power of Attorney (POA) form management. These forms are required
                        for Gusto to represent customers in tax filings across states and jurisdictions.
                        My work improved record-keeping, enabled automation, and scaled the
                        processing of thousands of tax authorization forms daily.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="technical-features">Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <h3>Tax Authorization Form Table</h3>
                </div>
                <div className='regular-content'>
                    <p>Created a dedicated database table to store tax authorization forms separately
                        from other form types. This separation allowed us to enforce immutability—no
                        row modifications, only new row insertions—which strengthened historical record-keeping
                        and simplified compliance audits.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='table' src={Table}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Tax Authorization Forms API</h3>
                </div>
                <div className='regular-content'>
                    <p>Developed Rails + GraphQL APIs for managing POA forms with immutability in mind.
                        Every “modification” was modeled as the creation of a new row, ensuring that
                        historical versions were preserved. Learned and applied efficient querying
                        strategies to handle this new data structure at scale.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='api' src={API}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Frontend Integration in Production</h3>
                </div>
                <div className='regular-content'>
                    <p>Since tax authorization forms already existed in Gusto’s product but were tied
                        to a legacy table, I integrated the new schema into production. This required
                        extending GraphQL schemas and mutations to support multi-table edits and
                        making the new forms visible in React-based customer dashboards. Learned
                        how Gusto’s hybrid GraphQL–React architecture differs from traditional MVC.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='frontend' src={Frontend}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Autosigning</h3>
                </div>
                <div className='regular-content'>
                    <p>Engineered an autosigning feature to automatically sign eligible authorization
                        forms. Carefully weighed trade-offs between synchronous and asynchronous
                        signing flows, handling edge cases like unsigning events and signatory
                        changes. This automation reduced manual toil and improved consistency
                        for customers across jurisdictions.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='autosigning' src={Autosigning}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Notifications</h3>
                </div>
                <div className='regular-content'>
                    <p>Extended the project with a digest mailer system that delivered daily
                        summaries of over 10,000 signed forms via 2,000+ queued jobs.
                        This was my first exposure to scheduled jobs, idempotency
                        strategies, and multi-tier job worker architectures to mitigate failures.</p>
                </div>
                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='notifications' src={Notifications}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>Beyond the technical aspects, this project taught me how to navigate
                        cross-functional projects in a real-world engineering environment.
                        Key learnings included:</p>
                    <li><strong>Immutability in design:</strong> Enforcing “append-only”
                        semantics simplified compliance and record-keeping.</li>
                    <li><strong>Bridging backend and frontend:</strong> Extending GraphQL schemas
                        taught me how APIs power complex product experiences.</li>
                    <li><strong>Automation at scale:</strong> Designing autosigning and
                        digest mailers highlighted the importance of background job
                        architectures and idempotency.</li>
                    <li><strong>Proactive ownership:</strong> I learned to lead cross-team
                        meetings, write tickets beyond my scope, and independently research
                        unfamiliar areas.</li>
                    <p>This internship gave me a comprehensive view of how compliance-driven
                        engineering blends backend infrastructure, product integration, and
                        operational excellence.</p>
                </div>
            </div>
        </div>
    )
}
