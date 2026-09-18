import { cn } from "@/lib/utils";

type SiteImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SiteImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 560px, 100vw",
}: SiteImageProps) {
  const webp = src.replace(/\.jpe?g$/i, ".webp");

  return (
    <picture>
      <source type="image/webp" srcSet={webp} sizes={sizes} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={cn("bg-paper-deep", className)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
      />
    </picture>
  );
}
