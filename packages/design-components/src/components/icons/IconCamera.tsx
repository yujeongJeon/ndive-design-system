import {memo} from 'react'

import type {SVGProps} from 'react'

function IconCamera(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <mask
                id="icons__a"
                width={20}
                height={20}
                x={2}
                y={2}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: 'luminance',
                }}
            >
                <path fill="#fff" fillRule="evenodd" d="M22 22H2V2h20z" clipRule="evenodd" />
            </mask>
            <g mask="url(#icons__a)">
                <path
                    fill={props.fill}
                    fillRule="evenodd"
                    d="M4.5 2.833v2.5H2V7h2.5v2.5h1.667V7h2.5V5.333h-2.5v-2.5zm2.5 5v2.5H4.5v8.334c0 .916.75 1.666 1.667 1.666H19.5c.916 0 1.666-.75 1.666-1.666v-10C21.167 7.75 20.417 7 19.5 7h-2.642l-1.525-1.667H9.5v2.5zm5.833 10c2.3 0 4.167-1.866 4.167-4.166S15.133 9.5 12.833 9.5a4.17 4.17 0 0 0-4.166 4.167c0 2.3 1.866 4.166 4.166 4.166m0-1.5a2.664 2.664 0 0 1-2.666-2.666A2.664 2.664 0 0 1 12.833 11a2.664 2.664 0 0 1 2.667 2.667 2.664 2.664 0 0 1-2.667 2.666"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    )
}

export default memo(IconCamera)
