/*
      Name: Maxwell Dinsmore
      File: A4_Part1/main.js
      Date: 2023-11-21
      Part 1 of A4.....
*/

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."
const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"]
const insertY = ["the soup kitchen","Disneyland","the White House"]
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]


function result() {

    let newStory = storyText;
    let itemX = randomValueFromArray(insertX);
    let itemY = randomValueFromArray(insertY);
    let itemZ = randomValueFromArray(insertZ);
    let Name = "Bob"
    if(customName.value !== '') {
        Name = customName.value;
    }

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300 * 0.0714286);
        const temperature =  Math.round((94-32) * 5/9);
        newStory = newStory.replace("94 fahrenheit", temperature + " Celsius")
        newStory = newStory.replace("300 pounds", weight + " Stones")
    }


    // replaceALL was not working for me and stackoverflow said it would take a while to fix so thats why I'm not using it
    newStory = newStory.replace(':insertx:', itemX);
    newStory = newStory.replace(':insertx:', itemX);
    newStory = newStory.replace(':inserty:', itemY);
    newStory = newStory.replace(':insertz:', itemZ);
    newStory = newStory.replace('Bob', Name);
    story.textContent = newStory;
    story.style.visibility = 'visible';

}
randomize.addEventListener('click', result);

