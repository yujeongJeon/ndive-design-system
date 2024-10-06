import {memo} from 'react'

import type {SVGProps} from 'react'

function IconSearch(props: SVGProps<SVGSVGElement>) {
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
                    d="M16.703 11.176a5.727 5.727 0 1 1-11.454 0 5.727 5.727 0 0 1 11.454 0m-1.029 5.425a7.176 7.176 0 1 1 .994-1.054l3.557 3.428L19.2 20z"
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

export default memo(IconSearch)
