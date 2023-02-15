import React from 'react';
import '../styles/Order.scss';

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>02.15.23</span>
				<span>4 articles</span>
			</p>
			<p>$480.00</p>
			<img src="./icons/flechita.svg" alt="arrow" />
		</div>
	);
}

export default Order;
