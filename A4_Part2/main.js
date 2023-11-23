const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageArray[0] = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */

/* Looping through images */
for (images in imageArray) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', xxx);
    thumbBar.appendChild(newImage);
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
