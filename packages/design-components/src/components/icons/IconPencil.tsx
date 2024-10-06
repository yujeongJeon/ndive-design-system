import {memo} from 'react'

import type {SVGProps} from 'react'

function IconPencil(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                fill={props.fill}
                fillRule="evenodd"
                d="m12.229 7.063-6.87 6.87-.937 3.494-.616 2.302a.38.38 0 0 0 .465.465l2.3-.617 3.496-.937 6.87-6.87zm7.549.796-3.636-3.637a.76.76 0 0 0-1.072 0l-1.876 1.876 4.708 4.708 1.876-1.876a.756.756 0 0 0 0-1.072"
                clipRule="evenodd"
            />
        </svg>
    )
}

export default memo(IconPencil)
