import marked from 'marked'

//Customise the rendering of link tags
const renderer = new marked.Renderer()
const linkRenderer = renderer.link
renderer.link = (href, title, text) => {

    //Get the base html
    let html = linkRenderer.call(renderer, href, title, text)

    //Add target/rel attributes to non-local links
    html = html.replace(/<a (href="http\S+")/g, '<a $1 target="_blank" rel="noopener noreferrer"')

    //Add colorLink class to all links
    html = html.replace(/<a href/g, '<a class="colorLink" href')

    return html
};

const paraRenderer = renderer.paragraph
renderer.paragraph = (text) => {

    //Get the base html
    let html = paraRenderer.call(renderer, text)

    //Add gaps between paras
    html = html.replace(/<p>([\w\W]+?)<\/p>/gm, '<p class="mb-4">$1</p>')

    return html
}

const toHTML = (markdown) => {
    return marked(markdown, { renderer })
}

export { toHTML }