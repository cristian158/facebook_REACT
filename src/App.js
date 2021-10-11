// import React from 'react';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import react component defined whatever we want referencing the path to the svg icon

// a function with capital at the beginning, we can think of it as a Component (functional component)
//the return value of a functional component is the UI or HTML or JSX more accurately
//JSX is syntax extension for JS that allows to write html as templates in components
// Component Composition: react makes it easy to break down apps into reusable pieces
function App() {
  return (
	<Navbar>
		<NavItem icon={<PlusIcon />} />
		<NavItem icon={<BellIcon />} />
		<NavItem icon={<MessengerIcon />} />
		<NavItem icon={<CaretIcon />}>
			<DropdownMenu />
		</NavItem>
	</Navbar>
	// we declare the className from NavBar element
	// the CaretIcon needs some state, meaning data that changes throughout the lifecycle of the app. manage the state in React using a hook called useState
  );
}

function DropdownMenu(){

	const[activeMenu, setActiveMenu] = useState('main');
	const [menuHeight, setMenuHeight] = useState(null);

	function calcHeight(el) {
		const height = el.offsetHeight;
		setMenuHeight(height);
	}



	function DropdownItem(props){
		return (
			<a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
				<span className='icon-button'>{props.lefticon}</span>
				{props.children}

				<span className='icon-right'>{props.rightIcon}</span>
			</a>
		);
	}

	return(
		<div className='dropdown' style={{ height: menuHeight}}>
			<CSSTransition
				in={activeMenu === 'main'}
				unmountOnExit
				timeout={500}
				className='menu-primary'
				onEnter={calcHeight}
				>
					<div className='menu'>
					<DropdownItem>My Profile</DropdownItem>
					<DropdownItem
						lefticon={<CogIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu='settings'
						>
							Settings
					</DropdownItem>
					</div>
			</CSSTransition>

			<CSSTransition
				in={activeMenu === 'settings'}
				unmountOnExit
				timeout={500}
				className='menu-secondary'
				>
					<div className='menu'>
					<DropdownItem
						lefticon={<ArrowIcon />}
						rightIcon={<ChevronIcon />}
						goToMenu='main'>
							Settings
							</DropdownItem>
					</div>
			</CSSTransition>
		</div>
	);
}

// component called NavBar
function Navbar(props){
	return(
		// className, unlike normal html
		<nav className="navbar">
			<ul className="navbar-nav"> { props.children }</ul>
		</nav>
	);
}

function NavItem(props){
	const [open, setOpen] = useState(false);
	// the 1st value is the state, set to 'open', boolean value that tells wether the dropdown is open or not. The 2nd value is a function that we use to change the state
	// false is the default value

	//onClick is the event, setOpen is the handler, putting a bang as prefix of boolean makes it the opposite
	return(
		<li className="nav-item">
			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
				{props.icon}
			</a>

			{open && props.children}
		</li>
	);
}
// props.icon === custom prop called icon

export default App;
