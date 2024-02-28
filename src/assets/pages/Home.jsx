import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
    const [doctors, setDoctors] = useState([]);

    const API_URL = 'http://localhost:5000/api/v1/doctors';

    useEffect(() => {
        fetch(API_URL, {
            'method': 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => {
                if (!response.ok) {
                    console.error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setDoctors(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [])

    return (
        <>
            <h1>DATA doctors</h1>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}><h4>{doctor.first_name}</h4></li>
                ))}
            </ul>
            <br />

            <Link>Click Doctor</Link>
        </>
    );
}

export default Home