# SpaceBook! Book your space travel today! 

![alt text](/assets/project3-Img1.gif)

This is the third project from my Software Engineering Immersive Course and the first group coding project of I, Neil (https://github.com/neilmcfayden) and Thor (https://github.com/thor-r); this was a full stack project using React, Express, Node.js and MongoDB.

# Deployment 
The App is available here -> [RecipeApp!](https://bit.ly/3DiwCNB) 
Link to be added later 

# Getting started
1. Access the source code via the ‘Clone or download’ button 
2. Run Yarn in Terminal
3. Run yarn  seed in the app folder 
4. Run yarn serve in the app folder
5. Cd into client folder
6. Run Yarn start in the client folder, it should automatically run in your chosen browser. 

# Objective & Language Used 
To create an App using a MongoDB back end and React front end. 
Languages and Technologies used: 
*  MongoDB
* JavaScript (ES6)
* React.js
* HTML
* SCSS
* Express
* GitHub

# Brief 
Choose an external API Source and use React and Express to request and pull the data required for the website.
Creative freedom to design the App was given. 
Timeframe: 8 days




# Process 

![alt text](/assets/project3-Img2.gif)

Day 1 

Day 1 was used to first meet our project team members, we then discussed what we wanted to base our website upon, we all agreed to a space based website and came up with SpaceBook. It would be a booking website for intergalactic travel holidays including discounted offers.
We also discussed how we were planning to schedule and meet up every morning. We decided that we would meet up at 10:00 every morning using Zoom breakout rooms and have a local stand up on what we had accomplished the previous day. 

We used Trello to keep track of our planning and what we were required to accomplish. 

![alt text](/assets/project3-Img3.png)

We then used Figma as a planning source to wire frame our website. 
Each segment highlights a page that we wanted to have on our website. 

This showcases our plans for the main page; we wanted to have planets moving around in a carousel rotating in orbit to simulate space base websites.  
This was planning on roughly how we wanted the main landing page to have a moving carousel, it would future planets moving in and out of the screen. 

![alt text](/assets/project3-Img4.png)

We wanted to have an on hover effect that will provide a brief detail about the planet. 
![alt text](/assets/project3-Img5.png)

The Offers page was just generating offers as any good travel website should have. 
![alt text](/assets/project3-Img6.png)

We planned out that the user will require Login and Register Functionality, with a milestone goal of adding a remember me function button if we had the time. 
![alt text](/assets/project3-Img7.png)

Each planet would have its own overview page highlighting details such as time of travel, size of planet and its highlighted activity and reviews provided by previous customers. 
![alt text](/assets/project3-Img8.png)

Day 2-4

We then used Days 2-4 to focus on our back end. 
I was in charge of the profile page and review functionality. 
I first created a Review Schema and required it to be a virtual field in relation to a planet. 

![alt text](/assets/project3-Img9.png)

The tricky part of the code was to get the functionality of the virtual field, this enabled me to link the review and directly attach it to my User Schema giving it an array of reviews. This comes in handy later when populating the field to then attach the information to the front end portion of the website. 

I then had to create post and delete pathways in the back end for mongoDB to request from client to back end. 

The ‘postReview’ enabled the front end to submit and post a review so that it can be converted and saved into the back end API as data to be used and recalled where it is required. 
With the same premise ‘deleteReview’ enabled the user to delete the review from the API with the added security of authorisation verifying that the user was the one that created the review before being able to fully delete the review. 

![alt text](/assets/project3-Img10.png)

The next 2 code snippets show how each review connects to 2 different sections of the App, the User Schema and the Planet Schema. 
The ‘.populate’ on the ‘getProfile’ and ‘getPlanets’ is required to request the correct format of data from the API source to be used for the front end. 

![alt text](/assets/project3-Img11.png)
![alt text](/assets/project3-Img12.png)

Finally, the routes needed to be added for the connection of front end and back end to be complete; this enables the front end to request the methodology required for the website. 

![alt text](/assets/project3-Img13.png)

Day 5-7

As with the back end, I was in charge of the profile and offers page. 

I needed to design a front end that checked if there was a review from the profile first. 
To do that, I used Express Axios to pull the profile information from our back end using the code below. 

![alt text](/assets/project3-Img14.png)

This lets me gather the information about the profile user and check if they have any reviews associated with their account. 
If they did not have any reviews, the page will show as below. 

![alt text](/assets/project3-Img15.png)

Otherwise using the conditional rendering, it will add reviews inside the reviews section of the profile page. 

![alt text](/assets/project3-Img16.png)

If the Profile has reviews, it will show as below. 
![alt text](/assets/project3-Img17.png)

I added a “jump to review” button as a functionality for ease of use for the client so that they can check out the planet on which they have previously left a comment on. This was done via React’s link and the correct planet id. 
![alt text](/assets/project3-Img18.png)
![alt text](/assets/project3-Img19.png)

The offers page is just a standard express axios request pulling the offer from each planet and placing them inside a React carousel. 

![alt text](/assets/project3-Img20.png)

Day 8 

Debugging/Error Handling. 
We had to use day 8 as ironing out what styling we had done and double checking the website for error handling. 
We did not accomplish all the functionalities that we had wanted to add; this had to prioritise our core MVP of the website. 

# Completed task
1. Challenges
A great challenge for me personally was linking all the schemas together. 
I had issues troubleshooting why the scheme refuses to populate at time before finding the solution via the get:function (res) method. 
Another challenge was getting a handle on the conditional rendering of the reviews and how I was required to pull the information only when necessary such as when the profile has reviews or not. 

2. Known error 
There is no error handling in the register page, if the user does not have correct credentials, it will not warn them and it seems like the button is not functioning. 

# Wins
1. It was a great experience being able to work as a group and getting the fundamental skills of planning and organising, planning a meet up time and each having a task to complete and work together on if the task was proving too difficult for one person alone.
2. I was happy at how the website turned out having certain aspects working like it would in a traditional booking website such as the destination information and the functionality to review past bookings. 

# Key Learning 
1. MongoDB -  This project has helped me cement more of my knowledge in regards to MongoDB. It lets me explore the functionalities of relationships between schemas. 
2. React - As the second project using React, this project made me feel more comfortable in using the React Framework and being able to go through and read documentation to find the necessary components for the specific task required. 
3. Express - As with React, using Express for the second time, it has helped me reinforce the information I have previously learned, being able to target and filter out only the necessary data required from the API source. 
4. JSX - The more I use JSX, the more I understand why it has become the staple for web design. I enjoyed working with JSX rather than having a separate HTML file and it let me understand conditional rendering for a more build and dynamic feel to our website. 

# Future Aims 
1. Improvements & Features - I would like to go back and improve upon my code by adding some features which were originally planned such as: 
- Error handling.
- Add a Wishlist to the profile page.
- Have a working booking page. 
- Touch up on the styling of the website. 


