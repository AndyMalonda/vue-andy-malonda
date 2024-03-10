export function toDate(dateString) {
  const parts = dateString.split("/");

  if (parts.length === 2) {
    // Format MM/YYYY
    return new Date(parseInt(parts[1]), parseInt(parts[0]) - 1);
  } else {
    // Format YYYY
    return new Date(parseInt(dateString), 0);
  }
}

export function calculateDuration(startDate, endDate) {
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
