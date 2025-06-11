import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './CategoryPage.css';
import Navbar from "../components/Navbar";

// Import product data from ProductPage
const productData = {
  floral: {
    title: "Floral Collection",
    description: "Discover our enchanting range of floral fragrances",
    image: "https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3",
    products: ["1", "5"] // IDs of floral products
  },
  woody: {
    title: "Woody Collection",
    description: "Immerse yourself in our sophisticated woody fragrances",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3",
    products: ["2", "6"] // IDs of woody products
  },
  fresh: {
    title: "Fresh Collection",
    description: "Experience the invigorating freshness of our citrus and aquatic fragrances",
    image: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3",
    products: ["3", "7"] // IDs of fresh products
  },
  oriental: {
    title: "Oriental Collection",
    description: "Indulge in our exotic oriental fragrances",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3",
    products: ["4", "8"] // IDs of oriental products
  }
};

// Product data mapping (you can import this from your ProductPage.jsx)
const products = {
  "1": {
    id: "1",
    name: "Eternal Bloom",
    description: "Floral and fresh, perfect for everyday wear.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3"
  },
  "2": {
    id: "2",
    name: "Mystic Oud",
    description: "A rich and woody fragrance with deep undertones.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3"
  },
  "3": {
    id: "3",
    name: "Citrus Whisper",
    description: "Zesty and light, ideal for summer days.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3"
  },
  "4": {
    id: "4",
    name: "Velvet Night",
    description: "Smooth and sensual, for your evening outings.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3"
  },
  "5": {
    id: "5",
    name: "Rose Garden",
    description: "A romantic blend of fresh roses and jasmine.",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1557827983-012eb6ea8dc5?ixlib=rb-4.0.3"
  },
  "6": {
    id: "6",
    name: "Cedar Essence",
    description: "A sophisticated blend of cedar and sandalwood.",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6f?ixlib=rb-4.0.3"
  },
  "7": {
    id: "7",
    name: "Ocean Breeze",
    description: "A refreshing aquatic scent with hints of sea salt.",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?ixlib=rb-4.0.3"
  },
  "8": {
    id: "8",
    name: "Amber Dreams",
    description: "A warm and spicy blend with vanilla and amber.",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3"
  }
};

const CategoryPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const categoryData = productData[category];
  
  if (!categoryData) {
    return <div className="error">Category not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="category-page">
        <div className="category-hero" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${categoryData.image}')`
        }}>
          <h1>{categoryData.title}</h1>
          <p>{categoryData.description}</p>
        </div>

        <div className="category-products">
          <div className="products-grid">
            {categoryData.products.map(productId => {
              const product = products[productId];
              return (
                <div 
                  key={product.id} 
                  className="product-card"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="product-image">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3';
                      }}
                    />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <span className="price">${product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage; 