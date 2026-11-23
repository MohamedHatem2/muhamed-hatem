export default function BrandMark() {
  return (
    <div
      className="relative flex size-48 items-center justify-center"
      aria-hidden="true"
    >
      <span className="absolute inset-0 rounded-full border border-primary/20" />
      <span className="absolute inset-2 rounded-full border border-dashed border-secondary/40 animate-[spin_9s_linear_infinite]" />
      <span className="absolute inset-[-8px] rounded-full border-t-[3px] border-r-[3px] border-transparent border-t-primary border-r-secondary animate-[spin_1.4s_linear_infinite]" />
      <span className="absolute inset-[-17px] rounded-full border border-primary/10 animate-pulse" />
      <img
        src="/me.png"
        alt=""
        className="size-32 rounded-full border-4 border-surface object-cover object-top shadow-2xl"
      />
      <span className="absolute right-3 top-8 size-3 rounded-full bg-secondary shadow-[0_0_18px_var(--brand-secondary)]" />
      <span className="absolute bottom-8 left-2 size-2 rounded-full bg-primary shadow-[0_0_14px_var(--brand-primary)]" />
    </div>
  );
}
