import {memo} from 'react'

import type {SVGProps} from 'react'

function IconThumbUp(props: SVGProps<SVGSVGElement>) {
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
                    stroke={props.fill}
                    strokeWidth={0.444}
                    d="M10.286 4a.57.57 0 0 0-.56.455v.004L9.169 7.24 7.52 10.54a.5.5 0 0 0-.054.109l-.002.004-.102.204h-2.79A.57.57 0 0 0 4 11.43v8c0 .316.256.572.572.572h3.336a.6.6 0 0 0 .186 0h-.003 9.052c.267 0 .49-.182.553-.429l.001-.004 2.286-9.143a.571.571 0 0 0-.554-.71h-6.286V6.286A2.294 2.294 0 0 0 10.857 4h-.571Zm.469 1.143h.103c.643 0 1.143.5 1.143 1.143v4c0 .316.255.572.571.572h6.126l-2 8H8.571v-7.865l1.654-3.308a.6.6 0 0 0 .049-.14v-.003l.48-2.398zM5.144 12h2.285v6.857H5.144z"
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

export default memo(IconThumbUp)
