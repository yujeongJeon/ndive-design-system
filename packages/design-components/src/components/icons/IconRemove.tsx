import {memo} from 'react'

import type {SVGProps} from 'react'

function IconRemove(props: SVGProps<SVGSVGElement>) {
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
                <circle cx={12} cy={12} r={10} fill={props.fill} />
                <path fill={props.fill} fillRule="evenodd" d="m9.5 14.5 5-5z" clipRule="evenodd" />
                <path stroke="#fff" strokeLinecap="square" strokeLinejoin="round" strokeWidth={1.5} d="m9.5 14.5 5-5" />
                <path fill={props.fill} fillRule="evenodd" d="m14.5 14.5-5-5z" clipRule="evenodd" />
                <path
                    stroke="#fff"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="m14.5 14.5-5-5"
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

export default memo(IconRemove)
