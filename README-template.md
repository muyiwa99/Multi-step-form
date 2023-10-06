# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

Screen shot in screens folder

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

This project helped me massively further my understanding of a lot of JavaScript concepts aswell as some CSS practices. I've built several projects which needed some sort of Validation, but this had the widest variety thus far; From Form Validation(Plan page), Plan selection validation(ensuring the user has selected a plan), Steps validation(ensuring the user has completed all necessary steps on a page before proceeding) and many more. This allowed me to conduct more research on how to go about implementing theses features onto my project.

Some code that i'm proud of

- On The 'Select your plan' page, i had to find a way of storing the cost price(month and year) of the selected plan in a variable as i would need this data to be passed onto the 'Summary' page.

I used an object to store the data for both the monthly and yearly prices, i initially set this to null. i then used a ternary operator to check the toggle state of the toggle selector and stored it in a variable called 'toggleSelection'. I then used a function called 'UpdateSelectedPrice' to update the selected value and then pass that to the final page. i then invoked this function on the toggleSwitch event listener for when the yearly and monthly plans are toggled.

```js
let toggleSelection = toggleSwitch.checked ? "yearly" : "monthly";

let selectedContainerData = {
  yearly: null,
  monthly: null,
};

updateSelectedPrice(selectedContainerData[toggleSelection]);

let planString;
let PlaNum;
// This function updates the selectedContainerPrice based on the toggleSelection of the selectedContainerData.
function updateSelectedPrice(plan) {
  selectedContainerPrice.textContent = `${plan}`;
  console.log(selectedContainerPrice.textContent);
  planString = selectedContainerPrice.innerHTML;
  PlaNum = planString.match(/(\d+)/);

  PlaNum = PlaNum[0];
  console.log(PlaNum);
}
```

This was a great project because it had so many areas where i initially struggled to understand what was needed to achieve certain parts of the JS, But with coding problem solving is a key skill as it gives you the chance to conduct further research, try different methods, Ask more questions and overall continue learning and developing.

### Continued development

Moving forward i want to minimize the amount of DRY(don't repeat yourself) code i used in my JS code, there were a few parts that i struggled to implement simpler code such as the button event listeners on all pages, i'm sure with more practice and focus i'll be able to implement cleaner code to archive what i want to.

Another aspect i want to improve moving forward is my planning, on some parts i had to go back and change the HTML and CSS of my code to implement the needed JS, Moving forward i need to plan better and really think about the initial HTML and CSS code to run into less problems

### Useful resources

## Author

- Website - [Muyiwa Areola](https://github.com/muyiwa99)
- Frontend Mentor - [@muyiwa99](https://www.frontendmentor.io/profile/muyiwa99)

## Acknowledgments

I'd like to give a shoutout to the following MVPs (Most Valuable Personalities) who made this project happen:

- My trusty laptop, for putting up with my endless coding errors.

- The "Undo" button, my digital safety net, for rescuing me from countless coding disasters.

- And last but not least, my stubborn determination, for refusing to let this project defeat me.
