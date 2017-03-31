import React, { Component } from "react";
import {observer} from 'mobx-react';
import factory from "./personFactory";

@observer
class PersonTable extends Component {
  constructor(){
    super();
    factory.getPersons();
  }

  /*
    render() {
        const makeTable = factory.persons.map((person, index) =>{
            return <tr key={index}>
                <td>{person.age}</td>
                <td>{person.name}</td>
                <td>{person.gender}</td>
                <td>{person.email}</td>
                <td>{person.friends.map((friend) =>{
                    return friend.name + ", "})}</td></tr>});

        return(
            <table className="table">
                <thead>
                <tr><th>Age</th><th>name</th><th>Gender</th><th>Email</th><th>Friends</th></tr>
                </thead>

                <tbody>
                {makeTable}
                </tbody>
            </table>
        );
    }
    */

  render() {
      console.log("Rendering PersonTable");
      const body = factory.persons.map(function(person) {
          console.log("Body running!");
          const friends = person.friends.map(function(friend) {
              console.log("Friend: " + friend);
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
                  {friends}
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