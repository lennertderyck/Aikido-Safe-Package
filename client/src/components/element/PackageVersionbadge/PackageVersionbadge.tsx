import classNames from "classnames";
import { ComponentProps, FC } from "react";

interface Props extends ComponentProps<"h2"> {}

const PackageVersionbadge: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <h2
      className={classNames(
        "mt-2 bg-white/10 p-1 px-4 w-fit rounded-full",
        className
      )}
      {...otherProps}
    />
  );
};

export default PackageVersionbadge;
