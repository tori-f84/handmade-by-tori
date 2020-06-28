import { getProducts } from './_products.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const products = getProducts().map(product => ({
			title: product.metadata.title,
			slug: product.slug,
			smallImage: product.metadata.smallImage,
			price: product.metadata.price,
			sold: product.metadata.sold === "true",
		}));

		contents = JSON.stringify(products);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
