import React, {useEffect, useState} from 'react';
import HomeCard from "../components/HomeCard";
import LoadingOverlay from 'react-loading-overlay';


function Home() {
    const [loading, setLoading] = useState();
    const [fields, setField] = useState([]);


    useEffect(() => {
        setLoading(true);
        axios.get(`/lessons`)
            .then(response => jsonHandler(response.data))
            .catch(err => {
            });
    }, [])

    let jsonHandler = (data) => {
        console.log(data);
        setField(data)
        setLoading(false);
    }

    let renderLessons = function () {
        if (fields.length == 0) {
            return <div className="alert alert-danger">هنوز درسی ثبت نشده یا شما به آن اضافه نشده اید</div>
        }

        return fields.map(function (item) {
            return (
                <div className="col-md-4 text-center" key={item.id}>
                    <HomeCard
                        img='https://picsum.photos/id/54/400/300'
                        title={item.name}
                        description={item.description}
                        link={`/lesson/${item.id}`}
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
                <div className="row">
                    <div className="col-md-12 mt-3 mb-2">
                        <div className="jumbotron text-center">
                            <h1 className="display-4">خوش آمدید!</h1>
                            <p className="lead">در این قسمت درس ها نمایش داده می شود</p>
                            <hr className="my-4" />
                            <p>برای مشاهده و شرکت در گروه بندی، یکی از درس های زیر را انتخاب کنید.</p>
                        </div>
                    </div>
                    {
                        renderLessons()
                    }
                </div>
            </LoadingOverlay>
        </>
    )
}

export default Home;
