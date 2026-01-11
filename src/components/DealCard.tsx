import { Clock } from "lucide-react";

interface DealCardProps {
  title: string;
  image: string;
  discount: number;
  originalPrice: number;
  dealPrice: number;
  claimed: number;
  endsIn: string;
}

const DealCard = ({
  title,
  image,
  discount,
  originalPrice,
  dealPrice,
  claimed,
  endsIn,
}: DealCardProps) => {
  return (
    <div className="bg-card p-4 rounded-sm hover:shadow-lg transition-shadow cursor-pointer min-w-[200px]">
      <div className="relative aspect-square mb-3 bg-white rounded overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-2"
        />
        <span className="absolute top-2 left-2 deal-badge">
          Up to {discount}% off
        </span>
      </div>

      <span className="deal-badge mb-2 inline-block">Limited time deal</span>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-xs">₹</span>
        <span className="text-lg font-medium text-foreground">
          {dealPrice.toLocaleString()}
        </span>
        <span className="text-xs text-muted-foreground line-through ml-2">
          ₹{originalPrice.toLocaleString()}
        </span>
      </div>

      <h3 className="text-sm text-foreground line-clamp-2 mb-2">{title}</h3>

      <div className="mb-2">
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-amazon-red rounded-full"
            style={{ width: `${claimed}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1">{claimed}% claimed</p>
      </div>

      <div className="flex items-center text-xs text-amazon-red">
        <Clock className="w-3 h-3 mr-1" />
        <span>Ends in {endsIn}</span>
      </div>
    </div>
  );
};

export default DealCard;
