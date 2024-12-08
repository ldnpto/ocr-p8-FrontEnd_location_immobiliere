
import { render, screen, waitFor } from '@testing-library/react';
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect} from 'vitest';
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../pages/Home/Home';


describe('<HomeAndLogementGalleryTestComponent>', () => {
  it('should render Banner and logement Card In HomePage', async () => {    
    
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      </MemoryRouter>
    );

    
    await waitFor (() => {
      // vérification du texte de la Bannière
      expect (screen.getByText("Chez vous, partout et ailleurs")).toBeInTheDocument();  

      // vérification qu'il y a 20 cartes de logements dans la gallerie       
      expect(container.getElementsByClassName("logement-card").length).toBe(20); //banner      

      // vérification du texte de la première carte de logement dans la Gallerie des logements
      expect(screen.getByText("Appartement cosy")).toBeInTheDocument();           
      
    });    
      
  });
  
});
