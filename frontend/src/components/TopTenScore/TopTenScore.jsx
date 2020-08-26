import React, {useEffect} from 'react'

const TopTenScore = (props) => {
    // get the user's name on mounting
    useEffect(() => {
        props.getUser(props.userId)
    }, []);

    return (
      <div id="top-ten-score">
        User: {props.userHandle}
        <br></br>
        Score: {props.score}
        <br></br>
        Date: {props.date.slice(0,10)}
      </div>
    );
}

export default TopTenScore