exports.handler = function(event, context, callback) {
	const midtrans = require('midtrans-client');
	// HTTP headers
	const headers = {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
	};
	// snap API
	const snap = new midtrans.Snap({
		// set to true, if will production env
		isProduction: false,
		clientKey: process.env.MIDTRANS_CLIENT_KEY,
		serverKey: process.env.MIDTRANS_SERVER_KEY,
	});

	// send params to server midtrans
	const { id, name, email, amount } = JSON.parse(event.body);

	// midtrans need first_name and last_name
	const names = name.split(' ');
	let first_name, last_name;

	if (names && names.length > 1) {
	 	first_name = names[0];
	 	last_name = names[1];
	 } else if(names.length === 1) {
	 	first_name = names[0];
	 	last_name = '';
	 }

	 let parameter = {
	 	transaction_details: {
	 		order_id: `MARIBERBAGI-${id}-${+new Date()}`,
	 		gross_amount: parseInt(amount)
	 	},
	 	// optional
	 	customer_details: {
	 		first_name,
	 		last_name,
	 		email
	 	},
	 	credit_card: {
	 		secure: true
	 	}
	 };
	 snap.createTransaction(parameter)
	 	.then(function(transaction) {
	 		const { token, redirect_url } = transaction;
	 		console.log(`Token: ${token}, redirect_url ${redirect_url}`);

		 	callback(null, {
		 		statusCode: 200,
		 		headers,
		 		body: JSON.stringify({
		 			url: redirect_url,
		 			params: parameter
		 		})
		 	})
	 	}).catch(function(err){
	 		console.log(`Error ${err.message}`);
	 		callback(null, {
	 			statusCode: 400,
	 			headers,
	 			body: JSON.stringify({ error: err.message })
	 		})
	 	})
}