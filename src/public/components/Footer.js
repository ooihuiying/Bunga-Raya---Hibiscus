import React from "react";

const styles = {
	root: {
		margin: "20px",
        fontWeight: "bold",
        color: "green",
	},
};

export default (props) => {
	return (
		<footer style={styles.root}>
			HY{" "}
			|{" "}
			YY
			<br />
			<a
				href="https://www.freepik.com/free-photos-vectors/banner"
				target="_blank"
				rel="noopener noreferrer"
			>
				Art by macrovector
			</a>
		</footer>
	);
};
