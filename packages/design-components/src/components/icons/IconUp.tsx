import {memo} from 'react'

import type {SVGProps} from 'react'

function IconUp(props: SVGProps<SVGSVGElement>) {
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
                <path d="M12.1 6v11.767M6.2 11.379 12.1 6l5.9 5.463" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconUp)
