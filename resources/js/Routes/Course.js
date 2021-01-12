import React, {useEffect, useState} from 'react';
import LoadingOverlay from 'react-loading-overlay';
import CourseDrag from "../components/CourseDrag";
import {Redirect} from "react-router-dom";


function Course(props) {

    let lessonId = props.match.params.course;

    const [loading, setLoading] = useState();

    const [pageProps, setPageProps] = useState({});

    const [redirect, setRedirect] = useState();


    useEffect(() => {
        setLoading(true);
        axios.get(`/course/${lessonId}/show`)
            .then(response => jsonHandler(response.data))
            .catch(err => {
                if (err.response.status == 404 || err.response.status == 403) {
                    setRedirect('/404');
                }
            });
    }, [])

    let jsonHandler = (data) => {
        setPageProps(data)
        setLoading(false);
    }

    let isDataNotReady = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    let dataNotReady = isDataNotReady(pageProps);


    return (
        redirect
            ? <Redirect to={redirect}/>
            : <LoadingOverlay
                active={loading}
                spinner
                text='در حال بارگزاری...!'
            >
                {
                    <>
                        <div className="row">
                            <div className="col-md-12 mt-3 mb-2">
                                <div className="jumbotron text-center">
                                    {
                                        <>
                                            <h1 className="display-4">{dataNotReady ? '-' : pageProps.lesson.title}</h1>
                                            <p className="lead">{dataNotReady ? '-' : `${pageProps.course.title} ${pageProps.teacher.name}`}</p>
                                            <hr className="my-4"/>
                                            <p className="card-text">لطفا نام خود را در یکی از گروه های زیر قرار دهید</p>
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                dataNotReady
                                    ? null
                                    :
                                    <CourseDrag groups={pageProps.groups} users={pageProps.users} setLoading={setLoading}/>
                            }
                        </div>
                    </>
                }
            </LoadingOverlay>
    )
}

export default Course;
