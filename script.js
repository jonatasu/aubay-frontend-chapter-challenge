function validateForm() {
  const fields = ["Name", "email", "password"];
  return fields.every(
    (fieldId) => document.getElementById(fieldId).value.trim() !== ""
  );
}

function handleFieldValidation(fieldId) {
  const field = document.getElementById(fieldId);
  const submitButton = document.getElementById("submitButton");

  field.addEventListener("blur", () => {
    const allFields = ["Name", "email", "password"];
    const allValid = allFields.every(
      (id) => document.getElementById(id).value.trim() !== ""
    );

    const parent = field.parentElement;
    const isEmpty = field.value.trim() === "";

    field.classList.toggle("error", isEmpty);
    parent.classList.toggle("error", isEmpty);

    submitButton.disabled = !allValid;
    submitButton.classList.toggle("disabled", !allValid);
  });
}

["Name", "email", "password"].forEach(handleFieldValidation);

document.getElementById("signupForm").onsubmit = function (event) {
  if (!validateForm()) {
    alert("Please fill in all fields");
    return false;
  }
  return true;
};
