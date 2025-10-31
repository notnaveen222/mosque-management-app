interface InfoFieldProps {
  title: string;
  value: string;
}
export default function InfoField({ title, value }: InfoFieldProps) {
  return (
    <div className="flex flex-col">
      <div className="text-sm text-brand-title-text">{title}:</div>
      <div className="text-lg text-brand-navy-blue">{value}</div>
    </div>
  );
}
