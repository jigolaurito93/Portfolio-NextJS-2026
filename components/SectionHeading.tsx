interface SectionHeadingProps {
  index: string;
  title: string;
  align?: 'left' | 'center';
}

const SectionHeading = ({
  index,
  title,
  align = 'left',
}: SectionHeadingProps) => {
  if (align === 'center') {
    return (
      <div className="mb-12 flex flex-col items-center gap-3 text-center">
        <span className="font-mono text-xs tracking-[0.25em] text-secondary">
          {index} /
        </span>
        <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
          {title}
        </h2>
        <span className="h-px w-24 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>
    );
  }

  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-sm tracking-widest text-secondary">
        {index} /
      </span>
      <h2 className="font-display text-3xl font-semibold text-primary md:text-4xl">
        {title}
      </h2>
      <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  );
};

export default SectionHeading;
