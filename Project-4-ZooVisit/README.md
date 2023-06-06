# Zoo Visit! Come take a look at the friendly animals! 

![alt text](/assets/project4-img1.png)

This is the fourth project from my Software Engineering Immersive course. It was a full-stack project entailing the use of Python and Django back end, React Framework, Node.js and SCSS front end. 

Zoo Visit is an interactive website designed to entertain and inform children about different types of animals. 

# Deployment 
The App is available here -> [RecipeApp!](https://bit.ly/3DiwCNB) 
Link to be added later 

# Getting started
1. Access the source code via the ‘Clone or download’ button 
2. To install all the dependencies listed in the package.json: —> $ yarn 
3. Navigate into the shell -> $ pipenv shell
4. Run the app on localhost:8000 : —> $ python manage.py runserver
5. Navigate to http://localhost:8000/

# Objective & Language Used 
To create an App using a Django and Python back end and React front end. 
Languages and Technologies used: 
* Django
* JavaScript (ES6)
* React.js
* HTML
* SCSS
* Express
* GitHub

# Brief
* Build a full-stack application by making your own back end and your own front end
* Use a Python Django API.
* Have CRUD functionality.
* Be deployed online so it’s publicly accessible.
* Timeframe: 8 days

# App Showcase 
The first landing page of the website is to welcome the user to the website and establish the theme of the website. 

![alt text](/assets/project4-img2.png)

Another landing page for the user to either Login or Register. 
![alt text](/assets/project4-img3.png)
![alt text](/assets/project4-img4.png)
![alt text](/assets/project4-img5.png)

This shows the current logged in user and their profile information. 
![alt text](/assets/project4-img6.png)

“To the animals!” Button to get to the homepage. 
![alt text](/assets/project4-img7.png)

The main page of the website has a select few animals of all biomes shown. 
![alt text](/assets/project4-img8.png)

A filter is added to the API request depending on the biome the user is currently in. 
![alt text](/assets/project4-img9.png)
![alt text](/assets/project4-img10.png)

A sample of one animal and its information. 
![alt text](/assets/project4-img11.png)

A simple review form for the user. 
![alt text](/assets/project4-img12.png)

# Functionality 
* Register & login
* Filtered animals depending on its biome.
* Leave a review for each animal. 

# Process 

Day 1 

I knew I wanted to create a website aimed for children as my sister recently gave birth to my second nephew. I wanted them to have something interactive and informative to play with. 
I devised a basic home and landing page with the ease of use for the user in mind. 

![alt text](/assets/project4-img13.png)

With the overall aim of having children as the user, I wanted the guardian to let the children use the site and set up their own badge.
To create a badge, only easy questions need answering to make it simple for children to use.

![alt text](/assets/project4-img14.png)

The website would have multiple biomes that will house different animals in their respective homes. 
The homepage would initially be a search bar where the user can search any animals that are present within the API source. 
Once an animal has been clicked it will prove an “animal info card” highlighting interesting facts and trivia in regards to animals such as name, average height, average length, sound that the animal makes and its known favourite food. 
Each animal would have the functionality to be able to be added to the children's “personal zoo” providing interactivity to the website. 

![alt text](/assets/project4-img15.png)

Day 2 - 3

I spent the rest of day 1 up until day 3 familiarising myself with Python and Django.
This was around the time where I realised I had to keep things simple to complete this project in the given timeframe and decided that I would revisit it later on as a side project. 
I then spent some time focusing on my MVP to see what I could achieve before the deadline.

![alt text](/assets/project4-img16.png)
![alt text](/assets/project4-img17.png)

Day 4 - 6

Day 4-6 were spent designing the back end of the website. 
I first created a Django app, this gave the backbone of the app using Python.

![alt text](/assets/project4-img17b.png)

I then had to create each App that will eventually link with one another. 

![alt text](/assets/project4-img17c.png)

Each aspect of the website required its own file containing its own separate controllers. 

![alt text](/assets/project4-img17d.png)

Inside models.py a Schema is to be created highlighting what the object properties will contain. 
An example is below for the user Schema. 

![alt text](/assets/project4-img18.png)

Inside views.py it was the request that the front end would be creating (POST), collecting (GET), deleting (DELETE) or replacing (PUT) data to the back end API. 

![alt text](/assets/project4-img18b.png)

I then focused on adding a Log-in, Logout and Register functionality as a user must be logged in to beagle to utilise the functionality of the website. 
This essentially creates a local token and saves it to the users system with added security via coding and decoding. 

![alt text](/assets/project4-img19.png)

I then had to create Schemas that required relationships to one another, one such Schema was the reviews that was attached to profile through a many to many relationship and also had an attachment to animals to a one to many relationship. 
Using’quickdatabasediagrams’ I created a quick visualisation on how each App would interact with one another. 

![alt text](/assets/project4-img19b.png)

The schema developed is shown below. I ensured that the relationships were defined as “model.ForeignKey” which is the functionality to create relationships from one App to another. 

![alt text](/assets/project4-img20.png)

Day 7-8

Day 7 and 8 were spent gathering and styling the website. I collected images for the animals that I was seeding and gathered interesting trivia to keep the user entertained. 
I used React Framework to help me with the design as it provided plenty of usable components to speed up the process of design. Express was used to connect my back end database to the front end using Axios, enabling me to create an API request library. 

Given the time left, I had to select what to emphasise on style and which functionalities to cut for my website and was left with minimal time for error handling.

# Completed task

1. Challenges
This project as a whole was very challenging for me; going solo was both a blessing and a curse, it showed my lack of understanding of the Python and Django that I thought I had knowledge of. It was a blessing as it showed that I was able to persevere and carry on learning to make a functioning website which I managed to accomplish.

2. Known error 
- There is no error handling in the register page, if the user does not have correct credentials, it will not warn them and it seems like the button is not functioning.
- The background of the website has a fixed size instead of dynamically changing, it also has a size limit showing a broken background once large enough. 
- A non functioning ‘play sound’ button on the animal page. 

# Wins
1. I have greatly improved my understanding for both Django and Python on how both are able to interact with each other and the functionalities required to create relationships between given Apps. 
2. I was pleased overall on how the website functionally worked being able to select animals and highlight detail about it, also the fact that each animal is able to be separated via its biome and how the website changes along with it. 

# Key Learning 
A big learning experience working on this project for me was managing my time effectively as there was no one to give you a time table or deadline for each specific part of the project. 
I had to allocate my time given my shortcoming ensuring that I had a goal in mind to achieve per day whether it be getting a core functionality working or further understanding an aspect of the language I was not sure of. 
It also highlighted my drive to carry on with the project even though I knew I did not have much time left to complete it within the given time frame, I had to select which functionalities to be left for another time and which ones were my core MVP. 

# Future Aims 
1. Improvements & Features - I would like to go back and improve upon my code by adding some features that were originally planned such as: 
- Styling of the website to be polished
- Add a function that lets the user add animals to their favourites. 
- Enable for 1 user to be in charge of multiple sub users. 
- Add and delete user functionality. 
- Add an animal Search functionality. 
