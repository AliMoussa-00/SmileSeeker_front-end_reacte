import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import DocAppoint from '../components/DocAppoint';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import UserAppoint from '../components/UserAppoint';

const UserAppointments = () => {
    const { user_id } = useParams();
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const fetchAppointment = async (user_id) => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/v1/user_appointments/${user_id}`);
                if (!response.ok) {
                    console.log('Failed to fetch Appointment');
                }
                else {
                    const appointmentsData = await response.json(); // Parse JSON response
                    setAppointments(appointmentsData);
                }
            } catch (error) {
                console.error('Error fetching appointment:', error);
            }
        }
        fetchAppointment(user_id)

    }, [user_id]);


    const deleteAppointment = async (appointment) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/v1/appointments/${appointment.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (!response.ok) {
                console.log('Failed to delete appointment');
            } else {
                console.log('Appointment deleted successfully');
                // removing it from list of appointment
                setAppointments(appointments.filter(appoint => appoint.id !== appointment.id));
                console.log(appointments.length)
            }
        } catch (error) {
            console.error('Error deleting Appointment:', error);
        }
    };


    return (
        <MDBContainer>
            <MDBRow className='mt-5'>
                <MDBCol>
                    <h3>Appointments</h3>
                </MDBCol>
            </MDBRow>
            {
                appointments.length > 0
                    ?
                    appointments.map((appointment) => (
                        <MDBRow className='mt-3 justify-content-center' key={appointment.id}>
                            <MDBCol md='8'>
                                <UserAppoint appointment={appointment} deleteAppointment={() => { deleteAppointment(appointment) }} />
                            </MDBCol>
                        </MDBRow>
                    ))
                    :
                    <MDBRow className='mt-3 justify-content-center'>
                        <MDBCol>
                            <h6>There are no appointments for now</h6>
                        </MDBCol>
                    </MDBRow>
            }
        </MDBContainer>
    );
}

export default UserAppointments;