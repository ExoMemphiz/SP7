class PersonFactory {
 
 constructor() {
    this.persons = [];
   }

    getPersons = () => {
        var myInit = {method: "GET"};
        console.log("Fetching data!");
        fetch("http://localhost:4567/api/persons", myInit).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            this.persons = (data);
        });
    }

}

export default new PersonFactory();