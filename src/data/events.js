let events = [
  {
    id: "it1",
    citiId: "city1",
    name: "Paragliding",
    photo: [
      "https://cdn2.civitatis.com/argentina/mendoza/galeria/experiencia-parapente-mendoza.jpg",
      "https://cdn2.civitatis.com/argentina/mendoza/galeria/disfrutando-vuelo-parapente-mendoza.jpg",
      "https://cdn2.civitatis.com/argentina/mendoza/galeria/vistas-vuelo-parapente-mendoza.jpg",
    ],
    description:
      "During the paragliding flight you will experience a mixture of adrenaline and visual pleasure where apart from the thrill of flying you will be able to enjoy a unique view of the city of Mendoza and the foothills of the Andes with its incredible snow-capped peaks.",
    price: 110,
    duration: 2,
    userId: "user1",
  },
  {
    id: "it2",
    citiId: "city1",
    name: "Winery Tour",
    photo: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/25/21/fb.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/af/43/ae/caption.jpg?w=1200&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/2c/88/3e/tour-de-bodegas-medio.jpg?w=1200&h=-1&s=1",
    ],
    description:
      "Delve deeper into Mendoza’s world-famous wine culture on half-day tasting tour that’s ideal is you’re pressed for time. You’ll visit several wineries to sample locally-grown varietals and discover what makes a great wine, without having to worry about driving between stops—instead.",
    price: 42,
    duration: 6,
    userId: "user1",
  },
  {
    id: "it3",
    citiId: "city2",
    name: "Colosseum tour",
    photo: [
      "https://cdn.getyourguide.com/img/tour/5dcdb4844e466.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5dcdb49bcba38.jpeg/145.jpg",
      "https://cdn.getyourguide.com/img/tour/5dcdb4c793ebf.png/145.jpg",
    ],
    description:
      "When in Rome, the Colosseum is probably at the top of most people's list of things to see! With this tour and the help of an expert guide, you'll spend an hour exploring this incredible building.",
    price: 55,
    duration: 1,
    userId: "user1",
  },
  {
    id: "it4",
    citiId: "city2",
    name: "Vatican Museum",
    photo: [
      "https://cdn2.civitatis.com/italia/roma/galeria/museos-vaticanos-estancias-rafael.jpg",
      "https://cdn2.civitatis.com/italia/roma/galeria/tour-vaticano.jpg",
      "https://cdn2.civitatis.com/italia/roma/galeria/la-creacion-de-adan.jpg",
    ],
    description:
      "In this guided tour of the Vatican we will visit the Vatican Museums and the Sistine Chapel. The price includes preferential entrance, so we will skip the endless queues!",
    price: 47,
    duration: 3,
    userId: "user2",
  },
  {
    id: "it5",
    citiId: "city3",
    name: "Samurai experience",
    photo: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6c/58/20.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/c1/50/a5.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/c1/52/80.jpg",
    ],
    description:
      "Try to be a samurai for the day during an experience designed with families and first-time visitors in mind. You'll gain access to a generally off-limits samurai house and wield a real katana sword.",
    price: 100,
    duration: 1,
    userId: "user2",
  },
  {
    id: "it6",
    citiId: "city3",
    name: "traditional tea ceremony",
    photo: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/75/f1/f8.jpg",
      "https://deih43ym53wif.cloudfront.net/large_woman-tea-kimono-japan-shutterstock_1032581263_317f8beca7.jpeg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/dc/f4/21/caption.jpg?w=1200&h=-1&s=1",
    ],
    description:
      "Experience a Japanese tea ceremony in Kyoto while wearing a kimono for an authentic taste of traditional Japan. This package includes green tea and Japanese sweets, with plenty of time to take pictures.",
    price: 55,
    duration: 1,
    userId: "user2",
  },
  {
    id: "it7",
    citiId: "city4",
    name: "Louvre Museum",
    photo: [
      "https://aws-tiqets-cdn.imgix.net/images/content/082f73c63e0144d29ae56e57578d39fb.JPG?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=003259d444bd5d46133b581cd6aee1e1&dpr=1.25",
      "https://aws-tiqets-cdn.imgix.net/images/content/2dcffd48c0ca4f2297a957f5d379945c.JPG?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=344f886a85c101ca52808f5085b49b0b&dpr=1.25",
      "https://aws-tiqets-cdn.imgix.net/images/content/2242bb814c744211aa33fd9ccdfc607f.JPG?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=14141102d5770d17120e9147d1c8ff54&dpr=1.25",
    ],
    description:
      "There are many museums in the world, but none is like the Louvre. With more than 35,000 pieces on display, its collection of Renaissance masterpieces, antique objects and neoclassical art makes it the most visited museum in the world.",
    price: 15,
    duration: 3,
    userId: "user3",
  },
  {
    id: "it8",
    citiId: "city4",
    name: "Guided tour of the Eiffel Tower",
    pho: [
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6c/76/0a.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/81/55/00.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/81/54/5e.jpg",
    ],
    description:
      "Make the most of your visit to one of the world's most popular monuments on a guided tour of the Eiffel Tower. Hear about the history and legends behind the icon of Paris as your guide escorts you to the second level, where panoramic views of the city await.",
    price: 43,
    duration: 1,
    userId: "user3",
  },
  {
    i: "it9",
    citiI: "city5",
    nam: "Clock Tower Pub Crawl",
    phot: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/35/87/3d.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/60/a4/bb/clock-tower-bar-crawl.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/67/12/52/clock-tower-bar-crawl.jpg?w=1100&h=-1&s=1",
    ],
    descriptio:
      "Travelers looking for a fun night out in Prague will love this pub crawl. You'll enjoy the best of the city's nightlife without the risk of getting lost or wasting time waiting in line. Get to know your fellow travelers quickly about drinking games.",
    pric: 24,
    duratio: 5,
    userI: "user3",
  },
  {
    id: "it10",
    citiId: "city5",
    name: "city ​​walking tour, boat ride and typical czech lunch",
    photo: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e1/1b/2c.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e1/1b/3d.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/e1/1b/6f.jpg",
    ],
    description:
      "See all of Prague's essential sights in just one day on this tour that takes you from the heights of Charles Bridge and Prague Castle to the Old Town, Lesser Town and Jewish Quarter, learning about the fascinating history of the city on the way.",
    price: 57,
    duration: 1,
    userId: "user4",
  },
  {
    id: "it11",
    citiId: "city6",
    name: "Bullring of the Maestranza",
    photo: [
      "https://cdn2.civitatis.com/espana/sevilla/galeria/big/ruedo-maestranza.jpg",
      "https://cdn2.civitatis.com/espana/sevilla/galeria/big/maestranza.jpg",
      "https://sevillecityguide.com/images/plaza-de-toros-seville.jpg",
    ],
    description:
      "The construction of the plaza, originally in wood, began in 1761. Since then it has been subjected to numerous reforms that have made it part of the history not only of bullfighting, but also of the city.",
    price: 8,
    duration: 1,
    userId: "user4",
  },
  {
    id: "it12",
    citiId: "city6",
    name: "Tour of the Alcázar, the Cathedral and the Giralda",
    photo: [
      "https://cdn2.civitatis.com/espana/sevilla/galeria/patio-doncellas-alcazar-sevilla.jpg",
      "https://cdn2.civitatis.com/espana/sevilla/galeria/giralda-sevilla.jpg",
      "https://cdn2.civitatis.com/espana/sevilla/galeria/santa-maria-sede-sevilla.jpg",
    ],
    description:
      "It is located in the place where Belgrano raised the Argentine flag for the first time, on the banks of the Paraná River.",
    price: 10,
    duration: 50,
    userId: "user4",
  },
];
export default events;
