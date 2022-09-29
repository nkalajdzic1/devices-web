export const getQueryParams = (obj) => {
  if (!obj || Object.entries(obj).length === 0) return "";

  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
