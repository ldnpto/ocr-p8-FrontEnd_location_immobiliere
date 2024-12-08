# Realisations

## utilisation de vite pour la création d'un site react

Découverte du framework vite pour créer une nouvelle application react, lancer un server front-end.
Mise à jour de la page "main.tsx" en utilisant la librairie BrowserRouter et de la page "App.tsx" pour ajouter un Router et une page "Home.tsx" vide

## mise à jour de la page d'accueil et création des composants Nav, Banner, Header, Footer

Création de composants pour la bannière, la gallerie de logements, les cartes de logements.
Récupération des informations des logements via requête à l'api backend et affichage des différents logements sous forme de cartes, le lien du logement dans la carte

![Home](/src/assets/images/Kasa-Home.png/){ width="300" }
/// caption
Home page
///

## création de la page Logement et des composants Carousel, Collapse, Ratings, Tags

Récupération de l'id du logement dans l'url, et des informations du logement via un appel au back-end, création du composant Caroussel, Collapse, Ratings, Tags

## création des pages APropos, Error

Création de la page APropos avec les informations des Collapse sous forme de fichier json statique et de la page d'Erreur. Redirection vers la page Erreur lors d'une url non existante, y compris un id de logement non valide
