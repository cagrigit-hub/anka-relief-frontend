// This func. combines the classnames together
export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
