# Trello Board: React Challenge

This repo is the initial React Challenge setup... After you complete one level of the CodeSchool React Course you will complete one challenge below in this project to slowly make it a React Program.

### Getting Setup
1) FORK... don't forget to FORK this repo first! Then, once you have this project in your own GitHub account... clone it to your computer.

2) Checkout the file structure...  
assets - contains a css directory with the css for the site AND a js directory that holds a bundle.js file (more about this file later)

design - holds an image of the final page

src - holds an app.jsx and a components.jsx file. these are your react files where you will write your react components and implement your React App.

> make sure to look through these files... components.jsx holds one component CardColumn which currently renders and empty div. Then at the bottom of the page there is an export statement (remember this from your ES2015 class!) that exports the component (aka, makes it visible for use in other jsx files). The app.jsx file imports the CardColumn, creates a MainPage component, and then puts it into the index.html file...

gulpfile.js - Remember CodeSchool talking about React and ES2015 not being able to display directly in browsers? no? Well, both react which use jsx and ES2015, have to be compiled into regular Javascript before they can be displayed in your web browser. We are going to use a tool called gulp to do this. This gulpfile.js takes our src/app.jsx file transforms it into the bundle.js file we saw in the assets/js directory. Then we can just link the bundle.js file into our index.html... and we have our React Application up and running!

index.html - our html file :) check it out...

package.json - a file that defines what node packages our gulpfile uses (you will see how to use this in a little bit)

3) To get our application up and running we need to install somethings...

**Node Install**: in your command line run `node -v` to see if you have node already installed on your computer. If you do not have node install following these instructions:

[Mac Users - Install Instructions](http://blog.teamtreehouse.com/install-node-js-npm-mac)  
[Windows Users - Install Instructions](http://blog.teamtreehouse.com/install-node-js-npm-windows)

**Installing Node Packages for This Project**: From your terminal or command line, navigate to inside this project. Enter `ls` to make sure you see all the files in this project like package.json or the assets directory. Now run `npm install`.
> npm install will install all the tools you need for this project that are defined in the package.json file.

**Compiling Your React Application**: Now that everything is installed let's run a `gulp build`. This command will compile your jsx or React file into that bundle.js we were talking about. You will have to run this command everytime you change your jsx file.

SIDE NOTE: Run 'gulp-v' in your terminal to check whether you have gulp installed. If you see "Command not found",  run "sudo npm install gulp -g". You'll have to enter your system password. Once installed, you can use gulp commands. 

> There is a way to automate this... like have gulp watch your react files and every time they change it will automatically run gulp for you... however, I think it is better for you to run this command yourself at first, so you know how it works.

Cool! You should now be able to open the index.html file in Chrome and be on your way!


#### CodeSchool Level 1 - First Component
Complete Level 1 of React Fundamentals courses...

#### React Challenge 1 - Create Card Component
Take a look at what the site is going to look like:
<img width="100%" src="design/trello-design-1.png" />

First you are going to create your card component...

Create a Card Component in the components.jsx file (remember to extend the React Component Base Class)...

> With regular Javascript, we had to use HTML String to construct html elements... With React, we use JSX to construct our HTML. JSX lets us write HTML in Javascript with some additional features…

Create a render function in the Card Component Class with the appropriate HTML used to generate each card... there is a reference to what the html for a card is suppose to look like in the index.html file.
> Remember *class* is a reserved word in Javascript so we have to use className=“” instead of class=“” in each of our html elements

> JSX makes it easier to create HTML in Javascript because it lets us combine HTML and Javascript, rather than having us construct strings...
{} -> literal javascript

For Example: remember when we had to do this...

```
var behaviorItem = ‘<div class=“behavior”>’ +
    ‘<div class=“name”>’ + behavior.name + ‘</div>’ +
    ‘<div class=“value”>’ + behavior.value + ‘</div>’ +
‘</div>’;

$(‘behavior-list’).html(behaviorItem);
```

... well now we can just do this...

```
return (
    <div>
        <div className=“name”>{ behavior.name }</div>
        <div className=“value”>{ behavior.value }</div>
    </div>
);
```

...much more readable, a lot less addition signs and a lot less quotes!

Render your Card Component: Inside the <div></div> in the CardColumn component... render your newly created card component with the `<Card />` syntax;

Then open your terminal, navigate to your project, run `gulp build` and refresh your index.html in the browser. Is your card displaying?!

#### CodeSchool Level 2 - Talking Through Props
Complete Level 2 of React Fundamentals courses...

#### React Challenge 2 - Construct 2nd Component & Pass Data
Watch React LEVEL 2...

**1) Identifying Other Components**  
Name the other components you see in the below Design:
<img width="100%" src="design/trello-design-1.png" />

now, we are going to create our 2nd component... CardColumn.

**2) Create a Card Column Component**  
Again make sure it extends the React.Component base class... implement the render function based on the html that is in the index.html file. Make sure to use `<Card />` instead of the actual card html. This will use whatever the render function of your Card Component returns.

**3) Passing Props from the CardColumn Component to the Card Component**   
In the card component, pass the Card component 2 props... I bet you can guess what they are! (title and description)

Then update the Card Components render function to use those props…
calling out `{this.props.title} and {this.props.description}

**4) Use Card Data Array to display the cards**  
In the CardColumn component, create a _getCards function with a cardList array with card objects that have id, title, and description properties.

> Typically, in a React Application you would make an ajax request to the backend, where the cards would be queried and passed back to you on the FrontEnd. For now, we are just creating a cardList array to simulate the information we would get back from the ajax request.

> Wondering why this function starts with an underscore? The _functionName is just a naming convention that React uses to indicate that the function should only be accessible INSIDE the Component it is defined in.

**5) Map Object array to JSX arrays for display purposes**  
Now in the _getCards function, map over the cardList array and return JSX `<Card />` components with the props key, title, description.

> The key prop is used to make each card component unique. This becomes helpful when the user goes to interact with a card, like clicks a button on it, React will have a way to determine which card is clicked based on this key id.

**6) Use  _getCards() in CardColumn render()**  
The _getCards() function will return a list of Card components for us. So we can replace all the `<Card />` in the CardColumn render function with the returned results from the _getCards function.

**7) Compile your React Code!**
Open your terminal, navigate to your project and run `gulp build`. Refresh your index.html in your web browser! See if something is displaying!


#### CodeSchool Level 3 - Component State
Complete Level 3 of React Fundamentals courses...

#### React Challenge 3 -




#### CodeSchool Level 4 - Synthetic Events
Complete Level 2 of React Fundamentals courses...

#### React Challenge 4 - TBD




#### CodeSchool Level 5 - Talking To Remote Servers
Complete Level 2 of React Fundamentals courses...

#### React Challenge 5 - TBD
