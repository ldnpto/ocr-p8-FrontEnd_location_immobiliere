
import { render, screen, act, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Home from '../pages/Home/Home';
import LogementGallery from '../components/LogementGallery/LogementGallery';
import { MemoryRouter } from 'react-router-dom';
import { useState, useEffect } from "react";

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

/*
beforeEach(() => {
  
  vi.stubGlobal('fetch', vi.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([
        {
          "id": "c67ab8a7",
          "title": "Appartement cosy",
          "cover": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
          "pictures": [
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg"
          ],
          "description": "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
          "host": {
            "name": "Nathalie Jean",
            "picture": "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg"
          },
          "rating": "5",
          "location": "Ile de France - Paris 17e",
          "equipments": [
            "Équipements de base",
            "Micro-Ondes",
            "Douche italienne",
            "Frigo",
            "WIFI"
          ],
          "tags": [
            "Batignolle",
            "Montmartre"
          ]
        },
      ]),
    })
  ));
});*/

/*const [logements, setLogements] = useState<Logement[]>([]);

  
useEffect(() => {    
  act(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setLogements(data));
  })
}, []);
*/

/*
const LogementGalleryTestComponent = () => {
  const [logements, setLogements] = useState<Logement[]>([]);

  
  useEffect(() => {    
    act(() => {
      fetch('/api/test')
        .then(response => response.json())
        .then(data => setLogements(data));
    })
  }, []);

  
  return (      
        <LogementGallery/>
      
  );
};*/

describe('<LogementGalleryTestComponent>', () => {
  it('should render logements', async () => {

    act(() => {
      render(
        <MemoryRouter>
          <LogementGallery />
        </MemoryRouter>
      );
    });

    
    await waitFor (() => {
      screen.debug();
      expect(screen.getByText("Appartement cosy")).toBeInTheDocument(); 
      
    });

  });
});

/*

describe('<Banner>',  () => {
  it ('should render Banner', async () => {
    act(() => {
      render (<Home />);
    });
    const BannerElement = screen.getByRole('banner');
    expect (BannerElement.className).toEqual('banner');


    expect (screen.getByText("Chez vous, partout et ailleurs")).toBeInTheDocument();
    
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
          Chez vous, partout et ailleurs
        </h1>
      </div>
    `);
  });
});
*/



/*
describe('<LogementCard>',  () => {
  it ('should render Logement Card', async () => {

    act(() => {
      render (
        <MemoryRouter>
          <Home />
        </MemoryRouter> 
      );
    });
    //render(<LogementCard title={"Appartement cosy"} imageUrl={"string"} id={"string"} />);

    //expect (screen.getByText("Appartement cosy")).toBeInTheDocument();
    
    screen.debug();
    //const text = await screen.findAllByText("Appartement cosy");
    //expect (text).toBeInTheDocument();
    //expect (screen.getByText("Appartement Cosy")).toBeInTheDocument();
    
/*
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
*/
 