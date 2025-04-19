export const normalizeDate = (input) => {
  if (!input) return "";

  // format ISO
  if (/^\d{4}-\d{2}-\d{2}$/.test(input)) {
    return input;
  }

  //format "31.12.2025"
  if (/^\d{2}\.\d{2}\.\d{4}$/.test(input)) {
    const [d, m, y] = input.split(".");
    return `${y}-${m}-${d}`;
  }

  // unknown format
  console.warn("Don`t support format of date", input);
  return input;
};

export const checkDate = (deadline) => {
  // const today = new Date().setHours(0, 0, 0, 0);
  const today = new Date("2025-07-01"); //can use this date to check the rendering of past projects
  const projectDate = new Date(normalizeDate(deadline)); // date deadline in backend

  if (projectDate > today) {
    return 0;
  } else {
    return 1;
  }
};
