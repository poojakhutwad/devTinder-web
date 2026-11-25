import React from 'react'

const ConnectionCard = ({ connections, page }) => {
    return (
        <div className="card sm bg-base-300 shadow-sm my-8 mx-100">
            <h2 className="card-title p-4">{page !== "connections"  ?"Connection Requests":"My Connections"}</h2>
            <div className="card-body p-0">
                <ul className="list bg-base-200  shadow-sm">
                    <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Connect, collaborate, and grow your developer network.</li>
                    {connections && connections.map((connection) => {
                        const { _id, firstName, lastName, photoURL, about, gender, age } = page !== "connections" ? connection.fromUserId : connection;
                        return (<li key={_id} className="list-row list-col-grow ">
                            <div><img className="size-10 rounded-box" alt="Tailwind CSS list item" src={photoURL} /></div>
                            <div>
                                <div>{firstName + " " + lastName}</div>
                                {gender && age && <div className="text-xs uppercase font-semibold opacity-60">{gender + "|" + age}</div>}
                            </div>
                            <p className="list-col-wrap text-xs">
                                {about}
                            </p>
                            {page !== "connections" && (<div className="justify-end ">
                                <button className="btn btn-xs btn-success m-2">Accept</button>
                                <button className="btn btn-xs btn-error m-2">Reject</button>
                            </div>)}
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ConnectionCard