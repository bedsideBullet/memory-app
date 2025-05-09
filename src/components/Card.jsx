import React from "react";
import nintendoImg from "../assets/nintendo.png";
import switchImg from "../assets/switch.png";

const Card = ({ image, category, id, isFlipped, onClick }) => {
	return (
		<div
			onClick={() => onClick(id)}
			style={{
				perspective: "1000px",
				cursor: "pointer",
			}}
		>
			<div
				style={{
					width: "100%",
					height: "18vh",
					position: "relative",
					transformStyle: "preserve-3d",
					transition: "transform 0.3s ease-in-out",
					transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
				}}
			>
				{/* Front */}
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						backfaceVisibility: "hidden",
						backgroundColor: "white",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						borderRadius: "8px",
						boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
						transform: "rotateY(180deg)",
					}}
				>
					<img
						src={image}
						alt={`Token ${id}`}
						style={{ maxWidth: "100%", maxHeight: "70%" }}
					/>
					<div
						style={{ marginTop: "8px", fontSize: "14px", fontWeight: "bold" }}
					></div>
				</div>

				{/* Back */}
				<div
					style={{
						position: "absolute",
						width: "100%",
						height: "100%",
						backfaceVisibility: "hidden",
						backgroundImage: `url(${switchImg})`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
						padding: "10px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "white",
						fontSize: "16px",
						fontWeight: "bold",
						borderRadius: "8px",
						boxShadow: "7px 10px 5px rgba(0,0,0,0.5)",
					}}
				></div>
			</div>
		</div>
	);
};

export default Card;
