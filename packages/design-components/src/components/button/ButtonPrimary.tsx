import {CommonButtonProps} from '$/types/button.types'

export default function ButtonPrimary({
    text,
    onClick,
    attributes,
}: CommonButtonProps & {
    color: string // TODO 타입 정의 필요 through fetch:color
}) {
    return (
        <button onClick={onClick} {...attributes}>
            {text}
        </button>
    )
}
