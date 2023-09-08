import React from "react";

export default function ServiceIcon({
  className,
}: { className: string } & React.ComponentPropsWithRef<"svg">) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        fillRule="evenodd"
        clip-rule="evenodd"
        d="M6 4H18C19.0766 4 19.9545 4.85059 19.9983 5.91638H14.8997C13.7951 5.91638 12.8997 6.81181 12.8997 7.91638V17H4V6C4 4.89543 4.89543 4 6 4Z"
      />
      <path d="M14 9C14 7.89543 14.8954 7 16 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20H16C14.8954 20 14 19.1046 14 18V9Z" />
      <path d="M13 17H3.5C2.67157 17 2 17.6716 2 18.5C2 19.3284 2.67157 20 3.5 20H13V17Z" />
    </svg>
  );
}
