import {memo} from 'react'

import type {SVGProps} from 'react'

function IconBackArrow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g stroke={props.fill} strokeWidth={1.5} clipPath="url(#icons__a)">
                <path d="M5 11.9h13.767M11.293 17.8 5 11.9 11.392 6" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconBackArrow)
