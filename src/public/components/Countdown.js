import React, { useState, useEffect } from "react";


const startDate = new Date(2020, 2, 18); // 2 = March
const endDate = new Date(2020, 3, 28); // 3 = April
const totalDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


const styles = {
	root: {
		margin: "35px",
		fontSize: "40px",
		color: "#7b5353"
	},
	header: {
		fontWeight: "bold",
		fontSize: "28px",
		color:"#7b5353"
	},
	underline: {
		textDecoration: "underline",
		fontWeight: "bold",
		color:"#7b5353"
	},
	content :{
		marginTop: "15vh",
		backgroundColor: 'rgba(	243,222,163,0.5)',
		borderRadius: "20px",
	},
	colouredLine: {
            backgroundColor: "#a4cc96",
			height: 20,
			width: "100%"

	},
	date: {
		fontSize: 30,
		color: "#7b5353"
	},
};

export default () => {
	const [daysElapsed, setDaysElapsed] = useState("");
	const [hoursElapsed, sethoursElapsed] = useState("");
	const [minuteElapsed, setminuteElapsed] = useState("");
	const [secondsElapsed, setsecondsElapsed] = useState("");

	const [todayDate, setTodayDate] = useState("");
	const [todayMonth, setTodayMonth] = useState("");
	const [todayDay, setTodayDay] = useState("");
	useEffect(() => {
		const intervalID = setInterval(
			() => {
			const today = new Date();
			const todayDate = today.getDate();
			const todayMonth = today.getMonth();
			const todayDay = today.getDay();

			const timeElapsed = Math.abs(endDate - today);
			const daysElapsed = Math.ceil(timeElapsed / (1000 * 60 * 60 * 24));
			setDaysElapsed(daysElapsed);
			setTodayDate(todayDate);
			setTodayMonth(months[todayMonth]);
			setTodayDay(days[todayDay]);
			sethoursElapsed(Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
			setminuteElapsed(Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60)));
			setsecondsElapsed (Math.floor((timeElapsed % (1000 * 60)) / 1000));
	
			},
			1000
		  );
		  return () => clearInterval(intervalID);
	}, []);

	return (
		<div style={styles.content}>
			<div style={styles.colouredLine} />
			<div style = {styles.date}>
				{todayDate}{"  "}{todayMonth}{"  "}{"2020"}{"  "}{todayDay}
			</div>
			<div style={styles.colouredLine} />
			<div style={styles.root}>
	Days Remaining:  <span style={styles.underline}>{daysElapsed} Days {hoursElapsed} Hours {minuteElapsed} Minute {secondsElapsed} Seconds</span> 
				<br />
				{totalDays}-days Movement Control Order.
			</div>
		</div>
	);
};
