import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CollectionsPage.css';
import Navbar from '../components/Navbar';

// Static collections data with integrated products
const collections = [
  {
    id: "floral",
    name: "Floral Collection",
    description: "Discover our enchanting range of floral fragrances, each capturing the essence of beautiful blooms.",
    image: "https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3",
    products: [
      {
        id: "eternal-bloom",
        name: "Eternal Bloom",
        description: "A timeless floral fragrance that celebrates the beauty of white flowers in full bloom.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "rose-garden",
        name: "Rose Garden",
        description: "A romantic and sophisticated floral fragrance that captures the essence of a blooming rose garden at dawn.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "woody",
    name: "Woody Collection",
    description: "Immerse yourself in our sophisticated woody fragrances, featuring rich and deep aromas.",
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3",
    products: [
      {
        id: "mystic-oud",
        name: "Mystic Oud",
        description: "An enchanting oriental fragrance that combines precious oud wood with exotic spices and sweet vanilla.",
        price: 95.99,
        image: "https://images.unsplash.com/photo-1583445095369-9c651e7c0e59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "cedar-essence",
        name: "Cedar Essence",
        description: "A sophisticated woody aromatic fragrance that embodies the strength and majesty of ancient cedar forests.",
        price: 75.99,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "fresh",
    name: "Fresh Collection",
    description: "Experience the invigorating freshness of our citrus and aquatic fragrances.",
    image: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3",
    products: [
      {
        id: "citrus-whisper",
        name: "Citrus Whisper",
        description: "A bright and uplifting citrus fragrance that captures the essence of Mediterranean citrus groves.",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "ocean-breeze",
        name: "Ocean Breeze",
        description: "A fresh and invigorating aquatic fragrance that transports you to a serene coastal paradise.",
        price: 65.99,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    id: "oriental",
    name: "Oriental Collection",
    description: "Indulge in our exotic oriental fragrances with mysterious and sensual notes.",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3",
    products: [
      {
        id: "velvet-night",
        name: "Velvet Night",
        description: "A seductive and mysterious oriental floral fragrance that embodies the allure of a moonlit garden.",
        price: 85.99,
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "amber-dreams",
        name: "Amber Dreams",
        description: "A luxurious and captivating oriental fragrance that wraps you in a warm embrace of precious amber and exotic spices.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

const CollectionsPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <Navbar />
      <div className="collections-container">
        <h1>Our Collections</h1>
        <p className="collections-intro">
          Explore our carefully curated collections, each designed to bring out your unique personality.
          From fresh and floral to deep and mysterious, find your perfect scent.
        </p>
        
        <div className="collections-grid">
          {collections.map((collection) => (
            <div key={collection.id} className="collection-card">
              <div className="collection-header">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3';
                  }}
                />
                <div className="collection-overlay">
                  <h2>{collection.name}</h2>
                  <p>{collection.description}</p>
                </div>
              </div>
              
              <div className="collection-products">
                {collection.products.map((product) => (
                  <div 
                    key={product.id} 
                    className="product-card"
                    onClick={() => handleProductClick(product.id)}
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
                      <span className="price">${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage; 