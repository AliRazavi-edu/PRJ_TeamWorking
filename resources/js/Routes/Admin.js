import React from 'react';
import HomeCard from "../components/HomeCard";


function Admin() {

    return (
        <>
            <div className="row">
                <div className="col-md-4 text-center">
                    <HomeCard
                        img='https://picsum.photos/id/54/400/300'
                        title='کاربران'
                        description='در این بخش می توانید کاربران را مدیریت کنید'
                        link="/admin/user"
                    />
                </div>
                <div className="col-md-4 align-content-center">
                    <HomeCard
                        img='https://picsum.photos/id/54/400/300'
                        title='اساتید'
                        description='در این بخش می توانید اساتید را مدیریت کنید'
                        link="/admin/teacher"
                    />
                </div>
                <div className="col-md-4 align-content-center">
                    <HomeCard
                        img='https://picsum.photos/id/54/400/300'
                        title='رشته ها'
                        description='در این بخش می توانید رشته ها را مدیریت کنید'
                        link="/admin/field"
                    />
                </div>

                <div className="col-md-4 align-content-center">
                    <HomeCard
                        img='https://picsum.photos/id/54/400/300'
                        title='دروس'
                        description='در این بخش می توانید دروس را مدیریت کنید'
                        link="/admin/lesson"
                    />
                </div>

            </div>
        </>
    )
}

export default Admin;
