import { Region } from "../types/types";

export const REGIONS: Region[] = [
  {
    id: "1north",
    regionName: "North",
    regionDesc:
      "Northern Portugal is a mountainous region. Its peaks known as serras include Serra do Gerês (1544 m), Peneda (1416 m), Marão (1415 m) and Soajo (1415 m). Some of which forms natural parks: the Peneda-Gerês National Park, Montesinho Natural Park, and the Alvão Natural Park.",
    mainImage: "./regionImages/braga-main.jpg",
    images: {
      firstImage: "./regionImages/porto-region.jpg",
      secondImage: "./regionImages/porto2-region.jpg",
    },
  },
  {
    id: "2central-portugal",
    regionName: "Central Portugal",
    regionDesc:
      "Central Portugal is an amazing region, a place where you can discover villages of rare beauty frozen in time, breathtaking landscapes, cities that know how to preserve their history and at the same time embrace modernity. Visiting this region is definitely one of the things to do in Portugal so don’t miss the opportunity!",
    mainImage: "./central-main.jpg",
    images: {
      firstImage: "./regionImages/coimbra-region.jpg",
      secondImage:
        "https://images.unsplash.com/photo-1627543745848-fc0f900193cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80",
    },
  },
  {
    id: "3lisbon",
    regionName: "Greater Lisbon",
    regionDesc:
      "The Lisbon region of Portugal is the economic and political power of the country. The capital and largest city of Portugal. You can find great landmarks, such as Park Eduardo VII, which fronts the statue of Marques de Pombal (responsible for the reconstruction of the city after an earthquake) and, in the northern end, the largest Portuguese flag in the world.",
    mainImage: "./regionImages/lisbon-main.jpg",
    images: {
      firstImage: "./regionImages/lisbon2-region.jpg",
      secondImage: "./regionImages/lisbon3-region.jpg",
    },
  },
  {
    id: "4alentejo",
    regionName: "Alentejo",
    regionDesc:
      "The Alentejo region in Portugal is famous for its cork oaks and olive groves, but there is so much to do in this area that spans from the Tagus River down to the Algarve and East all the way to the Spanish border.",
    mainImage: "./regionImages/alentejo-region.jpg",
    images: {
      firstImage: "./regionImages/alentejo2-region.jpg",
      secondImage: "./regionImages/alentejo3-region.jpg",
    },
  },
  {
    id: "5algarve",
    regionName: "Algarve",
    regionDesc:
      "The Algarve is Portugal's southernmost region, and one of the most popular vacation destinations in Europe. Blessed with a superb coastline and some of the country's loveliest beaches, the province enjoys hot, dry summers and short, mild winters. Warm sea temperatures and gentle winds add to its allure.",
    mainImage: "./regionImages/algarve1-region.jpg",
    images: {
      firstImage: "./regionImages/algarve2-region.jpg",
      secondImage: "./regionImages/algarve3-region.jpg",
    },
  },
];
