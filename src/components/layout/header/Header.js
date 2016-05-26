import React, { Component } from 'react'
import { Link } from 'react-router'

import styles from './header.css'

export default class Header extends Component {
	render() {
		return <div className={styles.block}>
			<Link className={styles.link} to="/">Главная</Link>
			<Link className={styles.link} to="/books">Книги</Link>
			<Link className={styles.link} to="/about">О нас</Link>
		</div>
	}
}