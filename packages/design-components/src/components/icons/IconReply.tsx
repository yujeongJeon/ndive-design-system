import {memo} from 'react'

import type {SVGProps} from 'react'

function IconReply(props: SVGProps<SVGSVGElement>) {
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
                <path d="M4.5 4H6v12H4.5z" />
                <path d="M18.5 14.5V16h-14v-1.5z" />
                <path
                    fillRule="evenodd"
                    d="m13.5 11.094.91-.894 5.09 5-5.09 5-.91-.894 4.18-4.106z"
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

export default memo(IconReply)
