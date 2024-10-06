import {memo} from 'react'

import type {SVGProps} from 'react'

function IconApple(props: SVGProps<SVGSVGElement>) {
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
                    fill="#000"
                    d="M17.72 12.635c.03 3.172 2.783 4.228 2.814 4.241-.024.075-.44 1.505-1.451 2.981-.874 1.277-1.78 2.55-3.209 2.576-1.403.026-1.854-.832-3.459-.832s-2.105.805-3.434.858c-1.379.052-2.428-1.381-3.31-2.653-1.8-2.603-3.175-7.354-1.328-10.56.918-1.593 2.558-2.602 4.337-2.628 1.354-.025 2.632.911 3.46.911s2.38-1.126 4.012-.96c.683.028 2.602.275 3.833 2.078-.099.062-2.288 1.337-2.265 3.988m-2.637-7.788c.732-.886 1.224-2.12 1.09-3.347-1.055.042-2.33.703-3.088 1.589-.678.784-1.272 2.039-1.112 3.242 1.176.09 2.378-.598 3.11-1.484"
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

export default memo(IconApple)
