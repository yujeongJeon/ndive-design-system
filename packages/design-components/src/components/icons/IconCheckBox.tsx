import {memo} from 'react'

import type {SVGProps} from 'react'

function IconCheckBox(props: SVGProps<SVGSVGElement>) {
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
                <circle cx={12} cy={12} r={9.6} fill={props.fill} />
                <path fill="#fff" d="M21.6 12a9.6 9.6 0 1 1-19.2 0 9.6 9.6 0 0 1 19.2 0" />
                <path
                    fill={props.fill}
                    fillRule="evenodd"
                    d="M12 19.8a7.8 7.8 0 1 0 0-15.6 7.8 7.8 0 0 0 0 15.6m0 1.8a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2"
                    clipRule="evenodd"
                />
                <path
                    fill={props.fill}
                    fillRule="evenodd"
                    d="M16.237 10.236 11.4 15.073l-3.636-3.637 1.272-1.272 2.364 2.363 3.564-3.563z"
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

export default memo(IconCheckBox)
