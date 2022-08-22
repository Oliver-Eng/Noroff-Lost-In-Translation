# LostInTranslation
A web application built on React, to showcase competences surrounding JavaScript, HTML, CSS and Web Frameworks, in connection with Accelerated Learning @ Experis Academy / Noroff.no

## Install
```
git clone https://gitlab.com/alkrdev/LostInTranslation.git
cd lostintranslation
npm install
```

## Extra setup
Create a file in the root of the project, called ".env", and paste the following into it:
```
REACT_APP_API_KEY=[INSERT PROVIDED API KEY HERE]
REACT_APP_API_URL=[INSERT PROVIDED URL HERE]
```

Then replace the "INSERT PR..." with their relevant pieces, from the creators of the project.

## Usage
The following command will open a new Webpage in your browser at `localhost:3000`. Remember to use your React extentions
```
npm start
``` 

The following will build a webpacked production version of the Web Application, in the created "build" folder
```
npm run build
``` 

Use the following to serve the content of the build folder, locally:
```
npm install -g serve
serve -s build
```

## Contributors

* [Oliver Engermann (@)](@)
* [Alexander Kristensen (@alkrdev)](@alkrdev)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
Noroff Accelerate, 2022.
