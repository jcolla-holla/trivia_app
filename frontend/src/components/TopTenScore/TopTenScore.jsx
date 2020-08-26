import React, {useEffect} from 'react'

const TopTenScore = (props) => {

    // get the user's name on mounting
    useEffect(() => {
        props.getUser(props.userId)
    }, []);

    return (
      <div id="top-ten-score">
        {/* show the user's name */}
        {/* User: {props.user} */}
        <br></br>
        Score: {props.score}
        <br></br>
        Date: {props.date.slice(0,10)}
      </div>
    );
}

export default TopTenScore