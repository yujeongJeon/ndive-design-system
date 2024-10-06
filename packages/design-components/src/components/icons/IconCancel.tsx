import {memo} from 'react'

import type {SVGProps} from 'react'

function IconCancel(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g clipPath="url(#icons__a)">
                <path
                    fill={props.fill}
                    fillRule="evenodd"
                    d="M12 10.75 7.625 6.375l-1.25 1.25L10.75 12l-4.375 4.375 1.25 1.25L12 13.25l4.375 4.375 1.25-1.25L13.25 12l4.375-4.375-1.25-1.25z"
                    clipRule="evenodd"
                />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconCancel)
