import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { MarkdownPreview } from 'react-marked-markdown';
import PropTypes from 'prop-types';

class Display extends Component {
	constructor(props){
		super(props);
		this.state = {
	value: 'Testing markdown \n Delete symbols to change font \n -----\n  ### Try deleting the hash symbols  \n ---- ' 
		} 
	this.onChange = this.onChange.bind(this);
	}
	onChange(e) {
		console.log(e.target)
		this.setState({ value: e.target.value });
	}
	render() {
		return(<div>
			<textarea rows="14" onChange={this.onChange} value={this.state.value} /><br/>
			<MarkdownPreview value={this.state.value} />
			</div>);
	}
}


ReactDOM.render(<Display />,
	document.getElementById('root'));