export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        width={100}
        height={100}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
