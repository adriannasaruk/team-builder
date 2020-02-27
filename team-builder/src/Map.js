import React from "react"

const Map = props => {
    return (
        <div>
        {props.teamMember.map (item => (
            <div key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.role}</p>
            </div>
         ))}
       </div>
    );
};
export default Map