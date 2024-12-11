# Pages and Components

## Pages

### Home Page

- **Name**: Home
- **URL**: [`/`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/pages/Home/Home.tsx)
- **Description**: The main landing page of the application. It displays a banner, a gallery of logement cards, and other introductory information.
- **Components Used**:
    - [`Banner`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Banner/Banner.tsx)
    - [`LogementGallery`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/LogementGallery/LogementGallery.tsx)
    - [`LogementCard`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/LogementCard/LogementCard.tsx)
    - [`Nav`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Nav/Nav.tsx)
    - [`Footer`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Footer/Footer.tsx)

### Logement Page

- **Name**: LogementPage
- **URL**: [`/logement/:id`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/pages/LogementPage/LogementPage.tsx)
- **Description**: Displays detailed information about a specific logement, including a carousel of images, description, ratings, and tags. The id of Logement to display is passed in the url
- **Components Used**:
    - [`Carousel`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Carousel/Carousel.tsx)
    - [`Collapse`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Collapse/Collapse.tsx)
    - [`Rating`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Rating/Rating.tsx)
    - [`Tags`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Tags/Tags.tsx)
    - [`Nav`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Nav/Nav.tsx)
    - [`Footer`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Footer/Footer.tsx)

### About Page

- **Name**: Apropos
- **URL**: [`/apropos`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/pages/Apropos/Apropos.tsx)
- **Description**: Provides information about the application and its purpose.
- **Components Used**: 
    - [`Collapse`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Collapse/Collapse.tsx)
    - [`Nav`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Nav/Nav.tsx)
    - [`Footer`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Footer/Footer.tsx)

### Error Page

- **Name**: Error404
- **URL**: [`*`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/pages/Error404/Error404.tsx)
- **Description**: Renders a 404 error message for any undefined routes.
- **Components Used**:
    - [`Nav`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Nav/Nav.tsx)
    - [`Footer`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Footer/Footer.tsx)

## Components

### Banner

- **Name**: Banner
- **URL**: [`Banner`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Banner/Banner.tsx)
- **Description**: Displays a banner image and text on the home page.
- **Parameters**:
    ```typescript
    interface BannerProps {
      img: string;
      overlay: boolean;
      title: string;
    }
    ```

### LogementCard

- **Name**: LogementCard
- **URL**: [`LogementCard`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/LogementCard/LogementCard.tsx)
- **Description**: A card component that displays a summary of a logement, including an image and title.
- **Parameters**: 
    ```typescript
    interface LogementCardProps {
      title: string;
      imageUrl: string;
      id: string;
    }
    ```

### LogementGallery

- **Name**: LogementGallery
- **URL**: [`LogementGallery`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/LogementGallery/LogementGallery.tsx)
- **Description**: A gallery component that displays multiple logement cards.
- **API URL**: GET /api/properties
- **Data Object Used**:

    ```typescript
    interface Logement {
      id: string;
      title: string;
      cover: string;
      pictures: string[];
      description: string;
      hosts: {
        name: string;
        picture: string;
      };
      rating: number;
      location: string;
      equipments: string[];
      tags: string[];
    }   
    ```

### Collapse

- **Name**: Collapse
- **URL**: [`Collapse`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Collapse/Collapse.tsx)
- **Description**: A collapsible component for showing and hiding content.
- **Parameters**:

    ```typescript
    interface CollapseProps {
      title: string;
      text: string;
    }
    ```

### Rating

- **Name**: Rating
- **URL**: [`Rating`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Rating/Rating.tsx)
- **Description**: A component that displays the rating of a logement.
- **Parameters**:

    ```typescript
    interface RatingProps {
      rating: number;
    }
    ```

### Tags

- **Name**: Tags
- **URL**: [`Tags`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Tags/Tags.tsx)
- **Description**: A component that displays tags associated with a logement.
- **Parameters**:

    ```typescript
    interface TagsProps {
      tags: string[];
    }
    ```

### Header

- **Name**: Header
- **URL**: [`Header`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Header/Header.tsx)
- **Description**: The header component of the application.
- **Parameters**: None

### Footer

- **Name**: Footer
- **URL**: [`Footer`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Footer/Footer.tsx)
- **Description**: The footer component of the application.
- **Parameters**: None

### Nav

- **Name**: Nav
- **URL**: [`Nav`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/components/Nav/Nav.tsx)
- **Description**: The navigation component of the application.
- **Parameters**: None
