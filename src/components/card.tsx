import React from 'react'

export default function Card() {
    return (
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
            <a
                href="#"
                className="relative block p-4 overflow-hidden border border-gray-100 rounded-lg backdrop-blur-[1px] sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Building a SaaS product as a software developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                    </p>
                </div>

                <dl className="flex gap-4 mt-6 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>

                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                    </div>
                </dl>
            </a>
            <a
                href="#"
                className="relative block p-4 overflow-hidden border border-gray-100 rounded-lg backdrop-blur-[1px] sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Building a SaaS product as a software developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                    </p>
                </div>

                <dl className="flex gap-4 mt-6 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>

                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                    </div>
                </dl>
            </a>  <a
                href="#"
                className="relative block p-4 overflow-hidden border border-gray-100 rounded-lg backdrop-blur-[1px] sm:p-6 lg:p-8"
            >
                <span
                    className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                ></span>

                <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                            Building a SaaS product as a software developer
                        </h3>

                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                        <img
                            alt="Paul Clapton"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                            className="object-cover w-16 h-16 rounded-lg shadow-sm"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
                        provident a, ipsa maiores deleniti consectetur nobis et eaque.
                    </p>
                </div>

                <dl className="flex gap-4 mt-6 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>

                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">3 minute</dd>
                    </div>
                </dl>
            </a>
        </div>
    )
}
