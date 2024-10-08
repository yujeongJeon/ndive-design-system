import {CommonButtonProps} from '$/types/button.types'

export default function ButtonSub({text, onClick, attributes, disabled}: CommonButtonProps) {
    return (
        <button onClick={onClick} disabled={disabled} {...attributes}>
            {text}
        </button>
    )
}
