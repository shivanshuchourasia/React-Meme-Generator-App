import React, { Component } from 'react';

class MemeGenerator extends Component {
	constructor() {
		super();
		this.state = {
			topText: '',
			bottomText: '',
			randomImg: 'http://i.imgflip.com/1bij.jpg',
			allMemeImgs: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleClick(event) {
		event.preventDefault();
		const index = Math.floor(Math.random() * 100);
		const randMemeImg = this.state.allMemeImgs[index].url;
		this.setState({
			randomImg: randMemeImg
		});
	}

	componentDidMount() {
		fetch('https://api.imgflip.com/get_memes').then((response) => response.json()).then((res) => {
			this.setState({
				allMemeImgs: res.data.memes
			});
		});
	}

	render() {
		const textStyle = {
			position: 'absolute',
			width: '100%',
			textAlign: 'center',
			color: 'white',
			fontSize: 30,
			fontFamily:
				'impact, Haettenschweiler, "Franklin Gothic Bold", Charcoal, "Helvetica Inserat", "Bitstream Vera Sans Bold", "Arial Black", "sans serif"'
		};

		return (
			<div>
				<form className="form-inline m-2" onSubmit={this.handleClick}>
					<label>Top Text: </label>
					<input
						type="text"
						className="form-control ml-2"
						name="topText"
						value={this.state.topText}
						onChange={this.handleChange}
					/>
					<br />
					<label className="ml-2">Bottom Text: </label>
					<input
						type="text"
						className="form-control ml-2"
						name="bottomText"
						value={this.state.bottomText}
						onChange={this.handleChange}
					/>
					<br />
					<button className="btn btn-dark ml-2">Gen</button>
				</form>
				<div className="row col-6">
					<img style={{ width: '100%', height: 400 }} src={this.state.randomImg} />
					<p style={{ ...textStyle, top: 0 }}>{this.state.topText.toUpperCase()}</p>
					<p style={{ ...textStyle, bottom: 0 }}>{this.state.bottomText.toUpperCase()}</p>
				</div>
			</div>
		);
	}
}

export default MemeGenerator;
