import { filterMethod } from "./filterMethod";

export const filterProp = {
	name: "Companies",
	items: [
		"Microsoft", "Apple","Flipkart","Google","ServiceNow", "Apple","Flipkart","Google"
	],
	itemsChecked:[
		false, false, false, false,false, false, false, false
	],
	onClickMethod: filterMethod
}