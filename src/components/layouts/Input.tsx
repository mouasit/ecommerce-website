type Input = {
  label?: string;
  placeholder?: string;
};

export default function Input({ label, placeholder }: Input) {
  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm text-bluePrimary">{label}</label>
      <input
        type="text"
        className="rounded-[0.5rem] border-2 border-bluePrimary p-3 text-sm text-bluePrimary placeholder:text-grayPrimary focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}
