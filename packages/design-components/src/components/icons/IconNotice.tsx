import {memo} from 'react'

import type {SVGProps} from 'react'

function IconNotice(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <circle cx={12} cy={12} r={7.333} fill={props.fill} stroke={props.fill} strokeWidth={1.333} />
            <path fill="#fff" d="M11.333 7.778h1.333V14h-1.333zM11.333 14.889h1.333v1.333h-1.333z" />
        </svg>
    )
}

export default memo(IconNotice)
