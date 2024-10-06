import {memo} from 'react'

import type {SVGProps} from 'react'

function IconDownload(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={props.fill} clipPath="url(#icons__a)">
                <path d="M11.342 14.833a.93.93 0 0 0 .65.267.94.94 0 0 0 .65-.267L17 10.467a.92.92 0 0 0-1.3-1.3l-2.792 2.791V4.317a.914.914 0 0 0-.916-.917.914.914 0 0 0-.917.917v7.65l-2.8-2.792a.92.92 0 0 0-1.3 1.3z" />
                <path d="M19.817 12.908a.914.914 0 0 0-.917.917v3.508c0 .6-.483 1.084-1.083 1.084H6.167c-.6 0-1.084-.484-1.084-1.084v-3.508a.914.914 0 0 0-.916-.917.914.914 0 0 0-.917.917v3.508a2.92 2.92 0 0 0 2.917 2.917h11.65a2.92 2.92 0 0 0 2.916-2.917v-3.508a.914.914 0 0 0-.916-.917" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconDownload)
