import { render, screen,  waitFor } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

import App from '../App';


describe('<NavigateToAProposPage>', () => {
    it('should render APropos', async () => {
        // navigation vers la page d'accueil
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
          );
        
        // clic sur le lien A Propos
        await userEvent.click(screen.getByRole('link' , {name: /A Propos/i}));
        
        await waitFor(() => {
            // vérification du texte dans les collapse de la page A Propos
            expect(screen.findAllByText(/Fiabilité/i)).toBeTruthy();
            expect(screen.findAllByText(/Respect/i)).toBeTruthy();
            expect(screen.findAllByText(/Service/i)).toBeTruthy();
            expect(screen.findAllByText(/Sécurité/i)).toBeTruthy();
      
            // vérification du footer
            expect(screen.findAllByText(/© 2020 Kasa/i)).toBeTruthy();
        });

    });
});