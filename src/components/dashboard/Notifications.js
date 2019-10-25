import React from 'react';
import moment from 'moment'

const Notifications = (props) => {
    const {notifications} = props;
    return (
        <section className="notifications-wrapper">
            <div className="card ">
                <div className="card-body">
                    <h4 className="card-title note-title">Notifications:</h4>
                    <ul className="notifications">
                        {notifications && notifications.map((item) => {
                            return (
                                <li key={item.id} className='list-group note-group'>
                                    <span className="">{item.user} </span>
                                    <span>{item.content}</span>
                                    <div className=" note-date">{moment(item.time.toDate()).fromNow()}</div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Notifications