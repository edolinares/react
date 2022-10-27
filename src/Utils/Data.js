/*export const products = [
  {
    id: 1,
    title: "1Montana en pareja",
    category: "Trekking",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    price: 8999,
    pictureUrl:
      "https://www.falke.com/media/i/SI_ESS_MS_Baselayer-Trekking_Couple_WARM-Kollektion_500x500px-7066-0.jpg",
  },
  {
    id: 2,
    title: "1Explora a tu ritmo",
    category: "Trekking",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 20999,
    pictureUrl:
      "https://www.falke.com/media/i/SI_ESS_MS_Baselayer-Trekking_Women_Wool-Tech_500x500px-7065-0.jpg",
  },
  {
    id: 3,
    title: "1Duerme en la montana",
    category: "Trekking",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 5699,
    pictureUrl:
      "https://www.falke.com/media/i/SI_ESS_MS_Baselayer-Trekking_Zelt_Maximum-WARM_500x500px-7067-0.jpg",
  },
  {
    id: 4,
    title: "1Combee",
    category: "Avistamiento de Aves",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    price: 6499,
    pictureUrl:
      "https://www.coombeabbey.com/wp-content/uploads/2019/08/Bird-watching-Coombe-Abbey-02-1200x1200.jpg",
  },
  {
    id: 5,
    title: "1Lago Erie",
    category: "Avistamiento de Aves",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    price: 4139,
    pictureUrl:
      "leview/image/fetch/c_fill,q_75/https://www.shoresandislands.com/SiteMedia/Images/Blog/9919dd49-e907-47f2-bc73-e4ddbfd2b7da_Birding%20IG.png",
  },
  {
    id: 6,
    title: "1Pajaro Azul",
    category: "Avistamiento de Aves",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    price: 5999,
    pictureUrl:
      "https://assets.website-files.com/589215a57e34325c3af796b3/5ab96e94cd72e62700584a06_rmr-blog-bird-oasis.jpg",
    stock: "number",
  },
  {
    id: 7,
    title: "1Cabana Tipo A",
    category: "Glamping",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    price: 7499,
    pictureUrl:
      "https://lasestacas.com/sites/default/files/sites/le_platilla_galeriaglamping_3.jpg",
  },
  {
    id: 8,
    title: "Cabana Tipo B",
    category: "Glamping",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    price: 7999,
    pictureUrl:
      "https://lasestacas.com/sites/default/files/sites/le_platilla_galeriaglamping_4.jpg",
  },
  {
    id: 9,
    title: "Cabana Tipo C",
    category: "Glamping",
    description: "Lorem ipsum dolor sit amet, consectetur adip",
    price: 10999,
    pictureUrl:
      "https://lasestacas.com/sites/default/files/sites/le_platilla_galeriaglamping_1.jpg",
  },
];

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000);
  });

  return promise;
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id));
    setTimeout(() => {
      return resolve(result);
    }, 2000);
  });

  return promise;
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter(
      (product) => product.category === categoryId
    );
    setTimeout(() => {
      return resolve(results);
    }, 2000);
  });

  return promise;
};
*/