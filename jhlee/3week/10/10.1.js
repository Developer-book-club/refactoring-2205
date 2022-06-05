{
  if (!aDate.isBefore(plan.summerStart) && !Date.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
  else charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

{
  if (summer()) charge = quantity * plan.summerRate;
  else charge = quantity * plan.regularRate + plan.regularServiceCharge;

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !Date.isAfter(plan.summerEnd);
  }
}

{
  if (summer()) charge = summerCharge();
  else charge = regularCharge();

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !Date.isAfter(plan.summerEnd);
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}

{
  charge = summer() ? summerCharge() : regularCharge();

  function summer() {
    return !aDate.isBefore(plan.summerStart) && !Date.isAfter(plan.summerEnd);
  }
  function summerCharge() {
    return quantity * plan.summerRate;
  }
  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
