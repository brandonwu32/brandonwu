import '../page.css';
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
                    <h1 className='title'>Finance Dashboard</h1>
                    <h3 className='description'>Personal Finance & Expense Tracker</h3>
                    <h3 className='description'>Next.js | TypeScript | Google Sheets API | OpenAI</h3>
                    <i>Link: <a className='project-link' href='https://financedashboard-three.vercel.app/dashboard'>Project</a> | <a className='project-link' href='https://github.com/brandonwu32/financedashboard'>GitHub</a></i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>Finance Dashboard is a full-stack personal finance management application built with modern web technologies. 
                        It helps users track expenses, manage budgets, and analyze spending patterns through an intuitive dashboard interface. 
                        The application leverages Google Sheets as a backend database and integrates OpenAI for intelligent transaction parsing 
                        from receipt images. To prevent unwanted access, you must request access before using this web app.</p>
                </div>

                <div className='regular-content'>
                    <h3>Problem & Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>Traditional expense tracking requires tedious manual entry. This application solves that problem by enabling 
                        users to simply upload bank statement screenshots or transaction receipts—the AI automatically extracts and 
                        categorizes transaction details. Combined with Google Sheets integration, users get a powerful, accessible 
                        finance tracking system without complex database setup.</p>
                </div>

                <div className='regular-content'>
                    <h3>Key Features</h3>
                </div>
                <div className='regular-content'>
                    <ul>
                        <li>Upload bank statements and receipts for automatic transaction parsing via OpenAI</li>
                        <li>Manual expense entry with dedicated forms for quick data input</li>
                        <li>Bi-weekly budget tracking with visual spending charts and analytics</li>
                        <li>Real-time synchronization with Google Sheets for persistent storage</li>
                        <li>Optimistic UI updates using SWR for instant feedback</li>
                        <li>Google OAuth authentication for secure access</li>
                        <li>Responsive dashboard with balance summaries and recent transactions</li>
                    </ul>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id="technical-features">Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <h3>AI-Powered Transaction Parsing</h3>
                </div>
                <div className='regular-content'>
                    <p>Integrated OpenAI's vision models to extract transaction data from uploaded images. The parser identifies 
                        transaction dates, amounts, descriptions, and categories with high accuracy. Server-side sanitization 
                        prevents formula injection attacks when writing to Google Sheets, ensuring data security.</p>
                </div>

                <div className='regular-content'>
                    <h3>Google Sheets Backend Integration</h3>
                </div>
                <div className='regular-content'>
                    <p>Implemented a service-account-based Google Sheets integration that serves as the primary data store. 
                        This approach provides several benefits: version-controlled data accessible through Google Drive, 
                        no database hosting costs, and familiar spreadsheet interface for data review and manual adjustments. 
                        Used the Google Sheets API v4 with JWT authentication for secure, programmatic access.</p>
                </div>

                <div className='regular-content'>
                    <h3>Next.js App Router & API Routes</h3>
                </div>
                <div className='regular-content'>
                    <p>Built using Next.js 15's App Router architecture with TypeScript for type safety. Created API routes 
                        for transaction management (<code>/api/transactions</code>, <code>/api/parse-transactions</code>) 
                        that handle CRUD operations and image processing. Implemented server-side validation and error handling 
                        to ensure data integrity.</p>
                </div>

                <div className='regular-content'>
                    <h3>Optimistic UI with SWR</h3>
                </div>
                <div className='regular-content'>
                    <p>Leveraged SWR (stale-while-revalidate) for client-side caching and optimistic updates. When users add 
                        transactions, the UI updates immediately while the request processes in the background, providing a 
                        snappy user experience. Automatic revalidation ensures data consistency across all dashboard components.</p>
                </div>

                <div className='regular-content'>
                    <h3>Authentication & Authorization</h3>
                </div>
                <div className='regular-content'>
                    <p>Implemented NextAuth.js with Google OAuth provider for secure authentication. The application uses an 
                        email allowlist middleware to control access, making it suitable for personal use while maintaining 
                        a foundation that can scale to multi-user deployments with per-user data isolation.</p>
                </div>

                <div className='regular-content'>
                    <h3>Security Considerations</h3>
                </div>
                <div className='regular-content'>
                    <ul>
                        <li><strong>Formula Injection Prevention:</strong> Server-side sanitization strips leading special 
                            characters (=, +, -, @) to prevent malicious formulas in Google Sheets</li>
                        <li><strong>Environment Variables:</strong> All sensitive credentials (API keys, OAuth secrets) stored 
                            securely in environment variables</li>
                        <li><strong>File Upload Controls:</strong> Implemented file size limits and type validation to prevent 
                            abuse of the parsing endpoint</li>
                        <li><strong>PII Awareness:</strong> Designed with consideration for personally identifiable information 
                            in uploaded images</li>
                    </ul>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways</h2>
                </div>

                <div className='regular-content'>
                    <h3>Technical Growth</h3>
                </div>
                <div className='regular-content'>
                    <p>This project deepened my understanding of full-stack TypeScript development and serverless architecture. 
                        Working with Google Sheets as a database taught me creative solutions to data persistence challenges 
                        and highlighted trade-offs between traditional databases and alternative storage solutions. Integrating 
                        OpenAI's API provided hands-on experience with LLM-powered features and the importance of prompt engineering 
                        for structured data extraction.</p>
                </div>

                <div className='regular-content'>
                    <h3>Product Thinking</h3>
                </div>
                <div className='regular-content'>
                    <p>Building a personal finance tool required balancing functionality with simplicity. The AI parsing feature 
                        significantly reduces friction in expense tracking, but providing manual entry options ensures users aren't 
                        blocked if image parsing fails. Designing for a single user first, with multi-user scalability in mind, 
                        demonstrates pragmatic product development—ship value quickly while maintaining architectural flexibility.</p>
                </div>

                <div className='regular-content'>
                    <h3>Future Enhancements</h3>
                </div>
                <div className='regular-content'>
                    <ul>
                        <li>Migrate from Google Sheets to PostgreSQL for multi-user support</li>
                        <li>Add recurring transaction detection and budget alerts</li>
                        <li>Implement category-based spending insights and trends</li>
                        <li>Build mobile-responsive progressive web app (PWA) features</li>
                        <li>Add data export and reporting capabilities</li>
                        <li>Implement background job processing for image parsing with retry logic</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
