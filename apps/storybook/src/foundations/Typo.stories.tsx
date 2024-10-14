import {Meta} from '@storybook/react'

import styles from './Typo.module.scss'

export default {
    title: 'Foundations/Typo',
} satisfies Meta

export const TYPO = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.display}`}>
                <div className={styles.bold}>Display Bold</div>
                <div className={styles.medium}>Display Medium</div>
            </div>
            <div className={`${styles.container} ${styles.heading}`}>
                <div className={styles['bold-1']}>Heading Bold 1</div>
                <div className={styles['bold-2']}>Heading Bold 2</div>
                <div className={styles['bold-3']}>Heading Bold 3</div>
                <div className={styles['bold-4']}>Heading Bold 4</div>
            </div>
            <div className={`${styles.container} ${styles.body}`}>
                <div className={styles.bold}>Body Bold</div>
                <div className={styles['medium-1']}>Body Medium 1</div>
                <div className={styles['medium-2']}>Body Medium 2</div>
            </div>
            <div className={`${styles.container} ${styles.caption}`}>
                <div className={styles.bold}>Caption Bold</div>
                <div className={styles.medium}>Caption Medium</div>
            </div>
        </>
    )
}
