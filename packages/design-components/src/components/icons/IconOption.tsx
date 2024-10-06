import {memo} from 'react'

import type {SVGProps} from 'react'

function IconOption(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={props.fill} clipPath="url(#icons__a)">
                <circle cx={12} cy={6.5} r={1.5} />
                <circle cx={12} cy={12} r={1.5} />
                <circle cx={12} cy={17.5} r={1.5} />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconOption)
