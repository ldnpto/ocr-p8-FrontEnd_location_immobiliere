
import { render, screen, waitFor } from '@testing-library/react';
import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect} from 'vitest';
import { MemoryRouter, Route, Routes, useParams } from 'react-router-dom';
import Home from '../pages/Home/Home';
import LogementPage from '../pages/LogementPage/LogementPage';


describe('<LogementGalleryTestComponent>', () => {
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
  
    it('should render LogementPage with LogementIDUrlParameter From HomePage', async () => {  
      // encapsulation de la page LogementPage pour préfixer avec le paramètre du logement dans l'url  
      function ParamsLogementPage() {      
        const routeParams = useParams<{ id: string }>();
        const [params, setParams] = useState<{ id: string | undefined }>({ id: undefined });
        useEffect(() => {
          setParams(routeParams);  
          console.log("paramètre Url: " + routeParams.id);      
        }, [routeParams]);
  
        return <>
            <div>URLParameterLogementId:{routeParams.id}</div>
            <LogementPage/>
        </>;
      }
  
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement/:id" element={<ParamsLogementPage/> } />
        </Routes>
        </MemoryRouter>
      );
  
      await waitFor (() => {
        // vérification du texte de la première carte de logement dans la Gallerie des logements
        expect(screen.getByText("Appartement cosy")).toBeInTheDocument();           
      });
  
      // clic sur la première carte de logement
      await userEvent.click(screen.getByAltText(/Appartement cosy/i));   
  
      await waitFor(() => {
        const logementId = "c67ab8a7";
        // vérification du texte de la page de détail du logement
        expect(screen.getByText(/Ile de France/i)).toBeInTheDocument();
        expect(screen.getByText(/Votre maison loin de chez vous/i)).toBeInTheDocument();
  
        // vérification de l'ID du logement dans l'url (paramètre)
        expect(screen.getByText("URLParameterLogementId:" + logementId)).toBeInTheDocument();             
  
      });   
  
    });
  });