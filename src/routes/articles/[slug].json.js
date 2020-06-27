import { getArticle } from './_articles.js';

const lookup = new Map();

export function get(req, res, next) {
	const { slug } = req.params;

	if (process.env.NODE_ENV !== 'production' || !lookup.has(slug)) {
		const article = getArticle(slug, true); //Pass true to lookup prev/next articles
		lookup.set(slug, JSON.stringify(article));
	}

	const json = lookup.get(slug);

	if (json) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(json);
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
