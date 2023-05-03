## Project setup

- first initialize package.json
```
npm init
```
- then we need to install the packages
```
npm install express mongoose --save
```

- create [mongo database](https://cloud.mongodb.com/v2#/org/626ec76442020521a40bf893/projects)
- create server.js and connect app with mongo database
```
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const uri = 'mongodb+srv://sukaravukan:Vukan2001@cluster0.hz5bt6o.mongodb.net/?retryWrites=true&w=majority'


async function connect(){
    try{
        await mongoose.connect(uri);
        console.log('Connected to the db')
    }catch (error){
        console.error(error);
    }
}

connect();
app.listen(8000, ()=>{
    console.log('Server started');
} )

```
- start the server by running command

```
node server
```
-   there should be 'Server started' and 'Connected to the db' in console
-   follow the instructions to install [mongodb and mongo shell](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) on your machine

## Working with mongoDB

-   after installing mongo, open your mongo database, find create, click on shell and copy connection string that should look like this - note that server.js need to be running:
```
mongosh "mongodb+srv://cluster0.hz5bt6o.mongodb.net/myFirstDatabase" --apiVersion 1 --username sukaravukan
```
-   now type ``` show db``` and it should list all databases
-   to use database, type ``` use <database_name>```
-   to enter specific collection that you created type ``` db.<collection_name>```

### Inserting new collections and documents
-   to insert document into collection type ```db.cards.insertOne({title: "OSNOVNI RESTART KAROSERIJE", description: "preporuka: osnovno poliranje automobila za kola sa blagim risevima, kojima je potrebno poliranje"})```
-   note that you don't need to have collection, you can run that command, and it will create collection and document for you
-   you can add multiple documents by using this command ```db.cards.insertMany([{<document_data>},{document_data}])```

### Fetching documents

-   to get first 20 documents run: ```db.<collection_name>.find()```
-   to get next 20 documents run: ```it```
-   to get specific document (filter) run: ```db.<collection_name>.find({title: "Some title"})``` 
-   you can pass as many arguments as you want to find

### Fetching only desired fields of documents

-   to get one specific field you can use: ```db.<collection_name>.findOne({_id: <item_id>})```
-   to get specific fields from document you can pass first argument that is filter argument and second argument that is object, and result will contain all fields that you want to get:
```db.<collection_name>.find({title: "test"}, {number: 1, title: 1})```
-   to get specific fields of all documents pass the empty object as a first argument and specify what fields you want in second argument:
```db.<collection_name>.find({title: "test"}, {number: 1, title: 1})```

### Sorting and limiting data

-   to limit the data that you want to get, chain limit: ```db.cards.find({title: "test"}).limit(1)```
-   to sort the data, chain sort, if you pass 1 to field that you want to sort based on, that means ascending order, -1 means descending: 
```db.cards.find().sort({title: 1})```


[//]: # (-   set `.env` file for local [environment]&#40;https://teamwork.q.agency/app/notebooks/188291?catId=497649&#41;)

[//]: # (-   in console do a `npm install` or `yarn` command)

[//]: # (-   start local development with `npm run dev` or `yarn dev` command in console)

[//]: # ()
[//]: # (# Sela)

[//]: # ()
[//]: # (### Front-end)

[//]: # (-   dev: https://www.dev.sela.qagency.dev/)

[//]: # (-   staging: https://www.staging.sela.qagency.dev/)

[//]: # (-   production: https://www.viariyadh.com/)

[//]: # ()
[//]: # (### Back-end Strapi)

[//]: # (-   dev: https://strapi.dev.sela.qagency.dev/admin)

[//]: # (-   staging: https://strapi.staging.sela.qagency.dev/admin)

[//]: # (-   production: https://strapi.viariyadh.com/admin)

[//]: # ()
[//]: # ()
[//]: # (### Strapi)

[//]: # ()
[//]: # (Strapi is used on dev, staging and production environment.)

[//]: # (Addition in .env file:)

[//]: # (```)

[//]: # (-   NEXT_PUBLIC_STRAPI_API_URL="")

[//]: # (-   CLIENT_ID="")

[//]: # (-   CLIENT_SECRET="")

[//]: # (```)

[//]: # (# Cognito)

[//]: # ()
[//]: # (Cognito was used as a third party authentication provider. It's also used for Google, Facebook and Apple sign up and log in.)

[//]: # (Addition in .env file:)

[//]: # (```)

[//]: # (-   NEXT_PUBLIC_AWS_COGNITO_POOL_ID="")

[//]: # (-   NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID="")

[//]: # (-   NEXT_PUBLIC_AWS_COGNITO_DOMAIN="")

[//]: # (```)

[//]: # (**Important**)

[//]: # ()
[//]: # (Currently, when we do log in or sing up with facebook, google or apple, cognito after successfully checking the profile returns the access token that we further use to load the user.)

[//]: # (The logic associated with cognito authentication is in these files:)

[//]: # ()
[//]: # (-   pages/cb.tsx)

[//]: # (-   src/queries/shared/services/httpService.ts)

[//]: # (-   src/auth/constants/index.ts)

[//]: # (-   src/auth/shared/components/RegistrationWrapper/index.tsx)

[//]: # (-   src/cognito/socialLogin.ts)

[//]: # ()
[//]: # ()
[//]: # (### Translations)

[//]: # ()
[//]: # (Strapi by default supports translations. The vast majority of translations are done just like that, over the straps.)

[//]: # (At the very beginning of the project, the client demanded that even the logical components be translated into strapi.)

[//]: # (In the last phase, we realized that this does not make sense and we started with local translations, but it is necessary to refactor everything that is left on the strapi regarding logic.)

[//]: # (Also, due to lack of time, the local translation is currently done on the client side, it should be done on the server side.)

[//]: # (Each component that is translated locally is also loaded using lazy load on the client side.)

[//]: # (There is also a task in improvements where you can find more details.)

[//]: # ()
[//]: # (## Directory Structure)

[//]: # ()
[//]: # (We use a standard folder structure that you can find on the next-skeleton [next-skeleton]&#40;https://gitlab.qagency.io/javascript/next-skeleton&#41;)

[//]: # ()
[//]: # ()
[//]: # (# Development flow)

[//]: # ()
[//]: # (-   working branch is `dev`)

[//]: # (-   testing branch for both developer and QA `dev`)

[//]: # (-   branch for testing strapi content, available to client `staging`)

[//]: # (-   production branch is `master`)

[//]: # ()
[//]: # (## GIT flow)

[//]: # ()
[//]: # (Keep all branches in sync as much as possible to avoid conflicts)

[//]: # ()
[//]: # (-   create new feature/bugfix branch from `dev` and make all required changes there)

[//]: # (-   when done, create [new merge request]&#40;https://gitlab.qagency.io/sela/frontend/-/merge_requests/new&#41; pointing to `dev` branch &#40;make code review if needed&#41;)

[//]: # (-   when all features pass the test on dev branch, create new merge request pointing to `staging` branch, here client will add the content and do the review)

[//]: # (-   when everything ok and approved from client, create new merge request pointing to `master` branch and CI/CD will automatically update the production)

[//]: # ()
[//]: # ()
[//]: # (### Strapi account)

[//]: # ()
[//]: # (```)

[//]: # (Email ID: admin@sela.dev)

[//]: # (Password: Admin1234)

[//]: # (```)

[//]: # ()
[//]: # (## SCSS)

[//]: # ()
[//]: # (Style naming convention is based on Pascal and className naming convention is based on CamelCase)

[//]: # ()
[//]: # (There is specific file `src/styles/index.scss` which has all global styles, also breakpoints are stored in `src/styles/_breakpoints.scss`,)

[//]: # (colors are stored in `src/styles/_colors.scss`)

[//]: # ()
[//]: # (## Arabic - direction form left to right and language switch)

[//]: # ()
[//]: # (When you change the language from English to Arabic, everything is switched from right to left. In `pages/_document.tsx` we are setting the direction based on locale.)

[//]: # (Also, locale is loaded based on the preferred language that the user has in his browser. The selected language is stored in localStorage, so if the client once selects the Arabic language, closes the window and opens the application again, the application will be in Arabic.)

[//]: # (```)

[//]: # (<Html dir={this.props.locale === 'en' ? 'ltr' : 'rtl'}>)

[//]: # (```)

[//]: # ()
[//]: # (## Map)

[//]: # ()
[//]: # (For Map we are using third party [indoor map]&#40;https://www.mappedin.com/&#41;)

[//]: # (All related on Map you can find in `src/features/map/index.tsx`)

[//]: # ()
