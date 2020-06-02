import React from "react";
import "./RepairList.css";

class RepairList extends React.Component {
	state = {
		lists: [],
		inputField: "",
	};

	listID = 0;

	input = event => {
		this.setState({ inputField: event.target.value });
	};

	create = event => {
		this.setState(previousState => ({
			lists: [
				...previousState.lists,
				{ content: previousState.inputField, id: this.listID++ },
			],
			inputField: "",
		}));
		event.preventDefault();
	};

	remove = selectedList => {
		this.setState(previousState => ({
			lists: [...previousState.lists.filter(list => list !== selectedList)],
		}));
	};

	render = () => (
		<>
			<header className='header'>
				<h1>rep🔥irs</h1>
				<form onSubmit={this.create}>
					<input
						className='new-repair'
						placeholder='What needs to be repaired?'
						autoFocus=''
						value={this.state.inputField}
						onChange={this.input}
					/>
				</form>
			</header>
			<section className='main'>
				<ul className='repair-list'>
					{this.state.lists.map(list => (
						<li key={list.id}>
							<div className='view'>
								<input className='toggle' type='checkbox' />
								<label>{list.content}</label>
								<button
									className='destroy'
									onClick={() => this.remove(list)}
								></button>
							</div>
						</li>
					))}
				</ul>
			</section>
			<footer className='footer'>
				<button className='clear-completed'>Clear completed</button>
			</footer>
		</>
	);
}

export default RepairList;
