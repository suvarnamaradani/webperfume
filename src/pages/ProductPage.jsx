import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductPage.css'; // Import the CSS file for styling
import Navbar from "../components/Navbar";

// Static product data
const productData = {
  "1": {
    id: "1",
    name: "Eternal Bloom",
    description: "Floral and fresh, perfect for everyday wear.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3",
    availableSizes: ['30ml', '50ml', '100ml'],
    reviews: [
      { rating: 5, text: 'Absolutely love this fresh floral scent!', date: new Date() },
      { rating: 4, text: 'Perfect for daily wear, very pleasant fragrance.', date: new Date() }
    ]
  },
  "2": {
    id: "2",
    name: "Mystic Oud",
    description: "A rich and woody fragrance with deep undertones.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3",
    availableSizes: ['50ml', '100ml'],
    reviews: [
      { rating: 5, text: 'Sophisticated and long-lasting scent.', date: new Date() },
      { rating: 5, text: 'The woody undertones are amazing!', date: new Date() }
    ]
  },
  "3": {
    id: "3",
    name: "Citrus Whisper",
    description: "Zesty and light, ideal for summer days.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3",
    availableSizes: ['30ml', '50ml', '100ml'],
    reviews: [
      { rating: 4, text: 'Perfect summer fragrance!', date: new Date() },
      { rating: 5, text: 'Light and refreshing, exactly what I wanted.', date: new Date() }
    ]
  },
  "4": {
    id: "4",
    name: "Velvet Night",
    description: "Smooth and sensual, for your evening outings.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3",
    availableSizes: ['50ml', '100ml'],
    reviews: [
      { rating: 5, text: 'Perfect evening perfume, very elegant.', date: new Date() },
      { rating: 4, text: 'Rich and sophisticated scent.', date: new Date() }
    ]
  },
  "ocean-breeze": {
    id: "ocean-breeze",
    name: "Ocean Breeze",
    description: "A fresh and invigorating aquatic fragrance that transports you to a serene coastal paradise. This modern unisex scent perfectly balances marine freshness with warm undertones, making it ideal for spring and summer days. The unique blend of sea salt and citrus creates an energizing aura that lasts throughout the day.",
    price: 65.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableSizes: [
      { size: '30ml', price: 65.99, stock: true },
      { size: '50ml', price: 89.99, stock: true },
      { size: '100ml', price: 129.99, stock: true }
    ],
    fragranceNotes: {
      top: "Mediterranean Sea Salt, Calabrian Bergamot, Fresh Lemon Zest, Ocean Mist",
      heart: "Marine Accord, Blue Water Lily, Fresh Jasmine, Coastal Sage",
      base: "White Musk, Sun-bleached Driftwood, Warm Amber, Sea Moss"
    },
    longevity: "6-8 hours",
    sillage: "Moderate",
    seasonality: "Perfect for Spring/Summer",
    occasion: "Daytime, Office, Casual Outings",
    reviews: [
      { rating: 5, text: "Perfect summer scent! The sea salt note is incredibly realistic.", date: new Date() },
      { rating: 4, text: "Fresh and long-lasting. Great for hot days.", date: new Date() },
      { rating: 5, text: "My go-to beach fragrance. Gets lots of compliments!", date: new Date() }
    ]
  },
  "amber-dreams": {
    id: "amber-dreams",
    name: "Amber Dreams",
    description: "A luxurious and captivating oriental fragrance that wraps you in a warm embrace of precious amber and exotic spices. This opulent evening scent combines rich vanilla with rare resins, creating an unforgettable signature fragrance that evolves beautifully on the skin.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableSizes: [
      { size: '50ml', price: 89.99, stock: true },
      { size: '100ml', price: 149.99, stock: true }
    ],
    fragranceNotes: {
      top: "Sicilian Bergamot, Madagascar Pink Pepper, Persian Saffron, Cardamom",
      heart: "Turkish Rose, Golden Amber, Benzoin Resin, Moroccan Jasmine",
      base: "Madagascar Vanilla, Indonesian Patchouli, Labdanum, Tonka Bean"
    },
    longevity: "8-10 hours",
    sillage: "Strong",
    seasonality: "Ideal for Fall/Winter",
    occasion: "Evening Wear, Special Occasions, Formal Events",
    reviews: [
      { rating: 5, text: "The most sophisticated amber fragrance I've ever worn. Worth every penny!", date: new Date() },
      { rating: 5, text: "Incredible longevity and projection. A true masterpiece.", date: new Date() },
      { rating: 4, text: "Rich and complex. Perfect for cold winter nights.", date: new Date() }
    ]
  },
  "cedar-essence": {
    id: "cedar-essence",
    name: "Cedar Essence",
    description: "A sophisticated woody aromatic fragrance that embodies the strength and majesty of ancient cedar forests. This refined scent combines premium cedar wood with aromatic herbs and warm spices, creating a distinguished masculine presence that commands attention while maintaining elegance.",
    price: 75.99,
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableSizes: [
      { size: '50ml', price: 75.99, stock: true },
      { size: '100ml', price: 125.99, stock: true }
    ],
    fragranceNotes: {
      top: "Green Cardamom, Italian Bergamot, Alpine Pine Needles, Juniper Berries",
      heart: "Atlas Cedar, Mediterranean Cypress, Haitian Vetiver, Fresh Sage",
      base: "Australian Sandalwood, Amber Resin, White Musk, Virginia Cedar"
    },
    longevity: "7-9 hours",
    sillage: "Moderate to Strong",
    seasonality: "Great for All Seasons",
    occasion: "Business Meetings, Evening Wear, Daily Use",
    reviews: [
      { rating: 5, text: "The perfect woody scent. Very sophisticated and long-lasting.", date: new Date() },
      { rating: 4, text: "Great office fragrance. Professional and refined.", date: new Date() },
      { rating: 5, text: "The cedar note is outstanding. Gets better with each wear.", date: new Date() }
    ]
  },
  "rose-garden": {
    id: "rose-garden",
    name: "Rose Garden",
    description: "A romantic and sophisticated floral fragrance that captures the essence of a blooming rose garden at dawn. This modern interpretation of the classic rose combines different varieties of roses with fresh green notes and subtle woody undertones, creating a timeless feminine fragrance that evolves throughout the day.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    availableSizes: [
      { size: '30ml', price: 79.99, stock: true },
      { size: '50ml', price: 119.99, stock: true },
      { size: '100ml', price: 169.99, stock: true }
    ],
    fragranceNotes: {
      top: "Morning Dew, Bulgarian Rose Petals, Green Notes, Pink Peppercorn",
      heart: "Damascus Rose, Turkish Rose, French Peony, Lily of the Valley",
      base: "White Musk, Madagascar Vanilla, Moroccan Cedar, Ambrette Seeds"
    },
    longevity: "6-8 hours",
    sillage: "Moderate",
    seasonality: "Best in Spring/Summer",
    occasion: "Daily Wear, Romance, Special Occasions",
    reviews: [
      { rating: 5, text: "The most beautiful and realistic rose fragrance. Pure elegance!", date: new Date() },
      { rating: 5, text: "Fresh and romantic. Perfect for spring weddings.", date: new Date() },
      { rating: 4, text: "Sophisticated rose scent with great staying power.", date: new Date() }
    ]
  },
  "mystic-oud": {
    id: "mystic-oud",
    name: "Mystic Oud",
    description: "An enchanting oriental fragrance that combines precious oud wood with exotic spices and sweet vanilla. This mysterious and luxurious scent creates an aura of sophistication and allure, perfect for those who appreciate deep, complex fragrances.",
    price: 95.99,
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3",
    availableSizes: [
      { size: '50ml', price: 95.99, stock: true },
      { size: '100ml', price: 159.99, stock: true }
    ],
    fragranceNotes: {
      top: "Saffron, Black Pepper, Egyptian Bergamot",
      heart: "Indian Oud, Turkish Rose, Royal Frankincense",
      base: "Mysore Sandalwood, Madagascar Vanilla, Amber Resin"
    },
    longevity: "10-12 hours",
    sillage: "Strong",
    seasonality: "Best in Fall/Winter",
    occasion: "Evening Events, Formal Occasions, Special Moments",
    reviews: [
      { rating: 5, text: "A masterpiece of oud perfumery. Deep, complex, and mesmerizing.", date: new Date() },
      { rating: 5, text: "Incredible longevity and projection. A true luxury fragrance.", date: new Date() },
      { rating: 4, text: "Rich and sophisticated. Perfect for special occasions.", date: new Date() }
    ]
  },
  "citrus-whisper": {
    id: "citrus-whisper",
    name: "Citrus Whisper",
    description: "A bright and uplifting citrus fragrance that captures the essence of Mediterranean citrus groves. This energizing blend combines zesty citrus notes with aromatic herbs and a light musky base, creating a refreshing and invigorating experience.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3",
    availableSizes: [
      { size: '30ml', price: 59.99, stock: true },
      { size: '50ml', price: 89.99, stock: true },
      { size: '100ml', price: 129.99, stock: true }
    ],
    fragranceNotes: {
      top: "Sicilian Lemon, Italian Bergamot, California Orange, Lime Zest",
      heart: "Lemongrass, Verbena, Mediterranean Herbs, Ginger",
      base: "White Musk, Light Woods, Fresh Vetiver"
    },
    longevity: "4-6 hours",
    sillage: "Moderate",
    seasonality: "Perfect for Spring/Summer",
    occasion: "Daytime, Office, Casual Outings, Sports",
    reviews: [
      { rating: 5, text: "The most refreshing citrus scent I've ever worn!", date: new Date() },
      { rating: 4, text: "Perfect for hot summer days. Very energizing.", date: new Date() },
      { rating: 5, text: "Clean, fresh, and natural. Love it for daily wear.", date: new Date() }
    ]
  },
  "velvet-night": {
    id: "velvet-night",
    name: "Velvet Night",
    description: "A seductive and mysterious oriental floral fragrance that embodies the allure of a moonlit garden. This enchanting blend of night-blooming flowers, rich spices, and warm vanilla creates an unforgettable evening scent.",
    price: 85.99,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?ixlib=rb-4.0.3",
    availableSizes: [
      { size: '50ml', price: 85.99, stock: true },
      { size: '100ml', price: 145.99, stock: true }
    ],
    fragranceNotes: {
      top: "Black Pepper, Star Anise, Purple Plum",
      heart: "Night Jasmine, Tuberose, Dark Rose",
      base: "Black Vanilla, Tonka Bean, Patchouli, Amber"
    },
    longevity: "8-10 hours",
    sillage: "Strong",
    seasonality: "Ideal for Evening/Night",
    occasion: "Evening Events, Romantic Dates, Night Out",
    reviews: [
      { rating: 5, text: "Absolutely mesmerizing! Perfect evening fragrance.", date: new Date() },
      { rating: 5, text: "Sophisticated and sexy. Gets so many compliments.", date: new Date() },
      { rating: 4, text: "Beautiful night-time scent. Very alluring.", date: new Date() }
    ]
  },
  "eternal-bloom": {
    id: "eternal-bloom",
    name: "Eternal Bloom",
    description: "A timeless floral fragrance that celebrates the beauty of white flowers in full bloom. This elegant composition combines precious jasmine, lily of the valley, and white rose to create a pure and sophisticated scent that embodies grace and femininity.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3",
    availableSizes: [
      { size: '30ml', price: 79.99, stock: true },
      { size: '50ml', price: 119.99, stock: true },
      { size: '100ml', price: 169.99, stock: true }
    ],
    fragranceNotes: {
      top: "White Peach, Dewy Green Notes, Italian Mandarin",
      heart: "Jasmine Sambac, Lily of the Valley, White Rose, Magnolia",
      base: "White Musk, Creamy Sandalwood, Clean Amber"
    },
    longevity: "6-8 hours",
    sillage: "Moderate to Strong",
    seasonality: "Perfect for Spring/Summer",
    occasion: "Weddings, Daytime Events, Office, Daily Wear",
    reviews: [
      { rating: 5, text: "The most beautiful white floral I've ever experienced!", date: new Date() },
      { rating: 5, text: "Elegant and timeless. Perfect for my wedding day.", date: new Date() },
      { rating: 4, text: "Clean, sophisticated, and very feminine.", date: new Date() }
    ]
  }
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [newReview, setNewReview] = useState({ rating: 5, text: '' });

  useEffect(() => {
    // Find the product based on URL parameter
    const foundProduct = productData[id];
    if (foundProduct) {
      setProduct(foundProduct);
      // Reset selected size when product changes
      setSelectedSize('');
    } else {
      // If product not found, redirect to home
      navigate('/');
    }
  }, [id, navigate]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (product) {
      const updatedProduct = {
        ...product,
        reviews: [
          ...product.reviews,
          { ...newReview, date: new Date() }
        ]
      };
      setProduct(updatedProduct);
      setNewReview({ rating: 5, text: '' });
    }
  };

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="product-page">
        <div className="product-container">
          {/* Hero Section: Image and Product Info */}
          <div className="product-hero">
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
            <div className="product-info">
              <h1>{product.name}</h1>
              <p className="description">{product.description}</p>
              <div className="price-container">
                <h2 className="price">${product.price}</h2>
              </div>

              {product.fragranceNotes && (
                <div className="fragrance-notes">
                  <h3>Fragrance Notes</h3>
                  <div className="notes-container">
                    <div className="note-section">
                      <h4>Top Notes</h4>
                      <p>{product.fragranceNotes.top}</p>
                    </div>
                    <div className="note-section">
                      <h4>Heart Notes</h4>
                      <p>{product.fragranceNotes.heart}</p>
                    </div>
                    <div className="note-section">
                      <h4>Base Notes</h4>
                      <p>{product.fragranceNotes.base}</p>
                    </div>
                  </div>
                </div>
              )}

              {(product.longevity || product.sillage || product.seasonality || product.occasion) && (
                <div className="duration-info">
                  {product.longevity && (
                    <div className="longevity">
                      <h4>Longevity</h4>
                      <p>{product.longevity}</p>
                    </div>
                  )}
                  {product.sillage && (
                    <div className="sillage">
                      <h4>Sillage</h4>
                      <p>{product.sillage}</p>
                    </div>
                  )}
                  {product.seasonality && (
                    <div className="seasonality">
                      <h4>Best For</h4>
                      <p>{product.seasonality}</p>
                    </div>
                  )}
                  {product.occasion && (
                    <div className="occasion">
                      <h4>Perfect For</h4>
                      <p>{product.occasion}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="size-selection">
                <h3>Available Sizes:</h3>
                <ul>
                  {product.availableSizes.map((sizeOption) => (
                    <li
                      key={sizeOption.size}
                      className={selectedSize === sizeOption.size ? 'selected' : ''}
                      onClick={() => setSelectedSize(sizeOption.size)}
                    >
                      <span className="size">{sizeOption.size}</span>
                      <span className="size-price">${sizeOption.price}</span>
                      {!sizeOption.stock && <span className="out-of-stock">Out of Stock</span>}
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                className="add-to-cart-btn"
                disabled={!selectedSize}
              >
                {selectedSize ? 'Add to Cart' : 'Select a Size'}
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="reviews-section">
            <h3>Customer Reviews</h3>
            <div className="reviews">
              {product.reviews.map((review, index) => (
                <div key={index} className="review-item">
                  <div className="rating">
                    {"★".repeat(review.rating)}{"☆".repeat(5-review.rating)}
                  </div>
                  <p>{review.text}</p>
                  <small>{new Date(review.date).toLocaleDateString()}</small>
                </div>
              ))}
            </div>

            <div className="add-review">
              <h4>Add a Review</h4>
              <form onSubmit={handleReviewSubmit}>
                <div className="form-group">
                  <label>Rating:</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                  >
                    {[5,4,3,2,1].map(num => (
                      <option key={num} value={num}>{num} Stars</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label>Review:</label>
                  <textarea
                    value={newReview.text}
                    onChange={(e) => setNewReview({...newReview, text: e.target.value})}
                    required
                    rows="4"
                  />
                </div>
                <button type="submit" className="submit-review-btn">Submit Review</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
