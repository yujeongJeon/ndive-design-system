import {memo} from 'react'

import type {SVGProps} from 'react'

function IconBookmark(props: SVGProps<SVGSVGElement>) {
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
                d="M5.99 5.849c0-.495.353-.849.848-.849h10.324c.495 0 .848.354.848.849V18.08c0 .354-.353.566-.636.354l-4.95-2.828a.9.9 0 0 0-.848 0l-4.95 2.828c-.283.142-.637-.07-.637-.354z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export default memo(IconBookmark)
