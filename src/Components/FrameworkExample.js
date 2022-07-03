import React from 'react'
import tailwind_logo from '../Images/FrameworkExample/1.png'
import bootstrap_logo from '../Images/FrameworkExample/2.png'
import CodeDisplayLayout from './CodeDisplayLayout'
import DesignComponent1 from './DesignComponent1'
import bootstrapSample from '../Images/FrameworkExample/3.png'

const FrameworkExample = () => {
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
                <div className='flex'>
                    <DesignComponent1 />
                    <CodeDisplayLayout>
                        <div className=''>
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex font-sans bg-white rounded-md mr-5">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex-none w-44 relative">`} <br />
                            {`<`}<span className='text-[#E164A0]'>img </span>{`src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-tl-md rounded-bl-md" loading="lazy" />`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>form </span>{`className="flex-auto p-6">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex flex-wrap">`} <br />
                            {`<`}<span className='text-[#E164A0]'>h1 </span>{`className="flex-auto text-lg font-semibold text-slate-900">`} <br />
                            {``}<span className='text-[#E164A0]'></span>{`Classic Utility Jacket`} <br />
                            {`</`}<span className='text-[#E164A0]'>h1 </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="text-lg font-semibold text-slate-500">`} <br />
                            {``}<span className='text-[#E164A0]'></span>{`$110.00`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="w-full flex-none text-sm font-medium text-slate-700 mt-2">`} <br />
                            {``}<span className='text-[#E164A0]'></span>{`In stock`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="space-x-2 flex text-sm">`} <br />
                            {`<`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`input className="sr-only peer" name="size" type="radio" value="xs" checked />`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">`} <br />
                            {``}<span className='text-[#E164A0]'> </span>{`XS`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'></span>{`input className="sr-only peer" name="size" type="radio" value="s" />`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{` className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">`} <br />
                            {``}<span className='text-[#E164A0]'></span>{`S`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'></span>{`input className="sr-only peer" name="size" type="radio" value="m" />`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white">`} <br />
                            {``}<span className='text-[#E164A0]'></span>{`M`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>label </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{` className="flex space-x-4 mb-6 text-sm font-medium">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="flex-auto flex space-x-4">`} <br />
                            {`<`}<span className='text-[#E164A0]'>button </span>{` className="h-10 px-4 font-semibold rounded-md bg-black text-white" type="submit">`} <br />
                            {``}<span className='text-[#E164A0]'> </span>{`Buy now`} <br />
                            {`</`}<span className='text-[#E164A0]'>button </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>button </span>{`className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200" type="button" aria-label="Like">`} <br />
                            {`<`}<span className='text-[#E164A0]'>svg </span>{`width="20" height="20" fill="currentColor" aria-hidden="true">`} <br />
                            {`<`}<span className='text-[#E164A0]'>path </span>{`fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />`} <br />
                            {`</`}<span className='text-[#E164A0]'>svg </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>button </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>p </span>{`className="text-sm text-slate-700">`} <br />
                            {``}<span className='text-[#E164A0]'></span>{` Free shipping on all continental US orders.`} <br />
                            {`</`}<span className='text-[#E164A0]'>p </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>form </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                        </div>
                    </CodeDisplayLayout>
                </div>
            ) : (
                <div className='flex'>
                    <img src={bootstrapSample} className="mr-3 rounded-md" alt="" />
                    <CodeDisplayLayout>
                        <div>
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="back container-fluid m-4 p-4">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="mx-2 d-flex justify-content-center">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="card rounded-5 a"`} <span className='text-[#E164A0]'>style </span> {`"border: 0px; width: 365px; font-size: 16px; border-radius: 10px">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="d-flex justify-content-center"`} <span className='text-[#E164A0]'>style </span> {`="background-color: silver; border-top-left-radius: 10px; border-top-right-radius: 10px;">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className=""`} <span className='text-[#E164A0]'>style </span> {`="height: 255px; width: 255px" src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg" alt="" />`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>p </span>{`className="px-2 py-1"`} <span className='text-[#E164A0]'>style </span> {`="left: 6px; background-color: white; text-align: left; top: 5%; position: absolute; width: 95px; top: 5%; transform: skew(-27deg); height: 24px;">`} <br />
                            {`</`}<span className='text-[#E164A0]'>p </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>p </span>{`className="px-2 py-1"`} <span className='text-[#E164A0]'>style </span> {`="background-color: rgb(255, 255, 255); font-size: 11px; text-align: left; top: 5%; color: #ff0000; font-weight: bold; position: absolute;">`} <br />
                            You Save 10% <br />
                            {`</`}<span className='text-[#E164A0]'>p </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="card-body"`} <span className='text-[#E164A0]'>style </span> {`"height: 180px; flex: 1 1 auto; padding-inline: 10px; padding-top: 5px; padding-bottom: 0px; border-radius: 10px; font-size: 10px; background-color: #f1f1f1;">`} <br />
                            {`<`}<span className='text-[#E164A0]'>div </span>{`className="text-danger">`} <br />
                            {`<`}<span className='text-[#E164A0]'>span </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>i </span>{`className="fas fa-star active">`} {`<`}<span className='text-[#E164A0]'>i</span>{`/>`} <br />
                            {`<`}<span className='text-[#E164A0]'>i </span>{`className="far fa-star">`} {`<`}<span className='text-[#E164A0]'>i</span>{`/>`} <br />
                            {`<`}<span className='text-[#E164A0]'>span </span>{`/>`} <br />
                            {`<`}<span className='text-[#E164A0]'>p </span>{`className="d-inline text-secondary"`} {`>`} <br />
                            100 reviews <br />
                            {`</`}<span className='text-[#E164A0]'>p </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>h5 </span>{`className="card-title"`} <span className='text-[#E164A0]'>style </span> {`"margin-bottom: 5px; font-size: 14px">`} <br />
                            BOAT Airpodes 121 V2 <br />
                            {`</`}<span className='text-[#E164A0]'>h5 </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>h5 </span>{`className="card-title text-danger fw-bold d-inline"`} <span className='text-[#E164A0]'>style </span> {`"font-size: 14px">`} <br />
                            RS. 199 <br />
                            {`</`}<span className='text-[#E164A0]'>h5 </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>h5 </span>{`className="card-text text-secondary text-decoration-line-through d-inline"`} <span className='text-[#E164A0]'>style </span> {`"font-size: 12px">`} <br />
                            RS. 300 <br />
                            {`</`}<span className='text-[#E164A0]'>h5 </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>ul </span>{`className="card-text text-decoration-square m-0"`} <span className='text-[#E164A0]'>style </span> {`"font-size: 12px; padding-left: 13px; list-style-type: square">`} <br />
                            {`<`}<span className='text-[#E164A0]'>li </span>{`>`} Upto 75% Off On Best Sellers {`</`}<span className='text-[#E164A0]'>li </span>{`>`}  <br />
                            {`<`}<span className='text-[#E164A0]'>li </span>{`>`} Stylish dual tone finish {`</`}<span className='text-[#E164A0]'>li </span>{`>`}  <br />
                            {`<`}<span className='text-[#E164A0]'>li </span>{`>`} Immersive, HD sound quality {`</`}<span className='text-[#E164A0]'>li </span>{`>`}  <br />
                            {`</`}<span className='text-[#E164A0]'>ul </span>{`>`} <br />
                            {`<`}<span className='text-[#E164A0]'>button </span>{`className="btn btn-dark rounded-pill px-4"`} <span className='text-[#E164A0]'>style </span> {`"background-color: #000000; margin-top: 15px">`} <br />
                            View more <br />
                            {`</`}<span className='text-[#E164A0]'>button </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                            {`</`}<span className='text-[#E164A0]'>div </span>{`>`} <br />
                        </div>
                    </CodeDisplayLayout>
                </div>
            )}
        </div>
    )
}

export default FrameworkExample