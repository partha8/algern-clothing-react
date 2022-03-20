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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/tshirts/orange.jpeg?token=GHSAT0AAAAAABQCBSCCBC53B5SSHTHERBZQYR3ANWA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/tshirts/oversize.jpeg?token=GHSAT0AAAAAABQCBSCD2JCYVBZF2QHGQAY2YR3AOTA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/tshirts/printed-1.jpeg?token=GHSAT0AAAAAABQCBSCDR3GD7FJUBA3TINJIYR3AO5Q",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/tshirts/printed-2.jpeg?token=GHSAT0AAAAAABQCBSCDUJDQWWYKJSVOKPXQYR3APIA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/shirts/shirt-1.jpeg?token=GHSAT0AAAAAABQCBSCDJT7MK5DZSVYZZJGAYR3APSA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/shirts/shirt-2.jpeg?token=GHSAT0AAAAAABQCBSCDXZQWNP5VVALJC4YEYR3AP2Q",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/shirts/shirt-3.jpeg?token=GHSAT0AAAAAABQCBSCC3O5EDP74MCRV5IWKYR3AQFQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/shirts/shirt-4.jpeg?token=GHSAT0AAAAAABQCBSCCNOHIZSJ6XYD45YM2YR3AQNQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/hoodies/hoodie-1.jpeg?token=GHSAT0AAAAAABQCBSCC3ZXLRAMMUHKP3C6CYR3AQYA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/hoodies/hoodie-2.jpeg?token=GHSAT0AAAAAABQCBSCCN4JTT4C2LY6M55XQYR3ARAQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/hoodies/hoodie-3.jpeg?token=GHSAT0AAAAAABQCBSCCMFKG7Q3NJQCUZVB6YR3ARIQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/hoodies/hoodie-4.jpeg?token=GHSAT0AAAAAABQCBSCCKR6JQTMGHE3DXAPGYR3ARRA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/men/hoodies/hoodie-5.jpeg?token=GHSAT0AAAAAABQCBSCCBCNSSV6PSPQGPW4WYR3ARYQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/dresses/dress-1.jpeg?token=GHSAT0AAAAAABQCBSCC7HBJ4NI7YQEYUDBEYR3B67A",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/dresses/dress-2.jpeg?token=GHSAT0AAAAAABQCBSCCQZ5TPD3BIHOGUBTIYR3B7MA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/dresses/dress-3.jpeg?token=GHSAT0AAAAAABQCBSCCMVXN23UBGJ45SQL2YR3CDDA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/dresses/dress-4.jpeg?token=GHSAT0AAAAAABQCBSCCEVDRBVFHPHV3IEVMYR3CEIA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/hoodies/hoodie-1.jpeg?token=GHSAT0AAAAAABQCBSCCXL5NJI2GSJE5YHI6YR3CHQQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/hoodies/hoodie-2.jpeg?token=GHSAT0AAAAAABQCBSCDBXTWBDJYYT6WUHJSYR3CKKA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/hoodies/hoodie-4.jpeg?token=GHSAT0AAAAAABQCBSCCGDVWELYJMZ447NYMYR3CM4A",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/tops/top-1.jpeg?token=GHSAT0AAAAAABQCBSCCMSVPYG3MDT7YYVQIYR3CVTA",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/tops/top-3.jpeg?token=GHSAT0AAAAAABQCBSCD36AOCGT56XIX3Y4GYR3CXLQ",
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
      src: "https://raw.githubusercontent.com/partha8/ecommerce-photos/main/women/tops/top-4.jpeg?token=GHSAT0AAAAAABQCBSCCIVH74WJ6KVJCTQZWYR3CX2Q",
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
