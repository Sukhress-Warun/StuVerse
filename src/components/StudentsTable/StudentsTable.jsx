import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentsTable({login}) {
    let navigate = useNavigate();

    const[students, setStudents] = React.useState([]);

    useEffect(() => {
        if (!login) {
            navigate('/')
        }
    }, [login])

    useEffect(() => {
        fetch('https://stuverse-backend.onrender.com/student/get')
            .then(response => response.json())
            .then(data => setStudents(data.students))
    }, []);

    function deleteStudent(id) {
        fetch('https://stuverse-backend.onrender.com/student/delete/'+id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.deleted) {
                let newStudents = students.filter(student => student._id !== id);
                setStudents(newStudents);
            }
            else{
                alert('Failed to delete student');
            }
        })
    }

    return (
        <>
            {
                (students.length>0 &&
                <table className="table table-dark table-hover table-striped w-75 mx-auto my-5">
                <thead>
                    <tr>
                        <th scope="col">S.no</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Degree</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{student.name}</td>
                                <td>{student.gender}</td>
                                <td>{student.phone}</td>
                                <td>{student.degree}</td>
                                <td><button className='btn btn-danger' style={{height: '32px'}} onClick={()=>{deleteStudent(student._id)}}>Del</button></td>
                                </tr>
                                )
                    })}
                </tbody>
            </table>) || <h1 className='text-center'>No students found</h1>
            }

            
        </>
    )
}

export default StudentsTable;