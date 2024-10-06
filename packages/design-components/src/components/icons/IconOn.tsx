import {memo} from 'react'

import type {SVGProps} from 'react'

function IconOn(props: SVGProps<SVGSVGElement>) {
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
                    d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14m0-1.4a5.6 5.6 0 1 0 0-11.2 5.6 5.6 0 0 0 0 11.2"
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

export default memo(IconOn)
