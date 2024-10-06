import {memo} from 'react'

import type {SVGProps} from 'react'

function IconBack(props: SVGProps<SVGSVGElement>) {
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
                    d="M16.2 6.252 14.926 5 7.8 12l7.126 7 1.274-1.251L10.348 12z"
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

export default memo(IconBack)
