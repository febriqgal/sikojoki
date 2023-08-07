import React from 'react'

export default function PortfolioIcon({ className }: { className: string } & React.ComponentPropsWithRef<"svg">) {
    return (
        <svg
            className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M21 17V10C21 7.79086 19.2987 6 17.2 6H14.6667C13.8445 6 13.0444 5.71929 12.3867 5.2L10.6133 3.8C9.95557 3.28071 9.15554 3 8.33333 3H5.8C3.70132 3 2 4.79086 2 7V17C2 19.2091 3.70132 21 5.8 21H17.2C19.2987 21 21 19.2091 21 17Z" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4939 10.4356C15.8056 10.7083 15.8372 11.1822 15.5645 11.4939L12.6946 14.7738C12.0779 15.4786 11.0156 15.5729 10.2843 14.9879L8.53151 13.5857C8.20806 13.3269 8.15562 12.8549 8.41438 12.5315C8.67313 12.208 9.1451 12.1556 9.46855 12.4144L11.2214 13.8166C11.3258 13.9002 11.4776 13.8867 11.5657 13.786L14.4356 10.5061C14.7084 10.1944 15.1822 10.1628 15.4939 10.4356Z" />
        </svg>



    )
}