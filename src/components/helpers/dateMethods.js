/**
 * Converts a date string to a Date object based on the provided format.
 * @param {string} dateString - The date string to convert.
 * @param {string} [format="YYYY-MM"] - Optional. Defaults to "YYYY-MM". The format of the date string.
 * @returns {Date} The converted Date object.
 */
export function toDate(dateString, format = "YYYY-MM") {
  const separators = ["-", "/", "."];
  let separator = separators.find((sep) => dateString.includes(sep));

  // Handle the case where the input is in YYYY format without a separator
  if (!separator) {
    if (dateString.length === 4) {
      format = "YYYY";
    } else {
      throw new Error("Invalid date format");
    }
  }

  const parts = dateString.split(separator);
  let year, month, day;

  switch (format) {
    case "YYYY-MM":
      [year, month] = parts;
      day = 1;
      break;
    case "MM/YYYY":
      [month, year] = parts;
      day = 1;
      break;
    case "DD-MM-YYYY":
      [day, month, year] = parts;
      break;
    case "YYYY":
      year = parts[0];
      month = 1;
      day = 1;
      break;
    default:
      throw new Error("Unsupported date format");
  }

  return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
}

/**
 * Calculates the duration between two dates.
 * @param {string} startDate - The start date in MM/YYYY, YYYY-MM, or YYYY format.
 * @param {string} endDate - The end date in MM/YYYY, YYYY-MM, or YYYY format. If null, the current date is used.
 * @returns {string} The duration between the two dates in a human-readable format.
 */
export function calculateDuration(startDate, endDate) {
  console.log(startDate, endDate);
  const formatInputDate = (date) => {
    if (!date) {
      return new Date();
    } else if (date.length === 4) {
      return new Date(`${date}-01-01`);
    } else if (date.length === 7) {
      const [month, year] = date.split("/");
      return new Date(`${year}-${month}-01`);
    } else {
      return new Date(date);
    }
  };

  const start = formatInputDate(startDate);
  const end = formatInputDate(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (days < 0) {
    months--;
    days += new Date(end.getFullYear(), end.getMonth() + 1, 0).getDate();
  }

  if (months < 0) {
    months += 12;
    years--;
  }

  const duration = { years, months, days };

  if (duration.years > 0 && duration.months > 0) {
    return `${duration.years} ans ${duration.months} mois`;
  } else if (duration.years > 0) {
    return `${duration.years} an${duration.years > 1 ? "s" : ""}`;
  } else if (duration.months > 0) {
    return `${duration.months} mois`;
  } else if (duration.days > 0) {
    return `${duration.days} jour${duration.days > 1 ? "s" : ""}`;
  } else {
    return "Moins d'un jour";
  }
}

/**
 * Formats a date string in MM/YYYY or YYYY format to a human-readable string.
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(dateString) {
  if (!dateString) return "";

  const date = toDate(dateString);

  if (isNaN(date.getTime())) return "";

  const options = { month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("fr-FR", options).format(date);

  // Vérifiez si la chaîne de date contient un séparateur "/" pour déterminer le format d'affichage
  if (dateString.includes("/")) {
    return formattedDate;
  } else {
    return formattedDate.split(" ")[1];
  }
}

/**
 * Calculates the age based on the birth date.
 * @param {Date} birthDate - The birth date.
 * @returns {number} The calculated age.
 */
export function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

/**
 * Adds a calculated `duration` property to each object in the data array.
 * @param {Array} data - The array of data objects.
 * @returns {Array} The updated array with the `duration` property added to each object.
 */
export function addDurationToData(data) {
  return data.map((item) => {
    return {
      ...item,
      duration: calculateDuration(item.startDate, item.endDate),
    };
  });
}

/**
 * Sorts the data array by the start date in descending order.
 * @param {Array} data - The array of data objects.
 * @returns {Array} The sorted array.
 */
export function sortDataByStartDate(data) {
  return data.sort((a, b) => {
    const dateA = toDate(a.startDate);
    const dateB = toDate(b.startDate);

    return dateB - dateA;
  });
}