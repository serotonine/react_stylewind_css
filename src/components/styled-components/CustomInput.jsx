export default function CustomInput({ label, invalid, ...props }) {
  const labelClass = invalid ? "text-red-400" : undefined;
  const inputClass = invalid
    ? "bg-red-200 border-1 border-red-400 text-red-400"
    : undefined;
  return (
    <>
      <label className={labelClass}>{label}</label>
      <input className={inputClass} {...props} />
    </>
  );
}
