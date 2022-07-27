import React from 'react'
import tailwind_logo from '../Images/FrameworkExample/1.png'
import bootstrap_logo from '../Images/FrameworkExample/2.png'
import CodeDisplayLayout from './CodeDisplayLayout'
import DesignComponent1 from './DesignComponent1'
import bootstrapSample from '../Images/FrameworkExample/3.png'
import { CopyBlock, dracula } from "react-code-blocks";
import { Sample1, Sample2 } from '../CodeSample'
import { useNavigate } from 'react-router-dom'

const FrameworkExample = () => {
    let navigate = useNavigate();
    const [isTailwindComponemtView, setIsTailwindComponemtView] = React.useState(true)
    return (
        <div className='py-10'>
            <div className='my-10'>
                <h2 className='font-bold text-5xl capitalize mb-7'>An API for your design system.</h2>
                <p className='w-4/5 text-[#8493A8]'>Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.</p>
            </div>
            <div className='flex mb-10'>
                <img className='mr-7 object-cover select-none cursor-pointer' src={tailwind_logo} alt="tailwind_logo" onClick={() => setIsTailwindComponemtView(true)} />
                <img className='object-cover select-none cursor-pointer' src={bootstrap_logo} alt="bootstrap_logo" onClick={() => setIsTailwindComponemtView(false)} />
            </div>
            {isTailwindComponemtView ? (
                <>
                    <div className='grid grid-cols-2 gap-10'>
                        <DesignComponent1 />
                        <CodeDisplayLayout>
                            <CopyBlock
                                text={Sample1}
                                language="html"
                                showLineNumbers={false}
                                theme={dracula}
                                codeBlock
                            />
                        </CodeDisplayLayout>
                    </div>
                    <div className='my-10 flex justify-end'>
                        <button className='bg-[#0466FD] p-3 px-8 rounded cursor-pointer' onClick={() => navigate(`/tailwaindComponents`)}>View More</button>
                    </div>
                </>
            ) : (
                <>
                    <div className='grid grid-cols-2 gap-10'>
                        <img src={bootstrapSample} className="mr-3 rounded-md w-96" alt="" />
                        <CodeDisplayLayout>
                            <CopyBlock
                                text={Sample2}
                                language="html"
                                showLineNumbers={false}
                                theme={dracula}
                                codeBlock
                            />
                        </CodeDisplayLayout>
                    </div>
                    <div className='my-10 flex justify-end'>
                        <button className='bg-[#0466FD] p-3 px-8 rounded cursor-pointer' onClick={() => navigate(`/bootstrapComponents`)}>View More</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default FrameworkExample