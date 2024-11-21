
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '../pages/Home/Home';
import LogementGallery from '../components/LogementGallery/LogementGallery';

describe('<Banner>',  () => {
  it ('should render Banner', async () => {
    render (<Home />);
    const BannerElement = screen.getByRole('banner');
    expect (BannerElement.className).toEqual('banner');


    expect (screen.getByText("Chez vous, partout ici et ailleurs")).toBeInTheDocument();
    
    expect (BannerElement).toMatchInlineSnapshot(`
      <div
        class="banner"
        role="banner"
      >
        <img
          alt="banner"
          class="overlay-dark"
          src="/src/assets/images/background-banner.png"
        />
        <h1>
          Chez vous, partout ici et ailleurs
        </h1>
      </div>
    `);
  });
});

describe ('<Logement Card>', async () => {
  it ('should render Logement Card', () => {
    const {container} = render (<LogementGallery />);
    expect (container.firstChild).toMatchInlineSnapshot(`
      <div
        class="logement-gallery-container"
      >
        <div
          class="logement-gallery"
        />
      </div>
    `);
  })
})