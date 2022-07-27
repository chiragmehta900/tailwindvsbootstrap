import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import { Sample3, Sample4, Sample5, Sample6, Sample7 } from '../../CodeSample';
import CodeDisplayLayout from '../CodeDisplayLayout';

const TailwaindComponents = () => {
    return (
        <>
            <section className='text-white my-32'>
                <div className='w-4/5 mx-auto md:mr-auto px-4'>
                    <div className='grid grid-cols-2 gap-10 my-10'>
                        <div>
                            <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
                                    <span className="sr-only">Close</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                                        <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." className="object-center object-cover" />
                                    </div>
                                    <div className="sm:col-span-8 lg:col-span-7">
                                        <h2 className="text-2xl font-extrabold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>
                                        <section aria-labelledby="information-heading" className="mt-2">
                                            <h3 id="information-heading" className="sr-only">Product information</h3>
                                            <p className="text-2xl text-gray-900">$192</p>
                                            <div className="mt-6">
                                                <h4 className="sr-only">Reviews</h4>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                        <svg className="text-gray-200 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    </div>
                                                    <p className="sr-only">3.9 out of 5 stars</p>
                                                    <h3 className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</h3>
                                                </div>
                                            </div>
                                        </section>
                                        <section aria-labelledby="options-heading" className="mt-10">
                                            <h3 id="options-heading" className="sr-only">Product options</h3>
                                            <form>
                                                <div>
                                                    <h4 className="text-sm text-gray-900 font-medium">Color</h4>
                                                    <fieldset className="mt-4">
                                                        <legend className="sr-only">Choose a color</legend>
                                                        <span className="flex items-center space-x-3">
                                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                                <input type="radio" name="color-choice" value="White" className="sr-only" aria-labelledby="color-choice-0-label" />
                                                                <span id="color-choice-0-label" className="sr-only"> White </span>
                                                                <span aria-hidden="true" className="h-8 w-8 bg-white border border-black border-opacity-10 rounded-full"></span>
                                                            </label>
                                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                                                                <input type="radio" name="color-choice" value="Gray" className="sr-only" aria-labelledby="color-choice-1-label" />
                                                                <span id="color-choice-1-label" className="sr-only"> Gray </span>
                                                                <span aria-hidden="true" className="h-8 w-8 bg-gray-200 border border-black border-opacity-10 rounded-full"></span>
                                                            </label>
                                                            <label className="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                                                                <input type="radio" name="color-choice" value="Black" className="sr-only" aria-labelledby="color-choice-2-label" />
                                                                <span id="color-choice-2-label" className="sr-only"> Black </span>
                                                                <span aria-hidden="true" className="h-8 w-8 bg-gray-900 border border-black border-opacity-10 rounded-full"></span>
                                                            </label>
                                                        </span>
                                                    </fieldset>
                                                </div>
                                                <div className="mt-10">
                                                    <div className="flex items-center justify-between">
                                                        <h4 className="text-sm text-gray-900 font-medium">Size</h4>
                                                        <h3 className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</h3>
                                                    </div>
                                                    <fieldset className="mt-4">
                                                        <legend className="sr-only">Choose a size</legend>
                                                        <div className="grid grid-cols-4 gap-4">
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="XXS" className="sr-only" aria-labelledby="size-choice-0-label" />
                                                                <span id="size-choice-0-label"> XXS </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="XS" className="sr-only" aria-labelledby="size-choice-1-label" />
                                                                <span id="size-choice-1-label"> XS </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="S" className="sr-only" aria-labelledby="size-choice-2-label" />
                                                                <span id="size-choice-2-label"> S </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="M" className="sr-only" aria-labelledby="size-choice-3-label" />
                                                                <span id="size-choice-3-label"> M </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="L" className="sr-only" aria-labelledby="size-choice-4-label" />
                                                                <span id="size-choice-4-label"> L </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="XL" className="sr-only" aria-labelledby="size-choice-5-label" />
                                                                <span id="size-choice-5-label"> XL </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-white shadow-sm text-gray-900 cursor-pointer">
                                                                <input type="radio" name="size-choice" value="XXL" className="sr-only" aria-labelledby="size-choice-6-label" />
                                                                <span id="size-choice-6-label"> XXL </span>
                                                                <span className="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></span>
                                                            </label>
                                                            <label className="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 bg-gray-50 text-gray-200 cursor-not-allowed">
                                                                <input type="radio" name="size-choice" value="XXXL" disabled className="sr-only" aria-labelledby="size-choice-7-label" />
                                                                <span id="size-choice-7-label"> XXXL </span>
                                                                <span aria-hidden="true" className="absolute -inset-px rounded-md border-2 border-gray-200 pointer-events-none">
                                                                    <svg className="absolute inset-0 w-full h-full text-gray-200 stroke-2" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                                                                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                                                                    </svg>
                                                                </span>
                                                            </label>
                                                        </div>
                                                    </fieldset>
                                                </div>
                                                <button type="submit" className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>
                                            </form>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CodeDisplayLayout>
                                <CopyBlock
                                    text={Sample3}
                                    language="html"
                                    showLineNumbers={false}
                                    theme={dracula}
                                    codeBlock
                                />
                            </CodeDisplayLayout>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 my-10'>
                        <div>
                            <CodeDisplayLayout>
                                <CopyBlock
                                    text={Sample4}
                                    language="html"
                                    showLineNumbers={false}
                                    theme={dracula}
                                    codeBlock
                                />
                            </CodeDisplayLayout>
                        </div>
                        <div>
                            <div className="mt-5">
                                <form action="#" method="POST">
                                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label for="company-website" className="block text-sm font-medium text-gray-700"> Website </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm p-1"> http:// </span>
                                                        <input type="text" name="company-website" id="company-website" className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm rounded-l-md border border-r-0 border-gray-300 p-1" placeholder="www.example.com" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-700"> About </label>
                                                <div className="mt-1">
                                                    <textarea id="about" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="you@example.com"></textarea>
                                                </div>
                                                <p className="mt-2 text-sm text-gray-500">Brief description for your profile. URLs are hyperlinked.</p>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700"> Photo </label>
                                                <div className="mt-1 flex items-center">
                                                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                                        <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                        </svg>
                                                    </span>
                                                    <button type="button" className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Change</button>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700"> Cover photo </label>
                                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                    <div className="space-y-1 text-center">
                                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        <div className="flex text-sm text-gray-600">
                                                            <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 my-10'>
                        <div>
                            <div className="mt-10 sm:mt-0 text-black">
                                <div className="mt-5">
                                    <form action="#" method="POST">
                                        <div className="shadow overflow-hidden sm:rounded-md">
                                            <div className="px-4 py-5 bg-white sm:p-6">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-4">
                                                        <label for="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                                                        <input type="text" name="email-address" id="email-address" autocomplete="email" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label for="country" className="block text-sm font-medium text-gray-700">Country</label>
                                                        <select id="country" name="country" autocomplete="country-name" className="mt-1 block w-full sm:text-sm border border-black rounded p-1">
                                                            <option>United States</option>
                                                            <option>Canada</option>
                                                            <option>Mexico</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label for="street-address" className="block text-sm font-medium text-gray-700">Street address</label>
                                                        <input type="text" name="street-address" id="street-address" autocomplete="street-address" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                                        <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                                                        <input type="text" name="city" id="city" autocomplete="address-level2" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label for="region" className="block text-sm font-medium text-gray-700">State / Province</label>
                                                        <input type="text" name="region" id="region" autocomplete="address-level1" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                                        <label for="postal-code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                                                        <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" className="mt-1 block w-full sm:text-sm border border-black rounded p-1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div>
                            <CodeDisplayLayout>
                                <CopyBlock
                                    text={Sample5}
                                    language="html"
                                    showLineNumbers={false}
                                    theme={dracula}
                                    codeBlock
                                />
                            </CodeDisplayLayout>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 my-10'>
                        <div>
                            <CodeDisplayLayout>
                                <CopyBlock
                                    text={Sample6}
                                    language="html"
                                    showLineNumbers={false}
                                    theme={dracula}
                                    codeBlock
                                />
                            </CodeDisplayLayout>
                        </div>
                        <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <h3>
                                <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product" />
                            </h3>
                            <div className="px-5 pb-5">
                                <h3>
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                                </h3>
                                <div className="flex items-center mt-2.5 mb-5">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                    <h3 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-10 my-10'>
                        <div>
                            <div className="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                                <time className="text-lg font-semibold text-gray-900 dark:text-white">January 13th, 2022</time>
                                <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                                    <li>
                                        <h3 className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos" />
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                                                <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                                    Public
                                                </span>
                                            </div>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3 className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green" />
                                            <div>
                                                <div className="text-base font-normal text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span className="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
                                                    Private
                                                </span>
                                            </div>
                                        </h3>
                                    </li>
                                </ol>
                            </div>
                            <div className="p-5 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
                                <time className="text-lg font-semibold text-gray-900 dark:text-white">January 12th, 2022</time>
                                <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
                                    <li>
                                        <h3 className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Laura Romeros" />
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Laura Romeros</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                                                <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
                                                    Private
                                                </span>
                                            </div>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3 className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Mike Willi" />
                                            <div>
                                                <div className="text-base font-normal text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Mike Willi</span> react to <span className="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                                    Public
                                                </span>
                                            </div>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3 className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos" />
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                                                <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                                                    Public
                                                </span>
                                            </div>
                                        </h3>
                                    </li>
                                    <li>
                                        <h3 className="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <img className="mr-3 mb-3 w-12 h-12 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green" />
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Bonnie Green</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> Top figma designs</span></div>
                                                <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                                                <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clip-rule="evenodd"></path><path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"></path></svg>
                                                    Private
                                                </span>
                                            </div>
                                        </h3>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <CodeDisplayLayout>
                            <CopyBlock
                                text={Sample7}
                                language="html"
                                showLineNumbers={false}
                                theme={dracula}
                                codeBlock
                            />
                        </CodeDisplayLayout>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TailwaindComponents