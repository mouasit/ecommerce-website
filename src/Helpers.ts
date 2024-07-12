export const currency = "DH";

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
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatNumberWithSpaces(number: number) {
  let numStr = number.toString();
  return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function changeTitleDocument({ routeName }: { routeName: string }) {
  document.title = `${capitalizeFirstLetter(routeName)} - Come`;
}

export function getTodayDate(): string {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${day}/${month}/${year}`;
}
