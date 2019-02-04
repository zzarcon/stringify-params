export interface QueryParams {
  [key: string]: string | undefined | number;
};

// TODO [feature]: alphabeticaly sort params for http caching
export const stringifyParams = (queryParams: QueryParams): string => {
  const keys = Object.keys(queryParams);
  if (!keys.length) {
    return '';
  }

  const stringifiedParams = keys
    .map(key => {
      const value = queryParams[key];
      return value !== undefined ? `${key}=${value}` : undefined;
    })
    .filter(key => !!key)
    .join('&');

  return `?${stringifiedParams}`;
}