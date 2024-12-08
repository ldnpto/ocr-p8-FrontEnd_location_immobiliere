import { render, screen, act, waitFor } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../pages/Error404/Error404';


describe('<NavigateToUnknownPage>', () => {
    it('should render ErrorPage', async () => {

        // navigation vers une page inexistante
        render(
            <MemoryRouter initialEntries={['/non-existent-url']}>
                <Routes>
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </MemoryRouter>
          );

          // vérification du texte de la page d'erreur 404

          expect(await screen.findByText(/404/i)).toBeInTheDocument();
    });
})