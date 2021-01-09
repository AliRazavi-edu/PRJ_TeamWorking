import React, {useEffect, useState} from 'react';
import HomeCard from "../components/HomeCard";
import LoadingOverlay from 'react-loading-overlay';


function Course(props) {

    let lessonId = props.match.params.lesson;

    const [loading, setLoading] = useState();

    const [groups, setGroups] = useState([]);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios.get(`/course/${lessonId}/show`)
            .then(response => jsonHandler(response.data))
            .catch(err => {
            });
    }, [])

    let jsonHandler = (data) => {
        setGroups(data.groups);
        setUsers(data.users);
        setLoading(false);
    }

    console.log(users,groups)

    return (
        <>
            <LoadingOverlay
                active={loading}
                spinner
                text='در حال بارگزاری...!'
            >

            </LoadingOverlay>
        </>
    )
}

export default Course;
