import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

// dynamically calculate unqiue values here

const allCategories = new Set(items.map((item) => item.category));
const categories = ['All', ...allCategories];

function App() {
	const [menuItems, setMenuItems] = useState(items)
    const [filteredItems,setFilteredItems] = useState(items)

	const filterItems = (category) => {
		if (category === 'All') {
			setFilteredItems(menuItems)
		} else {
			setFilteredItems(items.filter((item) => item.category === category))
		}
	}

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={filterItems} />
				<Menu items={filteredItems} />
               
			</section>
		</main>
	)
}

export default App
