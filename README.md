# Projet-Web-S3

# Mettre à jour le projet:

* npm install

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
