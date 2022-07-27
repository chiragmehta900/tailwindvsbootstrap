import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import { Sample8, Sample9 } from '../../CodeSample'
import sample1 from '../../Images/FrameworkExample/4.png'
import sample2 from '../../Images/FrameworkExample/5.png'
import CodeDisplayLayout from '../CodeDisplayLayout'

const BootstrapComponents = () => {
  return (
    <>
      <section className='text-white my-32'>
        <div className='w-4/5 mx-auto md:mr-auto px-4'>
          <div className='grid grid-cols-2 gap-10 my-10'>
            <div className='h-96 w-auto'>
              <img className='h-full w-auto mx-auto rounded-sm' src={sample1} alt="" />
            </div>
            <div>
              <CodeDisplayLayout>
                <CopyBlock
                  text={Sample8}
                  language="html"
                  showLineNumbers={false}
                  theme={dracula}
                  codeBlock
                />
              </CodeDisplayLayout>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-10 my-10'>
            <CodeDisplayLayout>
              <CopyBlock
                text={Sample9}
                language="html"
                showLineNumbers={false}
                theme={dracula}
                codeBlock
              />
            </CodeDisplayLayout>
            <div className='h-fit w-auto'>
              <img className='w-auto mx-auto h-auto rounded-sm' src={sample2} alt="" />
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default BootstrapComponents