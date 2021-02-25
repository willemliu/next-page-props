import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

interface Props {
    activeItem?: 'home' | 'page1' | 'page2';
}

function Menu(props: Props) {
    return (
        <nav className={styles.menu}>
            <Link href="/">
                <a
                    className={
                        props.activeItem === 'home' ? `${styles.active}` : ''
                    }
                >
                    Home
                </a>
            </Link>
            <Link href="/page1">
                <a
                    className={
                        props.activeItem === 'page1' ? `${styles.active}` : ''
                    }
                >
                    Page 1
                </a>
            </Link>
            <Link href="/page2">
                <a
                    className={
                        props.activeItem === 'page2' ? `${styles.active}` : ''
                    }
                >
                    Page 2
                </a>
            </Link>
        </nav>
    );
}

export { Menu };
