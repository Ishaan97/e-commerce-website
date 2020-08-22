const SHOP_DATA = {
  groceries: {
      id: 1,
      title: 'Groceries',
      routeName: 'groceries',
      items: [
        {
          id: 1,
          name: 'Bananas',
          imageUrl: 'https://cdn1.sph.harvard.edu/wp-content/uploads/sites/30/2018/08/bananas-1354785_1920-1200x800.jpg',
          price: 50
        },
        {
          id: 2,
          name: 'Apples',
          imageUrl: "https://economictimes.indiatimes.com/thumb/msid-70362418,width-1200,height-900,resizemode-4,imgsize-971552/apples_getty-images.jpg",
          price: 18
        },
        {
          id: 3,
          name: 'Turtle Bread',
          imageUrl: 'https://images-gmi-pmc.edge-generalmills.com/da2abda1-fae1-4782-b65f-93868ca5bd40.jpg',
          price: 35
        },
        {
          id: 4,
          name: 'Subway',
          imageUrl: 'https://sugargeekshow.com/wp-content/uploads/2020/03/fast-bread-recipe-fb.jpg',
          price: 25
        },
        {
          id: 5,
          name: 'Sweet Corn',
          imageUrl: 'https://i2.wp.com/vegecravings.com/wp-content/uploads/2018/10/Masala-Corn-Recipe-Step-By-Step-Instructions-8.jpg',
          price: 18
        },
        {
          id: 6,
          name: 'Baby Corn',
          imageUrl: 'https://rukminim1.flixcart.com/image/352/352/jl16s280/plant-seed/c/z/f/200-baby-corn-seed-pack-of-50-seed-x-4-per-pkts-4-packet-of-baby-original-imaf887pdun9nay4.jpeg',
          price: 14
        },
        {
          id: 7,
          name: 'Mushrooms',
          imageUrl: 'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/278/278858/mushrooms-in-a-bowel-on-a-dark-table.jpg',
          price: 18
        },
        {
          id: 8,
          name: 'Onions',
          imageUrl: 'https://st1.thehealthsite.com/wp-content/uploads/2014/09/onions-e1421989411676.jpg',
          price: 14
        },
        {
          id: 9,
          name: 'Potatoes',
          imageUrl: 'https://mynorthwest.com/wp-content/uploads/2020/04/potatoes-620-unsplash.jpg',
          price: 16
        }
      ]
    },
    mobiles : {
      id: 2,
      title: 'Mobiles',
      routeName: 'mobiles',
      items: [
        {
          id: 10,
          name: 'Nokia',
          imageUrl: 'https://drop.ndtv.com/TECH/product_database/images/530201344201PM_635_nokia_asha_501.png',
          price: 220
        },
        {
          id: 11,
          name: 'Samsung',
          imageUrl: 'https://www.mobileshopsilchar.com/wp-content/uploads/2018/09/Guru-music-2-black.png',
          price: 280
        },
        {
          id: 12,
          name: 'Motorola',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Motorola_RAZR_V3i_01.JPG',
          price: 110
        },
        {
          id: 13,
          name: 'BlackBerry',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81Ux-qSWfEL._AC_SL1500_.jpg',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Apple',
          imageUrl: 'https://i.ytimg.com/vi/L21NWdDY5KE/maxresdefault.jpg',
          price: 160
        },
        {
          id: 16,
          name: 'Sony Ericsson',
          imageUrl: 'https://www.webdesignerdepot.com/cdn-origin/uploads/cellphone_design/dkmb86g_463g783d4cf_b.jpg',
          price: 190
        },
        {
          id: 17,
          name: 'LG',
          imageUrl: 'https://icdn9.digitaltrends.com/image/lg-b470-3g-flip-phone-500x500.jpg',
          price: 200
        }
      ]
    },
    clothes: {
      id: 3,
      title: 'Clothes',
      routeName: 'clothes',
      items: [
        {
          id: 18,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 125
        },
        {
          id: 19,
          name: 'Blue Jean Jacket',
          imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
          price: 90
        },
        {
          id: 20,
          name: 'Grey Jean Jacket',
          imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
          price: 90
        },
        {
          id: 21,
          name: 'Camo Down Vest',
          imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
          price: 165
        },
        {
          id: 22,
          name: 'Black & White Longsleeve',
          imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
          price: 185
        }
      ]
    },
    books:  {
      id: 4,
      title: 'Books',
      routeName: 'books',
      items: [
        {
          id: 23,
          name: 'Children Books',
          imageUrl: 'https://cdn.images.express.co.uk/img/dynamic/39/590x/Best-children-s-books-for-kids-1271831.jpg',
          price: 25
        },
        {
          id: 24,
          name: 'Fiction Books',
          imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-060520-summer-fiction-books-1591381368.png',
          price: 20
        },
        {
          id: 25,
          name: 'Non-Fiction Books',
          imageUrl: 'https://assets.readitforward.com/wp-content/uploads/2018/10/RIF-Holiday-NonFiction-830x625.jpg',
          price: 80
        },
        {
          id: 26,
          name: 'Classics',
          imageUrl: 'https://cdn.accentuate.io/51528957999/4528701440047/Classics-Final.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Magazines',
          imageUrl: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/4/1409844261423/IPC-magazines-014.jpg',
          price: 45
        },
        {
          id: 28,
          name: 'Comics',
          imageUrl: 'https://img.jakpost.net/c/2019/04/23/2019_04_23_70602_1555992546._large.jpg',
          price: 135
        },
        {
          id: 29,
          name: 'Encyclopedia',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Encyclopaedia_Britannica_15_with_2002.jpg',
          price: 20
        }
      ]
    },
    furniture:  {
      id: 5,
      title: 'Furniture',
      routeName: 'furniture',
      items: [
        {
          id: 30,
          name: 'Study Table',
          imageUrl: 'https://www.hometown.in/media/product/31/9353/34934/1.jpg',
          price: 325
        },
        {
          id: 31,
          name: 'King Sized Bed',
          imageUrl: 'https://images.demandware.net/dw/image/v2/BBBV_PRD/on/demandware.static/-/Sites-master-catalog/default/dwe945943c/images/1180000/1180224.jpg',
          price: 20
        },
        {
          id: 32,
          name: 'Sofa Set',
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/813ZLCapA5L._SX425_.jpg',
          price: 25
        },
        {
          id: 33,
          name: 'Dining Table',
          imageUrl: 'https://www.ulcdn.net/images/products/13843/product/Arabia_Capra_Bench_Teak_00_IMG_0274.jpg',
          price: 25
        },
        {
          id: 34,
          name: 'Side Table',
          imageUrl: 'https://cb2.scene7.com/is/image/CB2/SpinRotatingSideTableSHS18_16x9',
          price: 40
        },
        {
          id: 35,
          name: 'Chairs',
          imageUrl: 'https://www.mrphome.com/media/wysiwyg/mrp_home/2020/wk-2/shop-occasional-chairs.jpg',
          price: 25
        }
      ]
    }
}

  export default SHOP_DATA;