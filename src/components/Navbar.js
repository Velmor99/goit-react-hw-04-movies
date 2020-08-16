import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles/NavBar.module.css';

const NavBar = () => {
	return (
		<header className={styles.header}>
			<ul className={styles.navList}>
				<li>
					<NavLink
						style={{
							textDecoration: 'none',
							display: 'block',
							color: '#fff',
							fontSize: '20px',
							paddingTop: '5px'
						}}
						activeStyle={{
							textDecoration: 'none',
							display: 'block',
							color: '#FDCA40',
							fontSize: '20px',
							paddingTop: '5px'
						}}
						exact
						to="/"
					>
						Home
					</NavLink>
				</li>

				<li>
					<NavLink
						style={{
							textDecoration: 'none',
							display: 'block',
							color: '#fff',
							fontSize: '20px',
							paddingTop: '5px'
						}}
						activeStyle={{
							textDecoration: 'none',
							display: 'block',
							color: '#FDCA40',
							fontSize: '20px',
							paddingTop: '5px'
						}}
						to="/movies"
					>
						Movies
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default NavBar;
