const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fs= require('fs');
const rawData = fs.readFileSync('../cromos.json');
const jsonData = JSON.parse(rawData);

const cromosSchema = new Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  images: String
});
const Cromo = mongoose.model('Cromo', cromosSchema);

const CargarCromos = async() => {

  await Cromo.deleteMany();
  await Cromo.insertMany([
    {
      id: 1,
      title: 'Cromo Dinosaurio Maruja',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/7d/d9/f7/7dd9f7756eb196c3a095abb2782672f5.jpg"
      },

    {
    id: 2,
    title: 'Cromo Dinosaurio Cuñado',
    price: 110,
    description: 'esta extinguido x2',
    images: "https://pbs.twimg.com/media/DaO14FYVAAUGF7D?format=jpg&name=small"
    },

    {
      id: 3,
      title: 'Cromo Dinosauria MILF',
      price: 999.99,
      description: 'esta extinguido x2',
      images: "https://i.pinimg.com/564x/44/5a/19/445a19a7bc0a3f9c22bb4cbb9d9ff40f.jpg"
      },

    {
      id: 4,
      title: 'Cromo Moco De Dinosaurio',
      price: 110,
      description: 'esta extinguido x2',
      images: "https://i.pinimg.com/564x/ab/0d/38/ab0d38af9ab18a023ee2dca40eb07ba3.jpg"
      },

    {
      id: 5,
      title: 'Cromo Dinosaurio Alienigena',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/de/62/59/de62590ccebc3a315603b09b36f57b24.jpg"
      },

    {
      id: 6,
      title: 'Cromo Dino Murcielago',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/81/0e/75/810e7594418760ecfa9fedea60f12ff4.jpg"
      },

    {
      id: 7,
      title: 'Cromo Dinosauria Bruja',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/b2/08/e0/b208e06ed873b987ec216e502a1a88a9.jpg"
      },

    {
      id: 8,
      title: 'Cromo Dinosaurio Totem',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/4f/cb/7a/4fcb7a889d30ea9c0d886a70222de830.jpg"
      },
    {
      id: 9,
      title: 'Cromo Dinosaurio Tactico',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/6c/20/c2/6c20c263df6e2dcfe15e25e04efe5934.jpg"
      },
    {
      id: 10,
      title: 'Cromo Dinosaurio Mamado',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/ea/58/59/ea585964f17845bef5d2f49799cca906.jpg"
      },
    {
      id: 11,
      title: 'Cromo Perrosaurio',
      price: 100,
      description: 'esta extinguido',
      images: "https://i.pinimg.com/564x/95/e2/09/95e209e01ab9c7602ab0ee52cfdb157e.jpg"
      },
      {
        id: 12,
        title: 'Cromo Dino Fachero',
        price: 100,
        description: 'esta extinguido',
        images: "https://i.pinimg.com/564x/24/a6/57/24a657f9a91bb273ca1cd1b3ab55d266.jpg"
        },
        {
          id: 13,
          title: 'Cromo Totodile Dinosaurio',
          price: 100,
          description: 'esta extinguido',
          images: "https://pbs.twimg.com/media/EUYdp2KUEAAKUZo.jpg"
          },
          {
            id: 14,
            title: 'Cromo Homo Sapiens Dino Shine',
            price: 100,
            description: 'esta extinguido',
            images: "https://i.pinimg.com/564x/e4/3e/5f/e43e5f03fa45a255f440a6bbe1014ed8.jpg"
            },
            {
              id: 15,
              title: 'Cromo Moto Dino',
              price: 100,
              description: 'esta extinguido',
              images: "https://m.media-amazon.com/images/I/61NzAJUiKfL._AC_UF894,1000_QL80_.jpg"
              },
              {
                id: 16,
                title: 'Cromo Dinosaurios albañiles',
                price: 100,
                description: 'esta extinguido',
                images: "https://s2.dmcdn.net/v/DLt7f1ao-GAwoffeY/x1080"
                },
                {
                  id: 17,
                  title: 'Cromo Dinosaurio intelectual',
                  price: 100,
                  description: 'esta extinguido',
                  images: "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias-cine/gremlins-joe-dante-quiso-utilizar-monos-para-los-efectos-especiales-de-la-pelicula/58976655-1-esl-ES/Gremlins-Joe-Dante-quiso-utilizar-monos-para-los-efectos-especiales-de-la-pelicula.jpg"
                  },
                  {
                    id: 18,
                    title: 'Cromo Dinosaurio Vintage',
                    price: 100,
                    description: 'esta extinguido',
                    images: "https://depor.com/resizer/7W7Ovz6FBEC5pkmbQgFAgIqcMps=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/VZ4NNJ5ES5DHXCJKN2ATKD3K4Y.jpg"
                    },
                    {
                      id: 19,
                      title: 'Cromo Dino Gorila',
                      price: 100,
                      description: 'esta extinguido',
                      images: "https://pbs.twimg.com/ext_tw_video_thumb/1369395009255006211/pu/img/TF7KaNQKrLg7jc0K.jpg:large"
                      },
                      {
                        id: 20,
                        title: 'Cromo Dinosaurio estandar',
                        price: 100,
                        description: 'esta extinguido',
                        images: "https://i.kym-cdn.com/photos/images/original/002/578/390/f22"
                        },

                        {
                          id: 21,
                          title: 'Cromo Digimon Jurasico',
                          price: 100,
                          description: 'esta extinguido',
                          images: "https://i.pinimg.com/originals/cd/64/af/cd64af5c2e53f0236504d22a7b77b5bb.jpg"
                          },
                          {
                            id: 22,
                            title: 'Cromo Dinosauro Napoleon',
                            price: 100,
                            description: 'esta extinguido',
                            images: "https://storage.prompt-hunt.workers.dev/clev8bnqz0001ld08w2ns4tku_1"
                            },

                            {
                              id: 23,
                              title: 'Cromo Dinosauro Desmontable',
                              price: 100,
                              description: 'esta extinguido',
                              images: "https://www.toysrus.es/medias/?context=bWFzdGVyfHByb2R1Y3RfaW1hZ2VzfDI4NTM0fGltYWdlL2pwZWd8YURRNEwyZzRPQzg0T0RFek1EWTJOamd5TXprNHw3Y2Y2ZTI4MTQzOGY0MWViNzlkODdkNWZmZDZlMWZmMmUxYzBlMzg3ZTdmODUwZGVlNTVkODRiZDlhZDEzMzc3"
                              },

                              {
                                id: 24,
                                title: 'Cromo Dinosauro Volador',
                                price: 100,
                                description: 'esta extinguido',
                                images: "https://www.nationalgeographic.com.es/medio/2023/10/17/sinomacrops-bondei-zhao-chuang_bc813109_231017163526_1200x630.jpg"
                                },
                                {
                                  id: 25,
                                  title: 'Cromo Dinosauro Volador V2',
                                  price: 100,
                                  description: 'esta extinguido',
                                  images: "https://www.sorprendelima.pe/cdn/shop/files/1200_69_1445x.png?v=1684943593"
                                  },
                                  {
                                    id: 26,
                                    title: 'Cromo Dinosauria Bailarina',
                                    price: 90,
                                    description: 'esta extinguido',
                                    images: "https://www.collector4u.com/wp-content/uploads/2020/12/x_neca30626_g.jpg"
                                    },














  ]);


};
//inicializamos la funcion de carga de cromos.
CargarCromos();
module.exports = {cromosSchema,Cromo}
