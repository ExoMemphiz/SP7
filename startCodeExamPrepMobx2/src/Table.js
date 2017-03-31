import React from 'react';

class Table extends React.Component {

    constructor(props) {
        super(props);
    }

    getHeaders() {
        return <tr>
            <th>
                Student Name
            </th>
            <th>
                Basic Programming
            </th>
            <th>
                Advanced Programming
            </th>
            <th>
                DataBase Intro
            </th>
            <th>
                Average Grade:
            </th>
        </tr>;
        /*
        var headers = this.props.headers;
        return headers.map(function(header) {
            return <th key={header.courseId}> {header.courseName} </th>;
        });
        */
    }

    getData() {
        return this.props.data.map(function(student) {
            var total = 0;
            var div = 0;
            for (var i = 0; i < student.grades.length; i++) {
                var grade = student.grades[i].grade;
                //console.log("Grade " + i + ": " + grade);
                if (grade !== undefined) {
                    total += parseInt(grade, 10);
                    div++;
                }
                //console.log("Current toal: " + total);
            }
            //console.log("Student toal average (Before division): " + total);
            total /= div;
            return <tr>
                <td>{student.name}</td>
                <td>{student.grades[0].grade}</td>
                <td>{student.grades[1].grade}</td>
                <td>{student.grades[2].grade}</td>
                <td>{total}</td>
            </tr>;
        });
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead> {this.getHeaders()} </thead>
                    <tbody> {this.getData()} </tbody>
                </table>
            </div>
        );
    }

}

export default Table;