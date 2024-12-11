# Testing Documentation

## Overview

Test suite documentation for the Kasa application, detailing test files, purposes, and implementation.

## Files Structure and Coverage

### Home Tests

**File**: [`src/tests/Home.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/Home.test.tsx)

Tests the Home page components:

- Banner component display verification
- LogementGallery rendering (20 cards expected)

### Logement Tests

**File**: [`src/tests/Logement.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/Logement.test.tsx)

Tests the Logement components:

- Navigation between Logement Gallery from Home and Logement page
- API data integration
- Component layout validation

### About Page Tests

**File**: [`src/tests/APropos.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/APropos.test.tsx)

Validates About page functionality:

- Navigation through routes
- Collapse components content:
  - Fiabilité section
  - Respect section
  - Service section
  - Sécurité section
- Data integration from `apropos.json`
- Footer presence verification

### Error Page Tests

**File**: [`src/tests/Error.test.tsx`](https://github.com/ldnpto/ocr-p8-FrontEnd_location_immobiliere/blob/main/src/tests/Error.test.tsx)

Error handling validation:

- 404 page rendering
- Navigation to error page
- Error message display
- Return path functionality

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
