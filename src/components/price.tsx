import { Button } from '@nextui-org/button'
import React from 'react'
import CheckoutIcons from './icons/checkout'

export default function PriceComponents() {
    return (
        <div id='service' className="grid min-h-screen gap-5 sm:grid-cols-3 pt-[100px]">
            <div>
                <div className="p-8 rounded bg-primary">
                    <div className="mb-4 text-center">
                        <p className="text-xl font-medium tracking-wide text-white">
                            Silver
                        </p>
                        <div className="flex items-center justify-center">
                            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                $39
                            </p>
                            <p className="text-lg text-white">/ month</p>
                        </div>
                    </div>
                    <ul className="mb-8 space-y-2">
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">10 deploys per day</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">10 GB of storage</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">3 domains</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">SSL Certificates</p>
                        </li>
                    </ul>
                    <Button
                        startContent={<CheckoutIcons className='h-5 fill-primary' />}
                        className='w-full bg-white shadow-white text-primary'
                        radius='full'
                        color='warning'

                        type="submit"


                    >
                        Pesan
                    </Button>
                </div>
                <div className="w-11/12 h-2 mx-auto rounded-b opacity-75 bg-primary" />
                <div className="w-10/12 h-2 mx-auto rounded-b opacity-50 bg-primary" />
                <div className="w-9/12 h-2 mx-auto rounded-b opacity-25 bg-primary" />
            </div>
            <div>
                <div className="p-8 rounded bg-primary">
                    <div className="mb-4 text-center">
                        <p className="text-xl font-medium tracking-wide text-white">
                            Gold
                        </p>
                        <div className="flex items-center justify-center">
                            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                $39
                            </p>
                            <p className="text-lg text-white">/ month</p>
                        </div>
                    </div>
                    <ul className="mb-8 space-y-2">
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">10 deploys per day</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">10 GB of storage</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">3 domains</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">SSL Certificates</p>
                        </li>
                    </ul>
                    <Button
                        startContent={<CheckoutIcons className='h-5 fill-primary' />}
                        className='w-full bg-white shadow-white text-primary'
                        radius='full'
                        color='warning'
                        type="submit"


                    >
                        Pesan
                    </Button>
                </div>
                <div className="w-11/12 h-2 mx-auto rounded-b opacity-75 bg-primary" />
                <div className="w-10/12 h-2 mx-auto rounded-b opacity-50 bg-primary" />
                <div className="w-9/12 h-2 mx-auto rounded-b opacity-25 bg-primary" />
            </div>
            <div>
                <div className="p-8 rounded bg-primary">
                    <div className="mb-4 text-center">
                        <p className="text-xl font-medium tracking-wide text-white">
                            Diamond
                        </p>
                        <div className="flex items-center justify-center">
                            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                                $39
                            </p>
                            <p className="text-lg text-white">/ month</p>
                        </div>
                    </div>
                    <ul className="mb-8 space-y-2">
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">10 deploys per day</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">10 GB of storage</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">3 domains</p>
                        </li>
                        <li className="flex items-center">
                            <div className="mr-3">
                                <svg
                                    className="w-4 h-4 text-teal-accent-400"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                >
                                    <polyline
                                        fill="none"
                                        stroke="currentColor"
                                        points="6,12 10,16 18,8"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        fill="none"
                                        r="11"
                                        stroke="currentColor"
                                    />
                                </svg>
                            </div>
                            <p className="font-medium text-white">SSL Certificates</p>
                        </li>
                    </ul>
                    <Button
                        startContent={<CheckoutIcons className='h-5 fill-primary' />}
                        className='w-full bg-white shadow-white text-primary'
                        radius='full'
                        color='success'

                        type="submit"


                    >
                        Pesan
                    </Button>
                </div>
                <div className="w-11/12 h-2 mx-auto rounded-b opacity-75 bg-primary" />
                <div className="w-10/12 h-2 mx-auto rounded-b opacity-50 bg-primary" />
                <div className="w-9/12 h-2 mx-auto rounded-b opacity-25 bg-primary" />
            </div>
        </div>
    )
}
