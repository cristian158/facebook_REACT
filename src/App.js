import React from 'react';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';

import React, { useState } from 'react';
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
		// the next NavItem needs some state, meaning data that changes throughout the lifecycle of the app. manage the state in React using a hook called useState
		<NavItem icon={<CaretIcon />}>

		</NavItem>
	</Navbar> // we declare the className from NavBar element
  );
}

// component called NavBar
function Navbar(props){
	return(
		// className, unlike normal html
		<nav className="navbar">
			<ul className="navbar-nav">{ props.children }</ul>
		</nav>
	)
}

function NavItem(props){
	const [open, setOpen] = useState();
	// the 1st value is the state, set to 'open', boolean value that tells wether the dropdown is open or not. The 2nd value is a function that we use to change the state


	return(
		<li className="nav-item">
			<a href="#" className="icon-button">
				{props.icon}
			</a>
		</li>
	);
}
// props.icon === custom prop called icon

export default App;
