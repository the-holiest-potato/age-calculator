document.querySelector("#calculate-btn").addEventListener("click", function () {
  const day = parseInt(document.querySelector("#day").value);
  const month = parseInt(document.querySelector("#month").value);
  const year = parseInt(document.querySelector("#year").value);

  const currentYear = new Date().getFullYear();

  if (!day || !month || !year) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
  }

  if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
  }

  if (year > currentYear) {
    alert("Year cannot be in the future.");
    return;
  }

  // Additional check for invalid dates like 31 April or 30 Feb
  const testDate = new Date(year, month - 1, day);
  if (
    testDate.getFullYear() !== year ||
    testDate.getMonth() !== month - 1 ||
    testDate.getDate() !== day
  ) {
    alert("Invalid date! Please enter a correct date.");
    return;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day); 

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--; 
    const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    ageDays += daysInLastMonth;
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  document.querySelector("#result-years").textContent = ageYears;
  document.querySelector("#result-months").textContent = ageMonths;
  document.querySelector("#result-days").textContent = ageDays;
});
