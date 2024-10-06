import {memo} from 'react'

import type {SVGProps} from 'react'

function IconShare(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <g fill={props.fill} fillRule="evenodd" clipPath="url(#icons__a)" clipRule="evenodd">
                <path d="m8.278 9.676 2.795-2.796v7.65a.917.917 0 1 0 1.834 0V6.88l2.796 2.796a.912.912 0 0 0 1.494-.298A.92.92 0 0 0 17 8.38l-4.361-4.36a.92.92 0 0 0-1.296 0L6.98 8.378a.918.918 0 0 0 1.297 1.297" />
                <path d="M18.984 12.91a.92.92 0 0 0-.917.918v3.505c0 .598-.486 1.084-1.083 1.084H6.997a1.084 1.084 0 0 1-1.084-1.084v-3.506a.917.917 0 0 0-1.833 0v3.506a2.92 2.92 0 0 0 2.917 2.917h9.987a2.92 2.92 0 0 0 2.917-2.917v-3.506a.917.917 0 0 0-.917-.917" />
            </g>
            <defs>
                <clipPath id="icons__a">
                    <path fill="#fff" d="M0 0h24v24H0z" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default memo(IconShare)
