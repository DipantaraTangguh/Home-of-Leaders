export default function HeaderTitle({ title }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
    </div>
  );
}
