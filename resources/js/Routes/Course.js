import React, {useEffect, useState} from 'react';
import HomeCard from "../components/HomeCard";
import LoadingOverlay from 'react-loading-overlay';


function Course(props) {

    let lessonId = props.match.params.course;

    const [loading, setLoading] = useState();

    const [pageProps, setPageProps] = useState({});


    useEffect(() => {
        setLoading(true);
        axios.get(`/course/${lessonId}/show`)
            .then(response => jsonHandler(response.data))
            .catch(err => {
            });
    }, [])

    let jsonHandler = (data) => {
        setPageProps(data)
        setLoading(false);
    }

    let isDataReady = function(obj){
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    return (
        <>
            <LoadingOverlay
                active={loading}
                spinner
                text='در حال بارگزاری...!'
            >
                {
                    isDataReady(pageProps)
                        ? null
                        : (
                            <>
                                <div className="row">
                                    <div className="col-md-12 mt-3 mb-2">
                                        <div className="jumbotron text-center">
                                            <h1 className="display-4">{pageProps.lesson.title}</h1>
                                            <p className="lead">{`${pageProps.course.title} ${pageProps.teacher.name}`}</p>
                                            <hr className="my-4"/>
                                            <p className="card-text">لطفا نام خود را در یکی از گروه های زیر قرار دهید</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 bg-white">
                                        <p className="card-text">رشته: {pageProps.studyField.title}</p>
                                        <p className="card-text">استاد: {pageProps.teacher.name}</p>
                                    </div>
                                    <div className="col-6 bg-white">
                                        <p className="card-text">رشته: {pageProps.studyField.title}</p>
                                        <p className="card-text">استاد: {pageProps.teacher.name}</p>
                                    </div>
                                </div>
                            </>
                        )
                }
            </LoadingOverlay>
        </>
    )
}

export default Course;
