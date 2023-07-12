export const editUrlParams = (url, parameter, value) => {
  let urlLink = new URL(url);
  let params = new URLSearchParams(urlLink.searchParams);
  params.set(parameter, value);
  urlLink.search = params.toString();
  let newUrl = urlLink.toString();
  return newUrl;
};

export const dataCheck = (data) => (data ? data : '???');
