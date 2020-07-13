import { getProducts } from './_products.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		contents = JSON.stringify(
			getProducts().map(product => ({
				...product,
				slug: product.slug
			}))
		);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
