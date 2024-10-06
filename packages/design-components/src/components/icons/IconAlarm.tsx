import {memo} from 'react'

import type {SVGProps} from 'react'

function IconAlarm(props: SVGProps<SVGSVGElement>) {
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
                d="M10 18h4a2 2 0 1 1-4 0m2.08-13.998a1.5 1.5 0 0 0-1.58 1.5v.761a4.5 4.5 0 0 0-3 4.238v1.258a3 3 0 0 1-.878 2.12l-.208.209a1.42 1.42 0 0 0-.28 1.605 1.46 1.46 0 0 0 1.333.808h9.118A1.415 1.415 0 0 0 18 15.087v-.063a1.4 1.4 0 0 0-.334-.92l-.438-.511a3 3 0 0 1-.728-1.95V10.5a4.5 4.5 0 0 0-3-4.238v-.676c0-.812-.608-1.54-1.42-1.585"
            />
        </svg>
    )
}

export default memo(IconAlarm)
