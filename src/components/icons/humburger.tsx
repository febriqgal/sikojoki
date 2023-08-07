import React from 'react'

export default function HumbergerIcon({ className }: { className: string } & React.ComponentPropsWithRef<"svg">) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"

            xmlns="http://www.w3.org/2000/svg">
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.25 8C6.25 7.58579 6.58579 7.25 7 7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H7C6.58579 8.75 6.25 8.41421 6.25 8Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.25 12C6.25 11.5858 6.58579 11.25 7 11.25H17C17.4142 11.25 17.75 11.5858 17.75 12C17.75 12.4142 17.4142 12.75 17 12.75H7C6.58579 12.75 6.25 12.4142 6.25 12Z"
            />
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.25 16C11.25 15.5858 11.5858 15.25 12 15.25L17 15.25C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H12C11.5858 16.75 11.25 16.4142 11.25 16Z" />
        </svg>



    )
}
