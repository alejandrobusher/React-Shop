import React from 'react';
import '../styles/OrderItem.scss';

import close from "@icons/icons_close.png"

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src="https://images.pexels.com/photos/2727413/pexels-photo-2727413.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="bike" />
			</figure>
			<p>Scooter</p>
			<p>$120.00</p>
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
