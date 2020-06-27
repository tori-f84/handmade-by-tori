import { getArticles } from './_articles.js';

let contents;

export function get(req, res) {
	if (!contents || process.env.NODE_ENV !== 'production') {
		const articles = getArticles().map(article => ({
			title: article.metadata.title,
			slug: article.slug,
			smallImage: article.metadata.smallImage,
			desc: article.metadata.desc,
			date: article.metadata.date,
			timeToRead: article.metadata.timeToRead
		}));

		contents = JSON.stringify(articles);
	}

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}
