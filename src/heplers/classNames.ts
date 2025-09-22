export const classNames = (
  ...args: Array<string | null | undefined | false>
) => {
  return args.filter(Boolean).join(' ')
}
