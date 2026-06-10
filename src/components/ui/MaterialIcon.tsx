type MaterialIconProps = {
  name: string;
  className?: string;
  filled?: boolean;
};

export function MaterialIcon({ name, className = "", filled }: MaterialIconProps) {
  const style = filled
    ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
    : undefined;

  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
}
