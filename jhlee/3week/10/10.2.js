{
  function a() {
    if (amEmployee.seniority < 2) return 0;
    if (amEmployee.monthDisabled > 12) return 0;
    if (amEmployee.isPartTime) return 0;
  }
}

{
  function a() {
    if (isNotEligibleForDisability()) return 0;

    function isNotEligibleForDisability() {
      return (
        amEmployee.seniority < 2 ||
        amEmployee.monthDisabled > 12 ||
        amEmployee.isPartTime
      );
    }
  }
}
