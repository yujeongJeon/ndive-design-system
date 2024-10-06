import {memo} from 'react'

import type {SVGProps} from 'react'

function IconDocument(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={props.fill} fillRule="evenodd" clipPath="url(#icons__a)" clipRule="evenodd">
                <path d="M18 4H6a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h6.8v-4c0-1.102.898-2 2-2h4V4.8A.8.8 0 0 0 18 4" />
                <path d="M14 16v4l4.8-4.8h-4a.8.8 0 0 0-.8.8" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconDocument)
