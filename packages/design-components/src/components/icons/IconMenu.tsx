import {memo} from 'react'

import type {SVGProps} from 'react'

function IconMenu(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill={props.fill} d="M5 6.25h14v1.5H5zM5 11.25h14v1.5H5zM5 16.25h9v1.5H5z" />
        </svg>
    )
}

export default memo(IconMenu)
