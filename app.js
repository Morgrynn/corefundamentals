const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector('#addBtn');
const cancelButton = document.querySelector('#cancelButton');
const addLinkPanel = document.querySelector('#addLinkPanel');
const linksList = document.querySelector('#linksList');

// console.log(linkCategory);

let linkCategories = [];
let links = [
    {
        title: 'New Link 1',
        url: 'url1.com',
        categories: ['node', 'angular']
    },
    {
        title: 'New Link 2',
        url: 'url2.com',
        categories: ['js', 'angular']
    },
    {
        title: 'New Link 3',
        url: 'url3.com',
        categories: ['node', 'bootstrap']
    }
];

displayLinks();

addBtn.addEventListener('click', (event) => {
    console.log('click');
    showFormPanel();
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('cancel button clicked');
    hideFormPanel();
});
console.log(addLinkPanel.classList);

function showFormPanel() {
    addLinkPanel.classList.remove('hidden');
}

function hideFormPanel() {
    addLinkPanel.classList.add('hidden');
}

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
});

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

    // hide the addLinkPanel
    hideFormPanel();
});

function displayLinks() {
    linksList.innerHTML = ' ';
}