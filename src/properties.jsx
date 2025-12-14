import image1 from './assets/Image1.jpg';
import image2 from './assets/Image2.jpg';
import image3 from './assets/Image3.jpg';
import image4 from './assets/Image4.jpg';
import image5 from './assets/Image5.jpg';
import image6 from './assets/Image6.jpg';
import image7 from './assets/Image7.jpg';
import image8 from './assets/Image8.jpg';
import image9 from './assets/Image9.jpg';
import image10 from './assets/Image10.jpg';
import image11 from './assets/Image11.jpeg';
import image12 from './assets/Image12.jpg';

const properties = [
  {
    id: 1,
    image: image1,
    price: "£950,000",
    title: "Eleganti Ville a Taormina",
    location: "Taormina",
    description:
      "Ville eleganti in una delle location più esclusive del panorama Siciliano",
    beds: 4,
    baths: 3,
    sqft: 2800,
    images: [image1, image2, image3, image4],
  },
  {
    id: 2,
    image: image5,
    price: "$1,450,000",
    title: "Abitazioni in una delle città più suggestive dell'isola",
    location: "Catania",
    description:
      "Un mix di relax e lusso sfrenato nel cuore di Palermo",
    beds: 5,
    baths: 4,
    sqft: 3500,
    images: [image5, image6, image7, image8],
  },
  {
    id: 3,
    image: image9,
    price: "$850,000",
    title: "Moderne ville a Scicli",
    location: "Scicli",
    description:
      "Moderne ville in un paesino del sud della Sicilia immerso nel barocco e non solo",
    beds: 3,
    baths: 2,
    sqft: 2000,
    images: [image9, image10, image11, image12],
  }
];
export default properties;