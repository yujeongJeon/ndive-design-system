import {memo} from 'react'

import type {SVGProps} from 'react'

function IconReset(props: SVGProps<SVGSVGElement>) {
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
                    d="M19.473 12.302a1 1 0 0 0-1.157.813 6.415 6.415 0 0 1-6.334 5.315A6.437 6.437 0 0 1 5.552 12a6.437 6.437 0 0 1 6.43-6.43 6.38 6.38 0 0 1 4.312 1.67l-.827.828a.825.825 0 0 0 .458 1.4l3.51.541a.826.826 0 0 0 .94-.942l-.54-3.51a.826.826 0 0 0-1.4-.458l-.727.728a8.37 8.37 0 0 0-5.726-2.256c-4.648 0-8.43 3.782-8.43 8.429s3.782 8.43 8.43 8.43a8.41 8.41 0 0 0 8.304-6.972 1 1 0 0 0-.814-1.156"
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

export default memo(IconReset)
