export const editUrlParams = (url: string, parameter: string, value: any) => {
  let urlLink = new URL(url);
  let params = new URLSearchParams(urlLink.searchParams);
  params.set(parameter, value);
  urlLink.search = params.toString();
  let newUrl = urlLink.toString();
  return newUrl;
};

// FUNCTION: Switches colors between white/black depending on bg contrast
export const getContrast = (hexcolor: string) => {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split('')
      .map(function (hex) {
        return hex + hex;
      })
      .join('');
  }

  // Convert to RGB value
  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 128 ? 'black' : 'white';
};

export const dataCheck = (data: any) => (data ? data : '???');
