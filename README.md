# Podcaster
A podcast planner.
Podcaster helps you plan your podcasts by adding links to your research, your guests, writing your script and saving locally so you can write later.  
[Use it now](https://podcaster.estebandalelr1.now.sh)

## Tech
Podcaster was built using [NextJS](https://nextjs.org/) and [React](https://reactjs.org/) on [Typescript](https://www.typescriptlang.org/). As recommended by Next, it uses [CSS in JS](https://cssinjs.org/), setting both global styles and local ones, very close to how plain CSS was written. For testing, [Enzyme](https://airbnb.io/enzyme/), [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) were used. 

For the deployment, [Now](https://zeit.co/) was chosen, and [Airtable](https://airtable.com/) provides the database service, and all is validated using [JWT](https://airtable.com/)(saved on the local storage).

 ## Using it locally
 Podcaster may be used locally by pulling this repo, installing it and adding the ```.env```. This may either be a personal Airtable DB or you may ask for the shared one that the system uses in production. 

 ## Special thanks
 [Juliana Jaime](https://github.com/PeppermintNDaisies) - Donated design ideas, and mic logo.