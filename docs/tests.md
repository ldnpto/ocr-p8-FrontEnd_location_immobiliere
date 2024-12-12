# Testing Documentation

## Overview

Test suite documentation for the Kasa application, detailing test files, purposes, and implementation.

## Files Structure and Coverage

### Home Tests

**File**: [`src/tests/Home.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/Home.test.tsx)

Tests the Home page components:

- Banner component display verification

    ```typescript
    await waitFor(() => {
      // vérification du texte de la Bannière
      expect(screen.getByText("Chez vous, partout et ailleurs")).toBeInTheDocument();
    });
    ```

- LogementGallery rendering (20 cards expected)

    ```typescript
    await waitFor(() => {
      // vérification qu'il y a 20 cartes de logements dans la gallerie
      expect(container.getElementsByClassName("logement-card").length).toBe(20);
    });
    ```

### Logement Tests

**File**: [`src/tests/Logement.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/Logement.test.tsx)

Tests the Logement components:

- Navigation between Logement Gallery from Home and Logement page

    ```javascript
    it('should navigate from Home to LogementPage', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<LogementPage />} />
          </Routes>
        </MemoryRouter>
      );

      // Click on the first logement card
      await userEvent.click(screen.getByAltText(/Appartement cosy/i));

      await waitFor(() => {
        // Verify the logement page is displayed
        expect(screen.getByText(/Ile de France/i)).toBeInTheDocument();
      });
    });
    ```

- API data integration

    ```javascript
    it('should fetch and display logement data', async () => {
      render(
        <MemoryRouter initialEntries={['/logement/c67ab8a7']}>
          <Routes>
            <Route path="/logement/:id" element={<LogementPage />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify logement data is displayed
        expect(screen.getByText(/Votre maison loin de chez vous/i)).toBeInTheDocument();
      });
    });
    ```

- Component layout validation

    ```javascript
    it('should render logement components correctly', async () => {
      render(
        <MemoryRouter initialEntries={['/logement/c67ab8a7']}>
          <Routes>
            <Route path="/logement/:id" element={<LogementPage />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify logement components are rendered
        expect(screen.getByText(/Ile de France/i)).toBeInTheDocument();
        expect(screen.getByText(/Votre maison loin de chez vous/i)).toBeInTheDocument();
        expect(screen.getByText(/Equipements/i)).toBeInTheDocument();
      });
    });
    ```

### About Page Tests

**File**: [`src/tests/APropos.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/APropos.test.tsx)

Validates About page functionality:

#### Navigation through routes

  ```javascript
    it('should navigate to the About page', async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );

      // Click on the "A Propos" link
      await userEvent.click(screen.getByRole('link', { name: /A Propos/i }));

      await waitFor(() => {
        // Verify the About page is displayed
        expect(screen.getByText(/Fiabilité/i)).toBeInTheDocument();
      });
    });
  ```

#### Collapse components content:

##### Data integration from `apropos.json`

  ```javascript
    it('should fetch and display data from apropos.json', async () => {
      render(
        <MemoryRouter initialEntries={['/apropos']}>
          <Routes>
            <Route path="/apropos" element={<APropos />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify data from apropos.json is displayed
        expect(screen.getByText(/Fiabilité/i)).toBeInTheDocument();
        expect(screen.getByText(/Respect/i)).toBeInTheDocument();
        expect(screen.getByText(/Service/i)).toBeInTheDocument();
        expect(screen.getByText(/Sécurité/i)).toBeInTheDocument();
      });
    });
  ```

#### Footer presence verification

  ```javascript
    it('should display the footer', async () => {
      render(
        <MemoryRouter initialEntries={['/apropos']}>
          <Routes>
            <Route path="/apropos" element={<APropos />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify the footer is displayed
        expect(screen.getByText(/© 2021 Kasa. All rights reserved/i)).toBeInTheDocument();
      });
    });
  ```

### Error Page Tests

**File**: [`src/tests/Error.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/Error.test.tsx)

Error handling validation:

- 404 page rendering

    ```javascript
    it('should render the 404 Error page', async () => {
      render(
        <MemoryRouter initialEntries={['/non-existent-url']}>
          <Routes>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify the 404 error message is displayed
        expect(screen.getByText(/404/i)).toBeInTheDocument();
      });
    });
    ```

- Navigation to error page

    ```javascript
    it('should navigate to the Error page for an unknown route', async () => {
      render(
        <MemoryRouter initialEntries={['/unknown-route']}>
          <Routes>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify the Error page is displayed
        expect(screen.getByText(/404/i)).toBeInTheDocument();
      });
    });
    ```

- Error message display

    ```javascript
    it('should display the error message on the Error page', async () => {
      render(
        <MemoryRouter initialEntries={['/non-existent-url']}>
          <Routes>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </MemoryRouter>
      );

      await waitFor(() => {
        // Verify the error message is displayed
        expect(screen.getByText(/Oups! La page que vous demandez n'existe pas./i)).toBeInTheDocument();
      });
    });
    ```

- Return path functionality

    ```javascript
    it('should navigate back to the Home page from the Error page', async () => {
      render(
        <MemoryRouter initialEntries={['/non-existent-url']}>
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );

      // Click on the return link
      await userEvent.click(screen.getByRole('link', { name: /Retourner sur la page d’accueil/i }));

      await waitFor(() => {
        // Verify the Home page is displayed
        expect(screen.getByText(/Chez vous, partout et ailleurs/i)).toBeInTheDocument();
      });
    });
    ```

## Technical Implementation

### Testing Stack

- **Test Runner**: Vitest
- **Component Testing**: React Testing Library
- **Route Testing**: MemoryRouter
- **User Interactions**: @testing-library/user-event
- **Async Operations**: waitFor utility

### Test Location

All test files are located in the [`src/tests`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests) directory

### Coverage Areas

- Component rendering
- User interactions
- Route navigation
- Data integration
- Error scenarios
- Responsive layout
- Content validation
