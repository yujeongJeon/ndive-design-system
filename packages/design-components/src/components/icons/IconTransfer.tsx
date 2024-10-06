import {memo} from 'react'

import type {SVGProps} from 'react'

function IconTransfer(props: SVGProps<SVGSVGElement>) {
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
                    d="M3 12c0 4.99 4.01 9 9 9s9-4.01 9-9-4.01-9-9-9-9 4.01-9 9m4.5 0c0-.49.327-.818.818-.818h5.4L11.836 9.3a.79.79 0 0 1 0-1.145.79.79 0 0 1 1.146 0l3.273 3.272a.79.79 0 0 1 0 1.146l-3.273 3.272a.74.74 0 0 1-.573.246.74.74 0 0 1-.573-.246.79.79 0 0 1 0-1.145l1.882-1.882h-5.4A.82.82 0 0 1 7.5 12"
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

export default memo(IconTransfer)
