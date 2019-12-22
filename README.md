
# JobGet Search:
A simple search bar that users can enter the job title and city name to search for related jobs available in the market. There are also filter functions based on job posted date and location. 

## Installation:
Use the package manager [npm](https://nodejs.org/) to install JobGet Search. At your root local repo

```bash
npm install
```

after all dependencies are installed
```bash
npm start
```

Open [http://localhost:3002](http://localhost:3002) to view it in the browser.

## Running the tests
```bash
npm run cypress:open
```
run all spec tests

## Tech Stack:
React(Material-Ui and Semantic-Ui) - Front end

Ziprecuiter API

Cypress - For Testing

## Notes for this project:
I could write a condition to not show jobs on the first render but I figure the page would look so empty. So I decided to render something even at the first render to make the page to have a bit more contents.

Search bar on the page is responsive

The design is similar to the actual JobGet home page because I do not want to spend much on the design part.

In order to unescape the react html format I used the "dangerouslySetInnerHTML" to get the job description to show properly. But this could be a XXS issue.

For the end to end test, I use cypress(testing framework) to do an end to end automating test. Since I only have one week to finish the challenge, the tests would be a topic that I need to revisit to make them more perfect for the application. 

## Demo 
### Home
!["Home"](https://github.com/Kennethz374/JobGetAssignment/blob/master/public/docs/Home.gif?raw=true)

### Responsive
!["Responsive"](https://github.com/Kennethz374/JobGetAssignment/blob/master/public/docs/ResponsiveSearch.gif?raw=true)

### Search & Filter
!["Search_Filter"](https://github.com/Kennethz374/JobGetAssignment/blob/master/public/docs/SearchNError.gif?raw=true)

### Testing
!["Tesitng"](https://github.com/Kennethz374/JobGetAssignment/blob/master/public/docs/CypressDemo.gif?raw=true)









