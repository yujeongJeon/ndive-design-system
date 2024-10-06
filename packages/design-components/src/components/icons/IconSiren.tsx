import {memo} from 'react'

import type {SVGProps} from 'react'

function IconSiren(props: SVGProps<SVGSVGElement>) {
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
                d="M19.703 18.173a.89.89 0 0 0-.879-.739h-.444V10.38l-.003-.192a6.38 6.38 0 0 0-12.757.192v7.055h-.445a.89.89 0 0 0-.879.739L3.98 20h16.042zm-8.39-9.824a.688.688 0 0 1 1.374 0v2.838a.688.688 0 1 1-1.375 0zM12 13.023A.904.904 0 1 1 12 14.83a.904.904 0 0 1 0-1.808"
                clipRule="evenodd"
            />
        </svg>
    )
}

export default memo(IconSiren)
