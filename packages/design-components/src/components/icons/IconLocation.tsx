import {memo} from 'react'

import type {SVGProps} from 'react'

function IconLocation(props: SVGProps<SVGSVGElement>) {
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
                    d="M12.02 12.992c-1.618 0-2.933-1.29-2.933-2.881 0-1.594 1.315-2.882 2.933-2.882 1.62 0 2.932 1.289 2.932 2.882 0 1.59-1.313 2.881-2.932 2.881m5.897-6.887a7.04 7.04 0 0 0-4.615-2.989 7.3 7.3 0 0 0-2.862.054 7.3 7.3 0 0 0-4.483 3.077c-1.075 1.636-1.41 3.639-.966 5.795.728 3.53 3.114 6.816 6.384 8.789.19.114.404.169.618.169.24 0 .479-.07.682-.209 3.257-2.218 5.635-5.56 6.359-8.938a7.45 7.45 0 0 0-1.117-5.748"
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

export default memo(IconLocation)
