import {memo} from 'react'

import type {SVGProps} from 'react'

function IconNew(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <circle cx={12} cy={12} r={12} fill={props.fill} />
            <path fill="#fff" d="M16 16.923h-1.722l-4.212-6.093h-.08v6.093H8v-9.59h1.748l4.186 6.093h.093V7.333H16z" />
        </svg>
    )
}

export default memo(IconNew)
