# Projet-Web-S3

# Workflow:

## Ajouter une feature/fix/test:

* git checkout main

* git pull

* git checkout -b [feature ou fix ou test]/le_nom_de_ma_feature

* [faire mon dev]

* git add ... git commit ...

* git push

* (Si c'est le premier push :copier la ligne de push qu'il propose)

* aller sur github, créer la pull request en main, vérifier ses changements ! et accepter, supprimer la branche

----------------------

## Pour remettre à jour sa branche feature (car créé y'a longtemps) :

* git checkout main

* git pull

* git checkout feature/le_nom_de_ma_feature

* git rebase main

* Possible conflits (corriger puis faire git rebase --continue)

-------------

## Pour résoudre un conflit:

* git checkout main

* git pull

* git checkout -b merge/nom_de_la_feature

* git merge --no-ff features/nom_de_la_feature

* tant qu'il n'y a plus de conflict: résoudre les conflits add, git merge --continue

* puis enfin push et pull request

---------------------

## Pour pouvoir push:

* git config --global user.email "you@example.com"

* git config --global user.name "Your Name"

# AngularS3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


