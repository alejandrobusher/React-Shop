import React from 'react';
import '../styles/Order.scss';

import flechita from "@icons/flechita.svg"

const Order = () => {
	return (
		<div className="Order">
			<p>
				<span>02.15.23</span>
				<span>4 articles</span>
			</p>
			<p>$480.00</p>
			<img src={flechita} alt="arrow" />
		</div>
	);
}

export default Order;
