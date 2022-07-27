const Sample5 = `<div className="mt-10 sm:mt-0 text-black">
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
</div>`

export default Sample5