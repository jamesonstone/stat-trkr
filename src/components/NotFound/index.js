import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

export default class NotFound extends Component {
	// static propTypes = {}
	// static defaultProps = {}
	// state = {}

	render() {
		const { className, ...props } = this.props;
		return (
			<div className={classNames( 'Not Found', className )} {...props}>
				<h1>Not Found :((((</h1>
			</div>
		);
	}
}