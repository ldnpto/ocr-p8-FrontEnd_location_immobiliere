# Kasa project introduction

## Commands

* `npm run dev` - run the server for react front-end (front-end directory).
* `npm start` - Start the back-end server for APIs calls (back-end directory))
* `npm run test` - run the tests sets (front-end directory)
* `mkdocs serve` - run the documentation server (front-end directory)

## Project layout

``` { .sh .no-copy }
.
│  index.html # Main HTML file for the application
│  mkdocs.yml - Configuration file for MkDocs documentation.
│  package.json # Contains project metadata and dependencies.
│  README.md # Project documentation and instructions.
│  tsconfig.app.json # TypeScript configuration for the application.
│  vite.config.ts # Configuration file for Vite.
│  mkdocs.yml    # The documentation configuration file.
├─ docs/
│  └─  index.md  # The documentation homepage.    
├─ public/   # Static assets served by the server.    
├─ src/
│  └─  App.tsx # Main application component.
│  └─  main.tsx # Entry point for the React application.        
│  └─  assets/
│      └─  data/ # json for Apropos text in Collapse
│      └─  images/ # images assets used in applications
│      └─  components/
│      └─  Banner/ # Banner component.
│      └─  Carousel/ # Carousel component.
│      └─  Collapse/ # Collapse component.
│      └─  Footer/ # Footer component.
│      └─  Header/ # Header component.
│      └─  LogementCard/ # LogementCard component.
│      └─  LogementGallery/ # LogementGallery component.
│      └─  Nav/ # Navigation component.
│      └─  Rating/ # Rating component.
│      └─  Tags/ # Tags component.        
│   └─  pages/
│       └─  Apropos/ # About page component.
│       └─  Error404/ # 404 Error page component.
│       └─  Home/ # Home page component.
│       └─  LogementPage/ # Logement page component.
│   └─  tests/
│       └─  APropos.test.tsx # test for APropos page
│       └─  Error.test.tsx # test for Error page
│       └─  Home-Logement.test.tsx # test for Home & Logement page
```
