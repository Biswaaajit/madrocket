import getTypeColors from "../utils/typeColor";

function PoekmonType({ name }) {
  const color = getTypeColors(name);
  return (
    <p
      style={{ color: color.text, backgroundColor: color.bg }}
      className="text-xs sm:text-sm capitalize px-1.5 py-0.5 rounded-md"
    >
      {name}
    </p>
  );
}

export default PoekmonType;
