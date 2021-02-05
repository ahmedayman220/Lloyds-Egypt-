let src_desc = [{
        id: 1,
        src: "url('http://dannci.wpmasters.org/enginery/wp-content/uploads/2020/12/pexels-maria-geller-2127040-edit-1-1900x1000.jpg')",
        desc_h2: "Our past projects are the best testament to our quality.",
        desc_p: "Effective management of mega-projects relies on three key concepts: early planning and organizing, stakeholder communication and project controls integration",
    },
    {
        id: 2,
        src: "url('http://dannci.wpmasters.org/enginery/wp-content/uploads/2020/12/pexels-le-minh-1583065-1900x1000.jpg')",
        desc_h2: "We Create Effective Solutions",
        desc_p: "We apply the principles of engineering, physics, and materials science for the design, analysis, manufacturing, and maintenance of mechanical systems.",
    },
    {
        id: 3,
        src: "url('http://dannci.wpmasters.org/enginery/wp-content/uploads/2015/07/ventilator-349658_1920-1900x1000.jpg')",
        desc_h2: "Change Is All What Matters",
        desc_p: "Enginery Inc. is responsible for the research, specification, design and development of materials to advance technologies of aviation industry.",
    },
]


let wallpaper = document.querySelector("section.wallpaper")
let content_h2 = document.querySelector(".desc-h2-p-wallpaper h2")
let content_p = document.querySelector(".desc-h2-p-wallpaper p")
let btns_wallpaper = document.querySelectorAll(".btn-wallpaper")
let i = 0


wallpaper.style.backgroundImage = src_desc[i].src
btns_wallpaper.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.id == "next") {
            if (i < src_desc.length - 1) {
                ++i
                wallpaper.style.backgroundImage = src_desc[i].src
                content_h2.innerHTML = src_desc[i].desc_h2
                content_p.innerHTML = src_desc[i].desc_p

            } else {

                i = -1
            }

        } else {
            if (i > 0) {
                --i
                wallpaper.style.backgroundImage = src_desc[i].src
                content_h2.innerHTML = src_desc[i].desc_h2
                content_p.innerHTML = src_desc[i].desc_p


            } else {

                i = 3
            }

        }


    })
})

function aaaa() {

    if (i < 2) {
        ++i
        wallpaper.style.backgroundImage = src_desc[i].src
        content_h2.innerHTML = src_desc[i].desc_h2
        content_p.innerHTML = src_desc[i].desc_p

    } else {

        i = -1
    }
    if (condition) {
        
    }
    // wallpaper.style.backgroundImage = src_desc[++i].src
}
setInterval(aaaa, 10000)