# quete_nodejs_PUT_DELETE
Quête NODEJS - Can I PUT some DELETE ?

# Challenge
# Mise en place du formulaire
# Dans ton dossier contenant ton projet généré avec l'express-generator, tu vas créer quatres nouvelles routes dans routes/users.js.

# Tu vas devoir créer :

# une route (/users/[prénom]) acceptant le GET pour afficher le formulaire de update-user.pug
# une route (/users/[prénom]) acceptant le PUT et prenant en paramètre dans l'URL une chaîne de caractères, qui affichera The new name is [prénom]
# une route (/users/[numéro]) acceptant le GET pour afficher le formulaire de delete-user.pug
# une route (/users/[numéro]) acceptant le DELETE et prenant en paramètre dans l'URL un entier, qui affichera No more user with id [numéro]
# Dans tes ton dossier views tu auras deux vues pour lancer ces appels de routes :

# un fichier update-user.pug avec un formulaire envoyant sur la route en PUT
# un fichier delete-user.pug avec un formulaire envoyant sur la route en DELETE
# Critéres de validation
# L'appel de l'URL /users/bob en PUT affiche The new name is bob
# L'appel de l'URL /users/2 en DELETE affiche No more user with id 2
# Le code sera disponible sur Github.