import IconAdd from '@ndive/design-components/icons/IconAdd'
import IconAlarm from '@ndive/design-components/icons/IconAlarm'
import IconApple from '@ndive/design-components/icons/IconApple'
import IconBack from '@ndive/design-components/icons/IconBack'
import IconBackArrow from '@ndive/design-components/icons/IconBackArrow'
import IconBookmark from '@ndive/design-components/icons/IconBookmark'
import IconCalendar from '@ndive/design-components/icons/IconCalendar'
import IconCamera from '@ndive/design-components/icons/IconCamera'
import IconCancel from '@ndive/design-components/icons/IconCancel'
import IconChat from '@ndive/design-components/icons/IconChat'
import IconCheck from '@ndive/design-components/icons/IconCheck'
import IconCheckBox from '@ndive/design-components/icons/IconCheckBox'
import IconComment from '@ndive/design-components/icons/IconComment'
import IconCommunity from '@ndive/design-components/icons/IconCommunity'
import IconDocument from '@ndive/design-components/icons/IconDocument'
import IconDown from '@ndive/design-components/icons/IconDown'
import IconDownload from '@ndive/design-components/icons/IconDownload'
import IconEyeOff from '@ndive/design-components/icons/IconEyeOff'
import IconEyeOn from '@ndive/design-components/icons/IconEyeOn'
import IconFilter from '@ndive/design-components/icons/IconFilter'
import IconHeart from '@ndive/design-components/icons/IconHeart'
import IconHome from '@ndive/design-components/icons/IconHome'
import IconKakao from '@ndive/design-components/icons/IconKakao'
import IconLocation from '@ndive/design-components/icons/IconLocation'
import IconLockFill from '@ndive/design-components/icons/IconLockFill'
import IconMap from '@ndive/design-components/icons/IconMap'
import IconMenu from '@ndive/design-components/icons/IconMenu'
import IconNew from '@ndive/design-components/icons/IconNew'
import IconNext from '@ndive/design-components/icons/IconNext'
import IconNotice from '@ndive/design-components/icons/IconNotice'
import IconOn from '@ndive/design-components/icons/IconOn'
import IconOption from '@ndive/design-components/icons/IconOption'
import IconPencil from '@ndive/design-components/icons/IconPencil'
import IconProfile from '@ndive/design-components/icons/IconProfile'
import IconQuestion from '@ndive/design-components/icons/IconQuestion'
import IconRecommend from '@ndive/design-components/icons/IconRecommend'
import IconRemove from '@ndive/design-components/icons/IconRemove'
import IconReply from '@ndive/design-components/icons/IconReply'
import IconReset from '@ndive/design-components/icons/IconReset'
import IconSearch from '@ndive/design-components/icons/IconSearch'
import IconSend from '@ndive/design-components/icons/IconSend'
import IconSetting from '@ndive/design-components/icons/IconSetting'
import IconShare from '@ndive/design-components/icons/IconShare'
import IconShield from '@ndive/design-components/icons/IconShield'
import IconSiren from '@ndive/design-components/icons/IconSiren'
import IconSymbol from '@ndive/design-components/icons/IconSymbol'
import IconThumbUp from '@ndive/design-components/icons/IconThumbUp'
import IconThumbUpFill from '@ndive/design-components/icons/IconThumbUpFill'
import IconTransfer from '@ndive/design-components/icons/IconTransfer'
import IconTrash from '@ndive/design-components/icons/IconTrash'
import IconUp from '@ndive/design-components/icons/IconUp'
import IconUserSquare from '@ndive/design-components/icons/IconUserSquare'
import IconWarning from '@ndive/design-components/icons/IconWarning'
import {SIZE} from '@ndive/design-components/size'

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
