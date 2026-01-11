import { Star, StarHalf } from "lucide-react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-amazon-star text-amazon-star" />
      );
    }
    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="w-4 h-4 fill-amazon-star text-amazon-star"
        />
      );
    }
    return stars;
  };

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return (
    <div className="bg-card p-4 rounded-sm hover:shadow-lg transition-all group cursor-pointer">
      <div className="relative aspect-square mb-3 overflow-hidden bg-white rounded">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount && (
          <span className="absolute top-2 left-2 deal-badge">
            {product.discount}% off
          </span>
        )}
      </div>

      <h3 className="text-sm text-foreground line-clamp-2 hover:text-amazon-blue cursor-pointer mb-1">
        {product.title}
      </h3>

      <div className="flex items-center gap-1 mb-1">
        <div className="flex">{renderStars(product.rating)}</div>
        <span className="text-xs text-amazon-blue">{product.reviews.toLocaleString()}</span>
      </div>

      {product.isPrime && (
        <div className="prime-badge flex items-center gap-1 mb-1">
          <span className="italic">prime</span>
        </div>
      )}

      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-xs">₹</span>
        <span className="text-xl font-medium text-foreground">
          {Math.round(discountedPrice).toLocaleString()}
        </span>
        {product.discount && (
          <>
            <span className="text-xs text-muted-foreground line-through ml-2">
              ₹{product.price.toLocaleString()}
            </span>
          </>
        )}
      </div>

      <p className="text-xs text-amazon-green font-medium mb-2">
        {product.deliveryInfo}
      </p>

      <button
        onClick={() => onAddToCart(product)}
        className="amazon-btn w-full text-center"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
