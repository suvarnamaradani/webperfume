import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// Static product data with direct image URLs
const products = [
  {
    _id: "ocean-breeze",
    name: "Ocean Breeze",
    description: "A fresh and invigorating aquatic fragrance that transports you to a serene coastal paradise.",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "amber-dreams",
    name: "Amber Dreams",
    description: "A luxurious and captivating oriental fragrance that wraps you in a warm embrace of precious amber and exotic spices.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "cedar-essence",
    name: "Cedar Essence",
    description: "A sophisticated woody aromatic fragrance that embodies the strength and majesty of ancient cedar forests.",
    price: 75.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "rose-garden",
    name: "Rose Garden",
    description: "A romantic and sophisticated floral fragrance that captures the essence of a blooming rose garden at dawn.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "mystic-oud",
    name: "Mystic Oud",
    description: "An enchanting oriental fragrance that combines precious oud wood with exotic spices and sweet vanilla.",
    price: 95.99,
    image: "https://images.unsplash.com/photo-1583445095369-9c651e7c0e59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "citrus-whisper",
    name: "Citrus Whisper",
    description: "A bright and uplifting citrus fragrance that captures the essence of Mediterranean citrus groves.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "velvet-night",
    name: "Velvet Night",
    description: "A seductive and mysterious oriental floral fragrance that embodies the allure of a moonlit garden.",
    price: 85.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    _id: "eternal-bloom",
    name: "Eternal Bloom",
    description: "A timeless floral fragrance that celebrates the beauty of white flowers in full bloom.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section 
        className="hero-section" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1583445095369-9c651e7c0e59?ixlib=rb-4.0.3')`
        }}
      >
        <div className="hero-content">
          <h1 className="welcome-title">Welcome to Perfume Paradise</h1>
          <p>Discover your signature scent from our exclusive collection</p>
          <button onClick={() => navigate('/collections')} className="cta-button">
            Explore Collections
          </button>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div
              className="product-card"
              key={product._id}
              onClick={() => navigate(`/product/${product._id}`)}
              style={{ cursor: 'pointer' }}
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
          ))}
        </div>
      </section>

      <section className="shop-category">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card" onClick={() => navigate('/category/floral')}>
            <img src="https://images.unsplash.com/photo-1596073419667-9d77d59f033f?ixlib=rb-4.0.3" alt="Floral Perfumes" />
            <h3>Floral</h3>
          </div>
          <div className="category-card" onClick={() => navigate('/category/woody')}>
            <img src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?ixlib=rb-4.0.3" alt="Woody Perfumes" />
            <h3>Woody</h3>
          </div>
          <div className="category-card" onClick={() => navigate('/category/oriental')}>
            <img src="https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3" alt="Oriental Perfumes" />
            <h3>Oriental</h3>
          </div>
          <div className="category-card" onClick={() => navigate('/category/fresh')}>
            <img src="https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3" alt="Fresh Perfumes" />
            <h3>Fresh</h3>
          </div>
        </div>
      </section>
    </div>
  );
}