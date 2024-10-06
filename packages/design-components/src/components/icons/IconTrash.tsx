import {memo} from 'react'

import type {SVGProps} from 'react'

function IconTrash(props: SVGProps<SVGSVGElement>) {
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
                    d="M16 7.2h4v1.6h-1.6v10.4a.8.8 0 0 1-.8.8H6.4a.8.8 0 0 1-.8-.8V8.8H4V7.2h4V4.8a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 .8.8zm.8 1.6H7.2v9.6h9.6zm-7.2 2.4h1.6V16H9.6zm3.2 0h1.6V16h-1.6zM9.6 5.6v1.6h4.8V5.6z"
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

export default memo(IconTrash)
