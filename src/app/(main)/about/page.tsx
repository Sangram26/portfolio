import { Metadata } from 'next';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

import { educations, experience, technicalQualifications, people } from '@/lib/data';

export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
    return (
        <div className='container mx-auto mt-5 mb-28'>
            <div className='w-full'>
                <div className='w-full'>
                    <h1 className='text-4xl font-bold text-center'>About Me</h1>

                    <div className='w-10/12 flex flex-col mx-auto mt-10'>
                        <div className='flex flex-row items-center justify-center mb-10 w-full'>
                            <AnimatedTooltip items={people} />
                        </div>

                        <article className='text-lg text-justify'>
                            <p style={{ marginTop: '10px' }}>
                                I’m Sangram Dhavalchandra Barge, a Rotomation Artist with over 4 years of industry
                                experience. Throughout my career, I’ve had the opportunity to work on some amazing
                                projects like The Flash (2023), Doctor Strange in the Multiverse of Madness (2022),
                                Shazam! Fury of the Gods (2023), Meg 2 (2023), Secret Invasion (2023), and Star Wars:
                                Ahsoka (2023).I’m passionate about bringing characters to life using my expertise in
                                Maya,3dequalizer, and Nuke, and I take pride in delivering high-quality work under tight
                                deadlines. Rotomation allows me to blend creativity with technical precision,and I’m
                                always eager to take on new challenges and contribute to exciting projects.
                            </p>
                            <blockquote
                                style={{ marginBottom: '10px', marginTop: '10px' }}
                                className='mt-6 border-l-2 pl-6 italic'
                            >
                                A lifelong learner, I&apos;m constantly expanding my knowledge. Currently, I&apos;m
                                exploring containerization technologies like Docker and Kubernetes, while also building
                                a foundation in programming languages and frameworks like{' '}
                                <span className='font-bold'>Python, Mel, Qt-Designer</span>, HTML, CSS, JavaScript,
                                TypeScript, React, and Next.js.
                            </blockquote>
                            <code
                                style={{ marginTop: '10px' }}
                                className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
                            >
                                What truly drives me is the ability to create{' '}
                                <span className='font-bold'>User-friendly interfaces</span> and optimise performance.
                            </code>
                        </article>
                    </div>
                </div>

                <div className='w-full mt-20'>
                    <h1 className='text-4xl font-bold text-center'>E X P E R I E N C E</h1>

                    {experience.map(education => (
                        <div
                            key={education.school}
                            className='w-10/12 mx-auto mt-10'
                        >
                            <h1 className='text-xl font-bold'>{education.school}</h1>

                            {education.courses.map(course => (
                                <ul
                                    key={course}
                                    className='my-5 list-disc ml-10'
                                >
                                    <li>{course}</li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='w-full mt-20'>
                    <h1 className='text-4xl font-bold text-center'>TECHNICAL QUALIFICATION</h1>

                    {technicalQualifications.map(education => (
                        <div
                            key={education.school}
                            className='w-10/12 mx-auto mt-10'
                        >
                            <h1 className='text-xl font-bold'>{education.school}</h1>

                            {education.courses.map(course => (
                                <ul
                                    key={course}
                                    className='my-5 list-disc ml-10'
                                >
                                    <li>{course}</li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='w-full mt-20'>
                    <h1 className='text-4xl font-bold text-center'>EDUCATIONAL QUALIFICATION</h1>

                    {educations.map(education => (
                        <div
                            key={education.school}
                            className='w-10/12 mx-auto mt-10'
                        >
                            <h1 className='text-xl font-bold'>{education.school}</h1>

                            {education.courses.map(course => (
                                <ul
                                    key={course}
                                    className='my-5 list-disc ml-10'
                                >
                                    <li>{course}</li>
                                </ul>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
