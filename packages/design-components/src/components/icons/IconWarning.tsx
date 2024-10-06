import {memo} from 'react'

import type {SVGProps} from 'react'

function IconWarning(props: SVGProps<SVGSVGElement>) {
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
                    d="M12 17.417a.96.96 0 1 1 0-1.92.96.96 0 0 1 0 1.92m-.8-7.995a.8.8 0 0 1 1.6 0v4.004a.801.801 0 0 1-1.6 0zm9.54 7.694L13.665 4.86c-.74-1.281-2.59-1.281-3.33 0L3.26 17.116c-.74 1.28.184 2.883 1.665 2.883h14.15c1.48 0 2.404-1.602 1.665-2.883"
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

export default memo(IconWarning)
