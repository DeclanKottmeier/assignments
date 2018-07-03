var form = document.demoForm;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var output = {};
    output.firstname = this.firstName.value;
    output.lastName = this.lastName.value;
    output.age = this.age.value;
    output.gender = this.gender.value;

})