import React from 'react'

function Search() {
    return (
        <div className='w-full bg-[#051a49] mb-12 px-6 py-12 mt-[4.71rem]'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-4 gap-2 items-center lg:px-20'>
                    <div className="flex-auto">
                        <input type="text" placeholder="Keyword" className='w-full' />
                    </div>
                    <div className="flex-auto">
                        <select className='w-full'>
                            <option value="0">Category</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                        </select>
                    </div>
                    <div className="flex-auto">
                        <select className='w-full'>
                            <option value="0">Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                            <option value="3">Location 3</option>
                        </select>
                    </div>
                    <div className="flex-auto">
                        <button className="border-0 w-full bg-[#2B3940] text-white">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
