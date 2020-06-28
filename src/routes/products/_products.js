import fs from 'fs'
import path from 'path'
import { toHTML } from '../../helpers/marked'

export function getProducts () {
	const slugs = fs.readdirSync('src/products')
		.filter(file => path.extname(file) === '.md')
		.filter(file => file[0] !== '_')
		.map(file => file.slice(0, -3));
	return slugs.map((slug) => { return getProduct(slug)});
}

export function getProduct(slug) {
	const file = `src/products/${slug}.md`;
	if (!fs.existsSync(file)) return null;

	const markdown = fs.readFileSync(file, 'utf-8');

	const { content, metadata } = process_markdown(markdown);

	const html = toHTML(content);

	return {
		slug,
		metadata,
		html,
	};
}

function process_markdown(markdown) {
	const match = /---\r?\n([\s\S]+?)\r?\n---/.exec(markdown);
	const frontMatter = match[1];
	const content = markdown.slice(match[0].length);

	const metadata = {};
	frontMatter.split('\n').forEach(pair => {
		const colonIndex = pair.indexOf(':');
		metadata[pair.slice(0, colonIndex).trim()] = pair
			.slice(colonIndex + 1)
			.trim();
	});

	return { metadata, content };
}
