(function() {
    var person = {
        name: "Alex",
        surname: "Rom4",
        fullName: function(a) {
            return this.name + ' ' + this.surname + ' ' + a;
        }
    }

    console.log(person.fullName("programmer"));

})();
