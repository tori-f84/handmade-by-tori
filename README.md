# Sapper + TailwindCSS = 👍

This repo is my attempt at writing a new portfolio/blog site using [Sapper](https://sapper.svelte.dev/) and [TailwindCSS](https://tailwindcss.com/) - both of which were new to me at the start of the process!

The main goals were simple : 

1. Allow for a brief description of what I do on the main page.
2. Include a custom page for each of my bigger projects. This page should follow a set layout, but be flexible enough to allow for ThreeJS/WebGL content down the line.
3. Have a simple Markdown based blog system.

Other than the ThreeJS/WebGL bit which I've yet to need/implement, the rest is now up and running. You can see it live here : [mattbrealey.com](https://mattbrealey.com)

On top of the above, there are : 

* _Latest_ projects/articles sections in the side bar, each showing the latest 5 of each category.
* Prev/Next links at the bottom of each Project/Article.

In the past I've used React for many of my projects, and whilst it's obviously __super__ capable I've come to realise that its APIs don't match how I think about my code. In fact they've started to get in the way, slowing down the process of getting an idea out of my brain.

Refreshingly, the combo of Sapper and Tailwind has been a _absolute_ joy to work with. Thanks to Sapper's easy setup, I had the basic bones of this entire site up and running in a few hours, including the routes and basic styles. In addition to the excellent [Svelte tutorial](https://svelte.dev/tutorial/basics), I also heartily recommend [Adam Wathan's Youtube Channel](https://www.youtube.com/channel/UCy1H38XrN7hi7wHSClfXPqQ) to quickly get up to speed with Tailwind.

Svelte itself is just __LUDICROUSLY__ awesome. Simple, easy, and once I got my head around the fact that it's a _different_ way of approaching the bundle problem, it really did start to speed up my process.

---

## Package Scripts

### Long story short 
* For development : `npm run dev`
* For building your static app bundle : `npm run export`

### Hot Reloading
After trying a few suggested Tailwind/Sapper setups, I found that running two processes (one that watches for Tailwind updates, and one that builds Sapper) gave me the quickest hot-reload results.

### Publish?
The exported bundle is hosted on Github Pages in a [separate repo](https://github.com/badgrenola/badgrenola.github.io). 

Triggering `npm run publish` exports the code, and then _rsyncs_ it to that repo's local folder so all I have to manually do is check it and then commit. Nothing too crazy, but it saves a bit of time.

---
I'll no doubt add more info here as and when I think of it, and will be writing up some of the specifics over on the site itself. 

In the meantime, if you've got any questions either leave an issue above or you can find me over on [Twitter](https://twitter.com/badgrenola).

Cheers!

P.S. It's probably worth noting that I don't think Svelte/Sapper is necessarily _better_ than React - at this point it just seems to more closely match how I think about specific coding problems. They're both awesome, so experiment and use whatever makes the most sense for you on a given project 👍