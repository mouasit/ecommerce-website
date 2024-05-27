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
