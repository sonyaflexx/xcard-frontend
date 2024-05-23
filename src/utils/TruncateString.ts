export function truncateString(str: string | undefined, startLength: number, endLength: number, connector: string = '...'): string {
  if (!str || str.length <= startLength + endLength) {
    return str || '';
  }

  const start = str.slice(0, startLength);
  const end = str.slice(-endLength);

  return `${start}${connector}${end}`;
}