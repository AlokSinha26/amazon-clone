import { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import DealCard from "@/components/DealCard";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import { products, categoryCards, deals } from "@/data/products";
import { Product, CartItem } from "@/types/product";
import { toast } from "sonner";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    toast.success(`${product.title.slice(0, 30)}... added to cart`);
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart");
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Overlapping Category Cards */}
      <div className="container mx-auto px-4 -mt-40 md:-mt-60 lg:-mt-80 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categoryCards.slice(0, 4).map((card, index) => (
            <CategoryCard key={index} {...card} />
          ))}
        </div>

        {/* Second Row of Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categoryCards.slice(4, 8).map((card, index) => (
            <CategoryCard key={index} {...card} />
          ))}
        </div>
      </div>

      {/* Today's Deals */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-card p-5 rounded-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Today's Deals</h2>
            <a className="amazon-link text-sm">See all deals</a>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {deals.map((deal, index) => (
              <DealCard key={index} {...deal} />
            ))}
          </div>
        </div>
      </section>

      {/* Sign In Banner */}
      <section className="container mx-auto px-4 py-4">
        <div className="bg-card p-4 rounded-sm text-center">
          <p className="text-foreground mb-2">
            See personalized recommendations
          </p>
          <button className="amazon-btn px-8">Sign in</button>
          <p className="text-sm text-muted-foreground mt-2">
            New customer?{" "}
            <a className="amazon-link">Start here.</a>
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-card p-5 rounded-sm">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Best Sellers in Electronics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products.slice(0, 6).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Products */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-card p-5 rounded-sm">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Top picks in Fashion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {products.slice(6, 12).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prime Banner */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-amazon-dark to-amazon-light-dark rounded-sm overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Try <span className="text-amazon-blue italic">prime</span>
              </h2>
              <p className="text-amazon-gray-dark text-sm md:text-base">
                FREE Delivery, Video, Music & more
              </p>
              <button className="amazon-btn-primary mt-4">
                Start your free trial
              </button>
            </div>
            <div className="text-5xl md:text-7xl font-bold text-amazon-blue italic">
              prime
            </div>
          </div>
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="container mx-auto px-4 py-6">
        <div className="bg-card p-5 rounded-sm">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Inspired by your browsing history
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.slice(0, 6).map((product) => (
              <div
                key={product.id}
                className="bg-white p-2 rounded cursor-pointer hover:shadow-md transition-shadow"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full aspect-square object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  );
};

export default Index;
