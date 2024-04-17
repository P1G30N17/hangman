# Classic Hangman Game

Classic hangman is a throw back to the old hangman game we used to play as kids. A simple stick man drawing portrays the end result of failure (being hung), and failure being unable to guess the hidden word. The user is given a basic layout and simple on screen keyboard with which to input their chosen letter in an attempt to guess the hidden word and save the stickman from being hung. If the user is struggling their is a hint option that when clicked will reveal helpful information associated with the hidden word in question. My inspiration for this game came from my two sons who love playing old school games like this on our digital white board with me, along with 'I spy' and 'Pictionary', Hangman is a great way for them to improve their vocabulary. As such a majority of the words used in this game are catered towards their academic level, Year 6 and below. 

![Responsive Mockup](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/viewports.png)

## User Stories
- A quick and fun way to test my vocab knowledge.
- My son loves trying to guess the words without using hints.
- The design is very basic but works well for the simple task this game sets out to achieve.

## Features 

The Hangman game is a simple one page project, where the user is presented with the game upon page load and a game already loaded up for them to play. Whether they are new or a returning user, navigating the game is very easy and fairly intuitive. 

### Existing Features

- __The Game__

  - Featured on all pages (even pages that are not assocaited with the site structure, such as the submit results page or the league application page). 
  - This will allow the user to quickly navigate to a desired page, as well as indicate which page they are currently on via the nav tab being highlighted. 

![Nav Bar](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/navbar.png)

- __The Hangman Stockade__

  - The landing page image captures the user's attention with a game of Warhammer 40K in play.
  - This image captures most elements of a game of Warhammer 40K, player interaction, dice, miniature figurines and thematic scenery and board. 

![Landing Page](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/landing-image.png)

- __The hidden word__

  - This section pulls the user in with a well known 40K character, Abbadon the Despoiler and a Norn Emmissary, surrounded by text that conveys the question to the user, the benefits of joining a league. 
  - These statements will stand to answer the users question of why would they want to join a 40K league. 
  - The statements vary from a casual environment to someone with high degree of skill in playing 40K enabling the webpage to draw in both new and veteran players of Warhammer 40K.
  -This section is responsive in that on small screen the norn-emmissary image is removed and abbadon image is place at the bottom, as opposed to the 4 quadrant display on larger screens.

![Why join a league?](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/why-join.png)

- __The hint button and hint text__ 

  - The footer contains links to 3 different tabletop gaming clubs in and around Newbury, Berkshire, UK. These open in a new page when the Facebook icon is clicked. 
  - Let it be known that each footer link is a Facebook group, and as such the variation in social media is limited as the groups all operate on different days via their corresponding Facebook groups.
  -These Facebook links will help a user find a night and club that best suits their schedule.

![Footer](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/footer.png)

- __The onscreen keyboard__

  - The league page is where both new and current users will navigate to, to find information pertaining to the current league standings and their league game matchups.
  - The page is basic in its design in that it conveys the exact specifics of what a user would need to determine their position in the league and who they have to play within the current month to score points on the leaderboard.
  - Below the league matchups are where a user would interact to navigate to their corresponding need of the website, either they would be submitting their results, or they would be applying to join the next league.
  - Let it be known that I would like this page to become a lot more advanced in the future, hopefully to include a responsive table that pulls results from a realtime database and updates the league standing and matchups automatically as opposed to manually entering the results and matchups for each month. 

![The League](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/the-league.png)

### Features Left to Implement

- User Login.
- Results submission to a realtime database.
- League table updates pulled from the above realtime database.
- Catchup game mechanic for new users wishing to join an ongoing league season.
- User photo submissions from league games.
- Add a rules and information page once the old newbury40kleague.com webpage is phased out, with updated and streamlined information, along with a potential polling system for league rules and costs. (currently the league is free)

## Testing 

- The Newbury 40K League project was tested on the following devices: Desktop pc (1920 x 1080), iPad Air (2360 x 1640) and iPhone XR (1792 × 828) along with the Google Chrome inspect tool for responive dimension testing.
- The Newbury 40K League project was tested on the following web browsers: Google Chrome, Microsoft Edge and Mozilla Firefox.

### Device Testing
- The project is responsive in almost all dimensions bar a few outliers such as a smart watch.
- This was done by multiple commits and adjustments throughout the project inception to incorporate a wide array of dimensions, this mainly including allowing the text and information to nicely nest on the page for the user in a clear and coherent manor.

![Responsive Mockup](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/viewports.png)

### Web Browser Testing

- The project obtained a decent lighthouse rating with the Google Lighthouse Dev Tool, however future code could be implemented to allow the images to load faster as that seems to be pulling the overall score down.

![Lighthouse Score](https://p1g30n17.github.io/newbury-40k-league/assets/readme-media/lighthouse.png)

- The various web browsers the project was tested on had mostly optimal results, with little to no errors between all 3.

### Page Testing

- I have checked that all the navbar links work correctly and take the user to the correct pages.
- I have checked that all submission buttons are active and submit the user's input to the Code Institute form dump page with the correct attributes.
- I have checked that all user input requests are correct, and inform the user when an input request is incorrect or empty.

### Bugs

- When testing the project in Mozilla Firefox I encountered an error when trying to remove the number spinner from the number input request on the Submit Results page, I used the following code to solve the problem:
- #submit-results-form input[type='number'] {
    -moz-appearance: textfield;
}

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

### Unfixed Bugs

- None. 

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Main Branch
  - Once the Main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://p1g30n17.github.io/hangman/

## Credits 

### Code

- Coding assisstance and reference taken from the Love Maths Tutorial project from Code Institute.
- Coding assisstance and reference taken from the Hangman project and Rock, Paper, Scissors project from https://www.codingnepalweb.com/

### Media 

- Hangman Stock and body drawn by page owner (James King) in MS Paint.

### Content 

- The favicon was generated using https://favicon.io/
- The victory and game over alerts were generated using https://sweetalert2.github.io/