import React, {useEffect, useState} from 'react';
import HomeCard from "../components/HomeCard";
import LoadingOverlay from 'react-loading-overlay';


function Home() {
    const [loading, setLoading] = useState();
    const [fields, setField] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios.get(`/study-fields`)
            .then(response => jsonHandler(response.data))
            .catch(err => {
            });
    }, [])

    let jsonHandler = (data) => {
        setField(data)
        setLoading(false);
    }

    let renderLessons = function () {
        if (fields.length == 0) {
            return <div className="alert alert-danger">هنوز درسی ثبت نشده</div>
        }

        return fields.map(function (item) {
            return (
                <div className="col-md-4 text-center" key={item.id}>
                    <HomeCard
                        img='https://picsum.photos/id/54/400/300'
                        title={item.name}
                        link={`/study-field/${item.id}`}
                    />
                </div>
            )
        })
    }
    return (
        <>
            <LoadingOverlay
                active={loading}
                spinner
                text='در حال بارگزاری...!'
            >
                <div className="alert alert-info">لطفا یکی از دروسی که در آن حضور دارید را انتخاب کنید</div>
                <div className="row">
                    {
                        renderLessons()
                    }
                </div>
            </LoadingOverlay>


        </>
    )
}

export default Home;
