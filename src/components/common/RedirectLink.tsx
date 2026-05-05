import { Link } from "react-router-dom";

interface RedirectLinkProps {
  to: string;
  key?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
export const RedirectLink = ({
  to,
  children,
  className,
  onClick,
}: RedirectLinkProps) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};
