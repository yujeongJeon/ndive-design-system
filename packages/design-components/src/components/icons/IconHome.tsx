import {memo} from 'react'

import type {SVGProps} from 'react'

function IconHome(props: SVGProps<SVGSVGElement>) {
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
                    d="m19.385 9.38-6.878-5.469a.81.81 0 0 0-1.013 0l-6.88 5.47A1.63 1.63 0 0 0 4 10.655v7.67a1.954 1.954 0 0 0 1.954 1.953h4.418v-3.87a.814.814 0 0 1 .814-.813h1.629a.814.814 0 0 1 .814.814v3.87h4.417A1.954 1.954 0 0 0 20 18.323v-7.668a1.63 1.63 0 0 0-.615-1.274"
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

export default memo(IconHome)
