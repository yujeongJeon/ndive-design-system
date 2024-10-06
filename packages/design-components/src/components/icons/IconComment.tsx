import {memo} from 'react'

import type {SVGProps} from 'react'

function IconComment(props: SVGProps<SVGSVGElement>) {
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
                    d="M11.965 3.933c-4.442 0-8.036 3.615-8.036 8.067s3.594 8.067 8.035 8.067c1.471 0 2.85-.4 4.035-1.093l2.156.58a1.362 1.362 0 0 0 1.67-1.666l-.63-2.364A8.1 8.1 0 0 0 20 12c0-4.452-3.595-8.067-8.036-8.067M5.721 12c0-3.47 2.798-6.275 6.242-6.275S18.208 8.531 18.208 12a6.3 6.3 0 0 1-.755 2.995.9.9 0 0 0-.078.658l.527 1.977-1.641-.442a.9.9 0 0 0-.88.06 6.2 6.2 0 0 1-3.416 1.027c-3.444 0-6.242-2.806-6.242-6.275"
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

export default memo(IconComment)
