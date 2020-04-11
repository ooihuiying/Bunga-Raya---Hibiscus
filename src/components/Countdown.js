import React, { useState, useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'



const startDate = new Date(2020, 2, 18); // 3 = April
const endDate = new Date(2020, 3, 28); // 4 = May
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;

const styles = {
	root: {
		color: "white",
        fontSize: "40px",
	},
	header: {
		fontWeight: "bold",
		fontSize: "28px",
	},
	underline: {
		textDecoration: "underline",
		fontWeight: "bold",
	},
	progressBarWrapper: {
        position: "relative",
        color: "white"
	},
	progressBar: {
		maxWidth: "480px",
		height: "40px",
		margin: "20px auto 0 auto",
        borderRadius: "20px",
        color:"yellow"
	},
	progressBarText: {
		position: "absolute",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		top: "0",
		left: "0",
		right: "0",
		bottom: "0",
		color: "#5F5F5F",
		fontSize: "20px",
	},
};

export default () => {
	const [daysElapsed, setDaysElapsed] = useState("");
	const [daysLeft, setDaysLeft] = useState("");

	useEffect(() => {
		const intervalID = setInterval(() => {
			const today = new Date();
			const timeElapsed = Math.abs(today - startDate);

			const daysElapsed = Math.ceil(timeElapsed / (1000 * 60 * 60 * 24));
			const daysLeft = totalDays - daysElapsed;

			setDaysElapsed(daysElapsed);
			setDaysLeft(daysLeft);
		}, 500);

		return () => clearInterval(intervalID);
	}, []);

	return (
        // <ProgressBar striped variant="success" now={60}/>
		<div style={styles.root}>
			<h1 style={styles.header}>Hello Malaysia,</h1>
			It is <span style={styles.underline}>Day {daysElapsed}</span> of
			<br />
			the {totalDays}-day Lock down.
            
			<div style={styles.progressBarWrapper}> 
				<ProgressBar
					style={styles.progressBar}
					now={daysElapsed}
					max={totalDays}
				/>
				<div style={styles.progressBarText}>
					<span>
						Just{" "}
						<b>
							{daysLeft} day{daysLeft > 1 && "s"}
						</b>{" "}
						left!
					</span>
				</div> 
			 </div>
		</div>
	);
};
