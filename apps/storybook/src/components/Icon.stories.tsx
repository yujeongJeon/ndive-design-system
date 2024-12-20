import {SIZE} from '@ndive/design-components'
import {
    IconDown,
    IconUp,
    IconSetting,
    IconFilter,
    IconChat,
    IconAdd,
    IconHome,
    IconCalendar,
    IconMenu,
    IconAlarm,
    IconLockFill,
    IconLocation,
    IconShield,
    IconUserSquare,
    IconDocument,
    IconMap,
    IconTransfer,
    IconHeart,
    IconCommunity,
    IconSend,
    IconBookmark,
    IconPencil,
    IconCamera,
    IconNotice,
    IconReply,
    IconThumbUp,
    IconComment,
    IconThumbUpFill,
    IconQuestion,
    IconSiren,
    IconShare,
    IconSymbol,
    IconNew,
    IconDownload,
    IconOn,
    IconWarning,
    IconNext,
    IconBack,
    IconSearch,
    IconOption,
    IconRecommend,
    IconProfile,
    IconCancel,
    IconTrash,
    IconCheck,
    IconBackArrow,
    IconRemove,
    IconApple,
    IconKakao,
    IconCheckBox,
    IconEyeOn,
    IconEyeOff,
    IconReset,
} from '@ndive/design-components/icons'

import type {Meta} from '@storybook/react'

const iconSet = {
    IconDown,
    IconUp,
    IconSetting,
    IconFilter,
    IconChat,
    IconAdd,
    IconHome,
    IconCalendar,
    IconMenu,
    IconAlarm,
    IconLockFill,
    IconLocation,
    IconShield,
    IconUserSquare,
    IconDocument,
    IconMap,
    IconTransfer,
    IconHeart,
    IconCommunity,
    IconSend,
    IconBookmark,
    IconPencil,
    IconCamera,
    IconNotice,
    IconReply,
    IconThumbUp,
    IconComment,
    IconThumbUpFill,
    IconQuestion,
    IconSiren,
    IconShare,
    IconSymbol,
    IconNew,
    IconDownload,
    IconOn,
    IconWarning,
    IconNext,
    IconBack,
    IconSearch,
    IconOption,
    IconRecommend,
    IconProfile,
    IconCancel,
    IconTrash,
    IconCheck,
    IconBackArrow,
    IconRemove,
    IconApple,
    IconKakao,
    IconCheckBox,
    IconEyeOn,
    IconEyeOff,
    IconReset,
}

export const Icon = ({size}: {size: keyof typeof SIZE}) => {
    const sizeObj = SIZE[size]
    const commonProps = {
        ...sizeObj,
        fill: '#000',
    }

    return (
        <>
            {Object.entries(iconSet).map(([iconName, IconComponent]) => (
                <IconComponent key={iconName} {...commonProps} />
            ))}
        </>
    )
}

export default {
    title: 'Components/Icons',
    component: Icon,
    args: {
        size: 'm',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: Object.keys(SIZE),
        },
    },
} satisfies Meta<typeof Icon>
