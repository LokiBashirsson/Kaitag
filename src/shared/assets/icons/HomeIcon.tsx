// shared/ui/icons/HomeIcon.tsx
interface IconProps {
  className?: string;
}

export const HomeIcon = ({ className }: IconProps) => {
  return (
    <svg viewBox="0 0 26 26" fill="none" className={className}>
      <path
        d="M4 20V9L13 3L22 9V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 20V13H17V20"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
};
