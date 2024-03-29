import {dataTest } from "../common-data/dataTest";
import { cardMethod } from "./cardMethod";

let savedData = JSON.parse(localStorage.getItem('myData'));

export let cardProp = {
	companyDescription: savedData,
	changedPage: false,
	afterClickPage: []
}