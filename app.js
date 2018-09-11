const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");

// console.log(linkCategory);

let linkCategories = [];
let links = [];

linkCategory.addEventListener('keydown', function(event) {
    // console.log(event);

    if(event.keyCode == 188){
        event.preventDefault();
        // console.log("User pressed comma");
        // console.log(linkCategory.value);

        linkCategories.push(linkCategories.value);

        // console.log(linkCategories);

        linkCategory.value = '';

        //Display the updated categories 
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("Displaying link categories");
}



submitButton.addEventListener('click', event => {
    // console.log('click');
    // console.log(this);

    //Stop form from submitting
    event.preventDefault();

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title, 
        url,
        categories
    }

    // console.log(newLink);

    //push new link to array
    links.push(newLink);

    linkTitle.value = ' ';
    linkUrl.value = ' ';
    linkCategory.value = ' ';
    linkCategories = [];

    displayLinkCategories();
});