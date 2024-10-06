import {memo} from 'react'

import type {SVGProps} from 'react'

function IconLockFill(props: SVGProps<SVGSVGElement>) {
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
                    d="M17.5 9.007h.968a.905.905 0 0 1 .94.904v10.204a.904.904 0 0 1-.904.905h-13a.905.905 0 0 1-.904-.905V9.911a.905.905 0 0 1 .905-.904h.904v-.462a5.545 5.545 0 1 1 11.09 0zM8.512 7.116c-.188.453-.284.939-.284 1.43v.46H15.7v-.46a3.735 3.735 0 0 0-7.188-1.43m2.547 6.034h1.81v3.709h-1.81z"
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

export default memo(IconLockFill)
