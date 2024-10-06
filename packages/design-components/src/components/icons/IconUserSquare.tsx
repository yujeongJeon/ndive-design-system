import {memo} from 'react'

import type {SVGProps} from 'react'

function IconUserSquare(props: SVGProps<SVGSVGElement>) {
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
                    d="M11.992 17.582c-2.105 0-5.21-.296-5.21-1.406s1.459-3.498 5.21-3.498 5.21 2.388 5.21 3.498-3.105 1.406-5.21 1.406m0-11.156a2.605 2.605 0 1 1 0 5.21 2.605 2.605 0 0 1 0-5.21M19.105 3H4.895A1.895 1.895 0 0 0 3 4.895v14.21A1.894 1.894 0 0 0 4.895 21h14.21A1.894 1.894 0 0 0 21 19.105V4.895A1.894 1.894 0 0 0 19.105 3"
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

export default memo(IconUserSquare)
