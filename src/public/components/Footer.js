import React from "react";

const styles = {
	root: {
        fontWeight: "bold",
		color: "#d4f8e8",
		marginBottom: "-35px"
	},
	link:{
		color: "#d4f8e8"
	}
};

export default (props) => {
	return (
		<footer style={styles.root}>
			HY{" "}
			|{" "}
			YY
			<br />
			<a style = {styles.link}
				href="https://www.freepik.com/free-photos-vectors/banner"
				target="_blank"
				rel="noopener noreferrer"
			>
				Background by Adobe
			</a>
		</footer>
	);
};
