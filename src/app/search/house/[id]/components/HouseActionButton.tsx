interface ButtonProps {
  icon: string;
  title: string;
  route: string;
}
export default function HouseActionButton({ icon, title, route }: ButtonProps) {
  return (
    <div className="bg-brand-navy-blue flex gap-x-1">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}
