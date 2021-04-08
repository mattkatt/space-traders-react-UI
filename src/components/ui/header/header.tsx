import React, { FC } from 'react'
import styles from './header.module.css'

interface IHeader {
    title: string
}

const Header: FC<IHeader> = ({
    title,
    children
}) => {
    return (
        <header className={ styles.header }>
            <h1 className={ styles.headerTitle }>{ title }</h1>

            <div className={ styles.headerContent }>
                { children }
            </div>
        </header>
    )
}

export default Header
