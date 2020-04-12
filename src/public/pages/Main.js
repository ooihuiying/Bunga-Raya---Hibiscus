import React from "react";
import { Container } from "react-bootstrap";
import Countdown from "../../public/components/Countdown";
import Footer from "../../public/components/Footer";

import background from "../../assets/chendol.jpg";


const styles = {
  main: {
        flexGrow: "0.85",
    },
    container :{
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center'
    },
    Background: {
    height: '95vh',
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
};

export default () => {
    return (
        <div style={styles.Background}>
          <main style={styles.main}>
            <Container style={styles.container}>
              <Countdown />
            </Container>
          </main>
          <Footer />
        </div>
    
      );
}