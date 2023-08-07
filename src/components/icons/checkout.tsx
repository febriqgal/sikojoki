import React from 'react'

export default function CheckoutIcons({ className }: { className: string } & React.ComponentPropsWithRef<"svg">) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"

            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.75 1.25C2.33579 1.25 2 1.58579 2 2C2 2.41421 2.33579 2.75 2.75 2.75H4.75C5.44036 2.75 6 3.30964 6 4H7.5C7.5 2.48122 6.26878 1.25 4.75 1.25H2.75Z"
            />
            <path
                opacity="0.4"
                d="M6 4H18C20.2091 4 22 5.79086 22 8V13C22 15.2091 20.2091 17 18 17H10C7.79086 17 6 15.2091 6 13V4Z"
            />
            <circle
                cx="9.5"
                cy="20.5"
                r="1.5"
            />
            <circle
                cx="18.5"
                cy="20.5"
                r="1.5"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M14 7.25C14.4142 7.25 14.75 7.58579 14.75 8V9.75H16.5C16.9142 9.75 17.25 10.0858 17.25 10.5C17.25 10.9142 16.9142 11.25 16.5 11.25H14.75V13C14.75 13.4142 14.4142 13.75 14 13.75C13.5858 13.75 13.25 13.4142 13.25 13L13.25 11.25L11.5 11.25C11.0858 11.25 10.75 10.9142 10.75 10.5C10.75 10.0858 11.0858 9.75 11.5 9.75H13.25V8C13.25 7.58579 13.5858 7.25 14 7.25Z" />
        </svg>


    )
}
