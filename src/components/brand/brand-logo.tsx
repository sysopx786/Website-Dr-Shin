import { assetUrl, cn } from "@/lib/utils";

export function BrandLogo({
  className,
  alt = "Yong Shin MD and Associates",
}: {
  className?: string;
  alt?: string;
}) {
  return (
    <img
      src={assetUrl("/images/logo.png")}
      width={312}
      height={106}
      alt={alt}
      decoding="async"
      className={cn("h-12 w-auto sm:h-14", className)}
    />
  );
}
