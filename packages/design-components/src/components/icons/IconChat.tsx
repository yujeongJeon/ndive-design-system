import {memo} from 'react'

import type {SVGProps} from 'react'

function IconChat(props: SVGProps<SVGSVGElement>) {
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
                    d="M3.25 12c0-4.83 3.898-8.75 8.714-8.75S20.68 7.17 20.68 12c0 1.401-.33 2.729-.914 3.905l.728 2.728a1.27 1.27 0 0 1-1.558 1.553l-2.506-.674a8.64 8.64 0 0 1-4.465 1.238c-4.816 0-8.714-3.92-8.714-8.75m4.785.975a.975.975 0 1 0 0-1.95.975.975 0 0 0 0 1.95M12.91 12a.975.975 0 1 1-1.95 0 .975.975 0 0 1 1.95 0m2.925.975a.975.975 0 1 0 0-1.95.975.975 0 0 0 0 1.95"
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

export default memo(IconChat)
