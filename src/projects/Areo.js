import { toHTML } from '../helpers/marked'

//Areo Description Markdown
const areoDescMD = `
Areo is a custom Mac app designed for opening, viewing and converting Digital Terrain Models in the _.IMG_ format. 

The released version (available above) was designed specifically to quickly open .IMG files generated from [HiRISE](https://www.uahirise.org/dtm/) imagery, 
and convert them into .OBJ files at a given proxy level (_1/2, 1/4, 1/8_ etc.).
It also includes the ability to generate 3D-printable versions of these models.

It was originally created as part of a month-long project I set myself, to see if I could both understand the data structure, and 
create a tool that not only opens the files quickly, but also converts them into a useful, more-accessible 3D format.

I have been working on a newer version of this app which expands the amount of file formats, and implements a command-line version
of the featureset. This new version currently forms part of my [Areo Browser](./projects/areo-browser) data pipeline, and I plan on
documenting and releasing it here in the near future.
`

const Areo = {
    id: 0, 
    slug:"areo",
    name:"Areo", 
    smallImage: "images/areo/splash_small.jpg",
    largeImage : "images/areo/splash.jpg",
    shortDesc:"A Mac app designed for opening, viewing and converting Digital Terrain Models.",
    keywords:"areo, space, hirise, mac, osx, swift, dtm, gis, terrain, digital terrain model, mars, planet, planetary data, data",
    links:[
        {
            title:"Download Beta 1 v2",
            url:"http://bit.ly/areo1b2"
        }
    ],
    desc:toHTML(areoDescMD),
    features:[
        {
            title:"Fast. Very Fast.", 
            desc:"Thanks to Areo's crafty use of image proxying, it takes just 4 seconds to load and process a 1.15gb DTM.", 
            image: "https://thumbs.gfycat.com/GlumIdealisticGallinule-small.gif"
        },
        {
            title:"OBJ Export", 
            desc:"Areo can quickly export a UV'd OBJ file of the current model for use in other 3D applications.", 
            image:"https://thumbs.gfycat.com/CluelessEasygoingIceblueredtopzebra-small.gif"
        },
        {
            title:"Generate 3D-Printable Models", 
            desc:"In a few clicks, Areo allows you to generate fully 3D-printable models that can be easily uploaded to your 3D-printing service of choice.", 
            image:"https://thumbs.gfycat.com/OddQuickAfricanbushviper-small.gif"
        },
    ],
    todos:[
        "Clean-up the code in v2 and release"
    ],
    tagName: 'areo'
}

export { Areo }