import React from 'react'

export default () =>{

const styles = {
    main: {
        fontWeight: "bold",
		fontSize: "50px",
        color:"black",
        margin: "300px"
    }   ,
    wrapper: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
      } 
      
}


    return(
        <div style = {styles.wrapper}>
        <div style = {styles.main}>
            Work In Progress ...
        </div>
        </div>
    );
}