import React, {useEffect} from 'react'

const TopTenScore = (props) => {

    useEffect(() => {
        // get the user's name
    }, []);

    return (
      <div id="top-ten-score">
        {/* show the user's name */}
        Score: {props.scoreObj.score}
        <br></br>
        Date: {props.scoreObj.date.slice(0,10)}
      </div>
    );
}

export default TopTenScore