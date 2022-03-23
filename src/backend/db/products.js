import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // men's tshirt
  {
    _id: uuid(),
    marker: "Essentials",

    image: {
      src: "https://live.staticflickr.com/65535/51956317341_fbd4785483_z.jpg",
      alt: "regular fit tshirt",
    },

    name: "Regular Fit T-shirt",
    categoryName: "men",
    productType: "t-shirt",
    price: 399.0,
    size: "M",
    color: "wax flower",
    rating: 4,
    addedToCart: false,
    addedToWishlist: false,
  },

  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956317296_38153e7b65_z.jpg",
      alt: "oversize tshirt",
    },

    name: "Oversize T-shirt",
    categoryName: "men",
    productType: "t-shirt",
    price: 799.0,
    size: "M",
    color: "violet",
    rating: 4.2,
    addedToCart: false,
    addedToWishlist: false,
  },

  {
    _id: uuid(),
    marker: "Essentials",

    image: {
      src: "https://live.staticflickr.com/65535/51955325067_b5ff7b481b_z.jpg",
      alt: "printed tshirt",
    },

    name: "Printed T-shirt",
    categoryName: "men",
    productType: "t-shirt",
    price: 699.0,
    size: "M",
    color: "Black",
    rating: 3.5,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Essentials",

    image: {
      src: "https://live.staticflickr.com/65535/51956317261_cbd0088b84_z.jpg",
      alt: "printed-2 tshirt",
    },

    name: "Printed T-shirt",
    productType: "t-shirt",
    categoryName: "men",
    price: 799.0,
    size: "M",
    color: "white",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },

  // men's shirt
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956612639_1c77fe7901_z.jpg",
      alt: "regular fit shirt",
    },

    name: "Regular Fit Resort shirt",
    categoryName: "men",
    productType: "shirt",
    price: 799.0,
    size: "M",
    color: "torqouise/striped",
    rating: 4.6,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956317211_29243e96c7_z.jpg",
      alt: "regular fit shirt",
    },

    name: "Regular Fit Resort shirt",
    productType: "shirt",
    categoryName: "men",
    price: 799.0,
    size: "M",
    color: "brown/striped",
    rating: 4.8,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956379163_1a0f9fc32e_z.jpg",
      alt: "patterned shirt",
    },

    name: "Patterned shirt",
    productType: "shirt",
    categoryName: "men",
    price: 1499.0,
    size: "M",
    color: "pruple/patterned",
    rating: 3.2,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956317151_b4d7a16752_z.jpg",
      alt: "patterned shirt",
    },

    name: "Patterned Resort shirt",
    categoryName: "men",
    productType: "shirt",
    price: 1299.0,
    size: "M",
    color: "black/Rick and morty",
    rating: 2,
    addedToCart: false,
    addedToWishlist: false,
  },

  // men's hoodies
  {
    _id: uuid(),
    marker: "essentials",

    image: {
      src: "https://live.staticflickr.com/65535/51956867270_087ff3b29c_z.jpg",
      alt: "Relaxed Fit hoodie",
    },

    name: "Relaxed Fit Hoodie",
    categoryName: "men",
    productType: "hoodie",
    price: 1499.0,
    size: "M",
    color: "black",
    rating: 1,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956576059_e2bcd6e133_z.jpg",
      alt: "Relaxed Fit Printed hoodie",
    },

    name: "Relaxed Fit Printed Hoodie",
    categoryName: "men",
    productType: "hoodie",
    price: 2699.0,
    size: "M",
    color: "light blue",
    rating: 2.5,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956576039_da5c92cf38_z.jpg",
      alt: "regular fit hoodie",
    },

    name: "Relaxed Fit Tie-Dye Hoodie",
    categoryName: "men",
    productType: "hoodie",
    price: 2299.0,
    size: "M",
    color: "light yellow",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956280076_4189f51175_z.jpg",
      alt: "Relaxed Fit Hoodie",
    },

    name: "Relaxed Fit Hoodie",
    categoryName: "men",
    productType: "hoodie",
    price: 2299.0,
    size: "M",
    color: "navy blue",
    rating: 4,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956342618_9c1ff2c8af_z.jpg",
      alt: "Relaxed Fit Hoodie",
    },

    name: "Relaxed Fit Hoodie",
    categoryName: "men",
    productType: "hoodie",
    price: 1999.0,
    size: "M",
    color: "cream",
    rating: 3.7,
    addedToCart: false,
    addedToWishlist: false,
  },

  // women

  // women's dresses
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956379448_9b02ff4f38_z.jpg",
      alt: "tshirt dress",
    },

    name: "T-shirt dress",
    categoryName: "women",
    productType: "dress",
    price: 799.0,
    size: "M",
    color: "peach",
    rating: 4,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325277_5461721098_z.jpg",
      alt: "Floral puff-sleeved dress",
    },

    name: "Floral puff-sleeved dress",
    categoryName: "women",
    productType: "dress",
    price: 2299.0,
    size: "M",
    color: "dark grey/floral",
    rating: 2.9,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51956379433_f73bf759c8_z.jpg",
      alt: "V-neck dress",
    },

    name: "V-neck dress",
    categoryName: "women",
    productType: "dress",
    price: 1999.0,
    size: "M",
    color: "light beige/floral",
    rating: 4.2,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "",

    image: {
      src: "https://live.staticflickr.com/65535/51955325252_ee73ed3444_z.jpg",
      alt: "wide dress",
    },

    name: "Wide dress",
    categoryName: "women",
    productType: "dress",
    price: 1499.0,
    size: "M",
    color: "torquoise/floral",
    rating: 1.2,
    addedToCart: false,
    addedToWishlist: false,
  },

  // sweatshirt
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956612954_3de7a8bacf_z.jpg",
      alt: "sweatshirt",
    },

    name: "Sweatshirt",
    categoryName: "women",
    productType: "sweatshirt",
    price: 799.0,
    size: "M",
    color: "dark brown",
    rating: 3.6,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956904250_5cf219b28e_z.jpg",
      alt: "sweatshirt",
    },

    name: "Zip-through sweatshirt",
    categoryName: "women",
    productType: "sweatshirt",
    price: 1499.0,
    size: "M",
    color: "black",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325377_a6e8c1c101_z.jpg",
      alt: "printed sweatshirt",
    },

    name: "Printed sweatshirt",
    categoryName: "women",
    productType: "sweatshirt",
    price: 1999.0,
    size: "M",
    color: "light grey marl/nfl",
    rating: 3.8,
    addedToCart: false,
    addedToWishlist: false,
  },

  // women tops
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325602_eca310e943_z.jpg",
      alt: "ribbed top",
    },

    name: "Ribbed top",
    categoryName: "women",
    productType: "top",
    price: 1299.0,
    size: "M",
    color: "pink",
    rating: 4.6,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51956379698_5609091562_z.jpg",
      alt: "ribbed top",
    },

    name: "Ribbed top",
    categoryName: "women",
    productType: "top",
    price: 1299.0,
    size: "M",
    color: "orange",
    rating: 3.2,
    addedToCart: false,
    addedToWishlist: false,
  },
  {
    _id: uuid(),
    marker: "Conscious choice",

    image: {
      src: "https://live.staticflickr.com/65535/51955325557_e7065a565f_z.jpg",
      alt: "cotton t-shirt",
    },

    name: "Cotton T-shirt",
    categoryName: "women",
    productType: "top",
    price: 399.0,
    size: "M",
    color: "light pink",
    rating: 4.6,
    addedToCart: false,
    addedToWishlist: false,
  },
];
