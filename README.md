![Podcaster](./public/podcaster.png)


A podcast planner.
Podcaster helps you plan your podcasts by adding links to your research, your guests, writing your script and saving locally so you can write later.  
[Use it now](https://podcaster.estebandalelr1.now.sh)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=EstebanDalelR_podcaster&metric=alert_status)](https://sonarcloud.io/dashboard?id=EstebanDalelR_podcaster)
## Tech
Podcaster was built using [NextJS](https://nextjs.org/) and [React](https://reactjs.org/) on [Typescript](https://www.typescriptlang.org/). As recommended by Next, it uses [CSS in JS](https://cssinjs.org/), setting both global styles and local ones, very close to how plain CSS was written. For testing, [Enzyme](https://airbnb.io/enzyme/), [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) were used. 

For the deployment, [Now](https://zeit.co/) was chosen, and [Airtable](https://airtable.com/) provides the database service, and all is validated using [JWT](https://airtable.com/)(saved on the local storage).

 ## Using it locally
 Podcaster may be used locally by pulling this repo, installing it and adding the ```.env```. This may either be a personal Airtable DB or you may ask for the shared one that the system uses in production. 
 You may also install the app locally (thanks to the service worker) to use it with reduced functionallity. 

 ![localapp](./public/desktop.jpeg)

 ## Special thanks
 [Juliana Jaime](https://github.com/PeppermintNDaisies) - Donated design ideas, and mic logo.
 
 ## Caveats & WIP
 There is currently a branch that holds the translation, but it is not properly done to ble deployed. PRs welcome!

## External measurements
Currently, the landing page hits 98 points on [Lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fpodcaster.estebandalelr1.now.sh%2F&tab=mobile) on Mobile.
![Lighthouse](./public/Lighthouse.png)
