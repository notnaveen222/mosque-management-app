import Image from "next/image";

type IconProps = {
  path: string;
  size?: number;
  styles?: string;
};

export default function Icon({ path, size = 8, styles }: IconProps) {
  return (
    <Image
      className={`size-${size} ${styles}`}
      src={path}
      alt={path}
      width={size}
      height={size}
    />
  );
}
