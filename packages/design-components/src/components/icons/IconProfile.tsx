import {memo} from 'react'

import type {SVGProps} from 'react'

function IconProfile(props: SVGProps<SVGSVGElement>) {
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
                    d="M12.002 11.4a3.7 3.7 0 1 0 0-7.4 3.7 3.7 0 0 0 0 7.4M4.7 18.885V20h14.604v-1.115c0-2.96-2.229-5.36-4.978-5.36H9.678c-2.749 0-4.978 2.4-4.978 5.36"
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

export default memo(IconProfile)
