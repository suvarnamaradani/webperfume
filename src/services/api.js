// Mock API functions that return static data
export const getProducts = async () => {
  return [
    {
      _id: "1",
      name: "Eternal Bloom",
      description: "Floral and fresh, perfect for everyday wear.",
      price: 49.99,
      image: "/images/perfume1.jpg"
    },
    {
      _id: "2",
      name: "Mystic Oud",
      description: "A rich and woody fragrance with deep undertones.",
      price: 79.99,
      image: "/images/perfume2.jpg"
    },
    {
      _id: "3",
      name: "Citrus Whisper",
      description: "Zesty and light, ideal for summer days.",
      price: 39.99,
      image: "/images/perfume3.jpg"
    },
    {
      _id: "4",
      name: "Velvet Night",
      description: "Smooth and sensual, for your evening outings.",
      price: 59.99,
      image: "/images/perfume4.jpg"
    }
  ];
};

export const getCollections = async () => {
  return [
    {
      _id: "1",
      name: "Floral Collection",
      description: "A collection of floral fragrances",
      products: [/* product ids */]
    },
    {
      _id: "2",
      name: "Woody Collection",
      description: "A collection of woody fragrances",
      products: [/* product ids */]
    }
  ];
};

export const submitContactForm = async (formData) => {
  // Mock successful submission
  return { message: "Message sent successfully" };
}; 