import { Slot } from "@radix-ui/react-slot";
import classNames from "classnames";
import { ComponentProps, FC } from "react";

interface LinkListItem extends ComponentProps<"button"> {
  asChild?: boolean;
}

export const LinkListItem: FC<LinkListItem> = ({ asChild, ...otherProps }) => {
  const Comp = asChild ? Slot : "button";

  return (
    <li className="py-3">
      <Comp
        className={classNames(
          "flex items-start gap-3 hover:bg-white/5 p-4 rounded-sm transition-colors"
        )}
        {...otherProps}
      />
    </li>
  );
};

interface Props extends ComponentProps<"div"> {}

const LinkList: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <ul
      className={classNames(
        "divide-y divide-white/15 border border-white/15 rounded-xl px-3",
        className
      )}
      {...otherProps}
    />
  );
};

export default LinkList;
