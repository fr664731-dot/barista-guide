import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function PageHeader({ 
  icon: Icon, 
  badge, 
  title, 
  description, 
  imageUrl, 
  imageAlt 
}: PageHeaderProps) {
  return (
    <div className="relative rounded-3xl overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-64 md:h-80 object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <Icon className="w-5 h-5" aria-hidden="true" />
          <span className="font-medium">{badge}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg opacity-90 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
