export function isEmptyString(value: string): boolean {
  if (!value?.trim().length) return false;
  return true;
}

export function isDigit(value: string): boolean {
  if (!/^[0-9]+$/.test(value)) return false;
  return true;
}

export function getInitialSlide(elementStarter: HTMLElement): number {
  let initialSlider: number = 0;
  elementStarter.querySelectorAll("li").forEach((li, index) => {
    if (li.classList.contains("slick-active")) initialSlider = index;
  });
  return initialSlider;
}

export function filterByName(data: string[], value: string): string[] {
  let newData: string[];

  newData = data.filter((e: string) => {
    if (e.toLowerCase().indexOf(value.toLowerCase()) !== -1) return e;
    return false;
  });
  return newData;
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return str; // Check if the string is empty
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatNumberWithSpaces(number: number) {
  let numStr = number.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
