const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */
const imageAlt = ["Close up eyeball", "Close up mural", "Close up white and purple flowers", "Ancient egyptian paintings", "Butterfly on a leaf"]
/* Looping through images */
for (let images in imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + imageArray[images]);
    newImage.setAttribute('alt', imageAlt[images]);
    thumbBar.appendChild(newImage);
    /* Adding click to display smaller images as main*/
    newImage.addEventListener('click', () => {
        displayedImage.setAttribute('src', "images/" + imageArray[images])
        displayedImage.setAttribute('alt', imageAlt[images]);
    })
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    let styleSet = btn.getAttribute("class")
    if (styleSet === "dark") {
        btn.textContent = "Lighten";
        btn.setAttribute("class", "light");
        overlay.style.backgroundColor =  "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor =  "rgba(0,0,0,0)";
    }
});

