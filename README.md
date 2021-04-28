# Blog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

# Starting commands
## Install :
- `npm install -g npm@latest`
- `npm install -g @angular/cli`
## Create project : 
- `ng new mon-projet-angular --style=scss --skip-tests=true`
## Install bootstrap  
- `npm install bootstrap@3.3.7 --save`
- add bootstrap to angular.json: 
  `"styles": [
    "bootstrap/dist/css/bootstrap.css",
    "styles.scss"
]`
- Start server : `ng serve` ( port 4200)
- Create component : `ng generate component post`

## Blog Architecture

![Blog Architecture](https://github.com/omontigny/blog/blob/main/src/assets/angular_concepts.png)



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
