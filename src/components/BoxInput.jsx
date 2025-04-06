const BoxInput = ({
  label = "",
  type = "text",
  name = "",
  id = "",
  placeholder = "",
  className = "",
  defaultValue = "",
  value = "",
  readOnly = false,
  disabled = false,
  checked = false,
  ref = null,
  onChange = null,
}) => {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={`order-2 block text-nowrap ${type === "radio" || type === "checkbox" ? "" : "mb-1"}`}
      >
        {label}
      </label>
      <input
        ref={ref}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`order-1 h-full w-full rounded-[6px] px-3 py-2 outline-none ${type === "radio" || type === "checkbox" ? "" : "border border-slate-300"}`}
        defaultValue={defaultValue}
        value={value ? value : undefined}
        readOnly={readOnly}
        disabled={disabled}
        {...(type === "radio" || type === "checkbox" ? { checked } : {})}
        onChange={onChange}
      />
    </div>
  );
};
export default BoxInput;
