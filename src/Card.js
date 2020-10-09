import React from 'react'


const card = ({name, id , email}) => {
    return(
        <div className="bg-lightest-blue dib br3 pa3 ma2 bw2 shadow-5 grow">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default card;