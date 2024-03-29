import React from 'react';
import { useEffect, useState } from "react";
import Card from "../CardComponent/Card";
import { cardProp } from "../CardComponent/cardProp";
import Search from "../SearchComponent/Search";
import { searchProp } from "../SearchComponent/searchProp";

const Page = () =>{

	const [showCard, setShowCard] = useState(true); 

	useEffect(() => {
		console.log("cardProp.changedPage:", cardProp.changedPage);
		if (cardProp.changedPage) {
			setShowCard(false);
			window.location.reload();
		}
		else setShowCard(true)
	}, [cardProp.changedPage]);

	return(
		<div>
			{showCard ? (
				<Card cardProperties={cardProp} />
			) : (
				<Search properties={searchProp} />
			)}
		</div>
	);
}

export default Page;