import '../page.css';
import PlaceholderImage from './DPR.png';
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
                    <h1 className='title'>Conditional Information Retrieval Research</h1>
                    <h3 className='description'>Undergraduate Research at UC Berkeley</h3>
                    <h3 className='description'>Python | Natural Language Processing | Machine Learning</h3>
                    <i>Link: <a className='project-link' href='https://github.com/alex2awesome/conditional-information-retrieval'>GitHub Repository</a></i>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='overview'>Overview</h2>
                </div>

                <div className='regular-content'>
                    <h3>Introduction</h3>
                </div>
                <div className='regular-content'>
                    <p>As an undergraduate researcher in the Department of Electrical Engineering and Computer Sciences at the University of California, Berkeley, I collaborated with Alexander J. Spangher under the guidance of Professor Costas J. Spanos. Our research focused on Conditional Information Retrieval (CIR), aiming to enhance the relevance and accuracy of information retrieval systems by incorporating contextual conditions into query processing.</p>
                </div>

                <div className='regular-content'>
                    <h3>Solution</h3>
                </div>
                <div className='regular-content'>
                    <p>We investigated human information retrieval behaviors and analyzed prior works to establish a comprehensive understanding of CIR. A significant aspect of our research involved producing a large silver standard dataset to serve as ground truth for training and evaluating retrieval models. Additionally, we curated a query-context relationship dataset from 18,000 articles to train a HayStack Dense Passage Retriever, leveraging datapoint embeddings to improve retrieval performance.</p>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='technical-features'>Technical Features</h2>
                </div>

                <div className='regular-content'>
                    <h3>Silver Standard Dataset Creation</h3>
                </div>
                <div className='regular-content'>
                    <p>Developed a substantial silver standard dataset by studying human information retrieval behaviors and analyzing existing literature. This dataset serves as a ground truth benchmark for evaluating CIR models.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Silver Standard Dataset Creation' src={PlaceholderImage}></Image>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Query-Context Relationship Dataset</h3>
                </div>
                <div className='regular-content'>
                    <p>Curated a dataset encompassing query-context relationships from 18,000 articles, facilitating the training of retrieval models to understand and leverage contextual information effectively.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Suspense fallback={<ImageSkeleton/>}>
                            <Image className='image' alt='Query-Context Relationship Dataset' src={PlaceholderImage}></Image>
                        </Suspense>
                    </div>
                </div>

                <div className='regular-content'>
                    <h3>Training HayStack Dense Passage Retriever</h3>
                </div>
                <div className='regular-content'>
                    <p>Utilized the curated dataset to train a HayStack Dense Passage Retriever, enhancing the model's ability to retrieve relevant information by understanding the context of queries through datapoint embeddings.</p>
                </div>

                <div className='regular-content'>
                    <div className='demonstration'>
                        <Image className='image' alt='Training HayStack Dense Passage Retriever' src={PlaceholderImage}></Image>
                    </div>
                </div>

                <div className='scroll-content'>
                    <h2 className='header' id='takeaways'>Takeaways...</h2>
                </div>
                <div className='regular-content'>
                    <p>This research project provided valuable insights into the complexities of information retrieval and the importance of context in enhancing retrieval performance. Key learnings include:</p>
                    <li><strong>Understanding Human Retrieval Behaviors:</strong> Gained insights into how users interact with information retrieval systems and the significance of context in shaping retrieval needs.</li>
                    <li><strong>Dataset Curation:</strong> Developed skills in creating large-scale datasets that serve as benchmarks for training and evaluating machine learning models in information retrieval.</li>
                    <li><strong>Model Training and Evaluation:</strong> Acquired experience in training advanced retrieval models like the HayStack Dense Passage Retriever and assessing their performance in context-sensitive scenarios.</li>
                    <p>Overall, this experience deepened my understanding of natural language processing and machine learning techniques applied to information retrieval, highlighting the critical role of context in developing more effective and user-centric retrieval systems.</p>
                </div>
            </div>
        </div>
    );
}
