import {memo} from 'react'

import type {SVGProps} from 'react'

function IconCalendar(props: SVGProps<SVGSVGElement>) {
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
                stroke={props.fill}
                strokeWidth={0.5}
                d="M19.464 5.148H16.02v-.574a.574.574 0 1 0-1.148 0v.574H9.129v-.574a.574.574 0 0 0-1.148 0v.574H4.536a.574.574 0 0 0-.575.575v12.631a.574.574 0 0 0 .575.575h14.928a.574.574 0 0 0 .574-.575V5.723a.574.574 0 0 0-.574-.575ZM7.981 6.297v.574a.574.574 0 1 0 1.148 0v-.574h5.742v.574a.574.574 0 0 0 1.148 0v-.574h2.871v2.296H5.11V6.297zM18.89 17.78H5.11V9.742h13.78z"
            />
        </svg>
    )
}

export default memo(IconCalendar)
