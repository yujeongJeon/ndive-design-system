import {memo} from 'react'

import type {SVGProps} from 'react'

function IconFilter(props: SVGProps<SVGSVGElement>) {
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
                    d="M7 6.25a.75.75 0 0 0-.446 1.353l3.643 2.692v5.227c0 .245.119.474.32.614l2.107 1.478a.75.75 0 0 0 1.18-.614v-6.705l3.642-2.692A.75.75 0 0 0 17 6.25z"
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

export default memo(IconFilter)
