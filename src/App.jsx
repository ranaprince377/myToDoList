import './App.css'
import { useEffect, useState } from 'react';
import Input from './component/Input'
import ListItem from './component/ListItem'
import Logo from './component/Logo'

function App() {
	const [isEmptyItem, setIsEmptyItem] = useState(false);

	let todo_items = JSON.parse(localStorage.getItem("to_do"));
	if (todo_items === null) todo_items = [];
	const [items, setItems] = useState(todo_items);

	const addItem = (text) => {
		if (text === "") {
			setIsEmptyItem(true);
			return;
		}
		setItems((prevItems) => [...prevItems, {
			id: Date.now(),
			text: text,
			completed: false
		}]);

		setIsEmptyItem(false);
	}

	const toggleItemCompleted = (id) => {
		setItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, completed: !item.completed } : item));
	}

	const removeItem = (id) => {
		setItems((prevItems) => prevItems.filter((item) => item.id !== id));
	}

	var weekday = new Array(7);
	weekday[0] = "Sunday 🖖";
	weekday[1] = "Monday 💪😀";
	weekday[2] = "Tuesday 😜";
	weekday[3] = "Wednesday 😌☕️";
	weekday[4] = "Thursday 🤗";
	weekday[5] = "Friday 🍻";
	weekday[6] = "Saturday 😴";

	var d = new Date();
	var day_name = weekday[d.getDay()];

	var randomWordArray = Array(
		"Oh my, it's ",
		"Whoop, it's ",
		"Happy ",
		"Seems it's ",
		"Awesome, it's ",
		"Have a nice ",
		"Happy fabulous ",
		"Enjoy your "
	);
	var randomWord = randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

	useEffect(() => {
		localStorage.setItem("to_do", JSON.stringify(items));
	}, [items]);

	return (
		<>
			<Logo />
			<div className="container">
				<div className="today">{randomWord + day_name}</div>
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-xs-6 col-xs-offset-3">
						<Input addItem={addItem} />
						<p onClick={() => setIsEmptyItem(false)} className={`err text-danger text-center animated bounceIn ${isEmptyItem ? `` : `hidden`}`}>
							<i className="fa fa-warning"></i> Oops! Please, enter item text
						</p>
						<p className={`no-items text-muted text-center ${items.length ? `hidden` : ``} `}>
							<i className="fa fa-ban"></i>
						</p>
						<ul className="todo-list">
							{
								items.map((item, index) => {
									return <ListItem key={index} item={item} removeItem={removeItem} toggleItemCompleted={toggleItemCompleted} />
								})
							}
						</ul>
					</div>
				</div>
				<div className="footer">
					<h4>
						Made with ❤️ by <a href="https://www.linkedin.com/in/er-prince-rana/" target='_blank'>Prince Rana </a>
						<p></p>
					</h4>
				</div>
			</div>
		</>
	)
}

export default App
