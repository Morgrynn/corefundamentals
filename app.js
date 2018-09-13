const linkCategory = document.querySelector("#linkCategory");
const submitButton = document.querySelector("#submitButton");
const addBtn = document.querySelector('#addBtn');
const cancelButton = document.querySelector('#cancelButton');
const addLinkPanel = document.querySelector('#addLinkPanel');
const linksList = document.querySelector('#linksList');

// https://www.youtube.com/watch?v=QGAVFfLGgbo&list=PLDlWc9AfQBfaO1IX02_1L5MW2s9RyIgQ7&index=10

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

linkCategory.addEventListener('keydown', function (event) {
    // console.log(event);

    if (event.keyCode == 188) {
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
    links.unshift(newLink);

    linkTitle.value = ' ';
    linkUrl.value = ' ';
    linkCategory.value = ' ';
    linkCategories = [];

    displayLinkCategories();

    // hide the addLinkPanel
    hideFormPanel();

    displayLinks();
});

function displayLinks() {
    linksList.innerHTML = ' ';

    for (let link of links) {
        // console.log(link);
        let linkHTMLstring = `
        
        <div class="link panel">
                <div class="link-options">
                    <button class="btn-sm">Delete</button>
                    <button class="btn-sm">Edit</button>
                </div>

               <a href="${link.url}"> 
                 <h1 class="header">${link.title}</h1>
               </a>
               <p class="link-date">${Date.now()}</p>

               <div class="categories">
                   Categories:`;
                for(let category of link.categories) {
                    linkHTMLstring +=  `<span class="category">${category}</span>`;
                }
                   
                linkHTMLstring += `
                     </div>
               </div>
            `
        ;
        
        linksList.innerHTML += linkHTMLstring;
    }
}