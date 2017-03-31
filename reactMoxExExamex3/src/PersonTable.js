import React, { Component } from "react";
import factory from "./personFactory";

class PersonTable extends Component {
  constructor(){
    super();
    factory.getPersons();
  }

  render() {
      const body = factory.persons.map(function(person) {
          const friends = person.friends.map(function(friend) {
              return friend.name + ",";
          });
          return <tr>
              <td>
                  {person.age}
              </td>
              <td>
                  {person.name}
              </td>
              <td>
                  {person.gender}
              </td>
              <td>
                  {person.email}
              </td>
              <td>
                  {friends})}
              </td>
          </tr>
      });
    return (
      <table className="table">
        <thead>
          <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
        </thead>
        
        <tbody>
        {body}
        </tbody>
      </table>
    );
  }
}
export default PersonTable;