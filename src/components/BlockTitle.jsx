import { cn } from "../lib/utils";

const BlockTitle = ({className, children }) => {
  return (
    <h2 className={ cn('text-base font-semibold text-[var(--electric-blue)]', className)}>{children}</h2>
  );
};

export default BlockTitle;