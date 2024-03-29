import React from 'react';
import { useEffect, useState } from 'react';
import './search.css'

const Search = ({properties}) => {
    const [inputValue, setInputValue] = useState('');
    const [showImage, setShowImage] = useState(false);

    useEffect(()=>{
	properties.showImage === true ? setShowImage(true) : setShowImage(false);
    },[properties.showImage])

    const handleChange = (e) => {
    	setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
	e.preventDefault();
	properties.onClickMethod(inputValue);
    }

    return (
	<form onSubmit={handleSubmit}>
	<div className="search-outer">
		<input className='search-input' type="text" placeholder={properties.placeholder} value = {inputValue} onChange={handleChange}></input>

		{showImage && 
		   <button className='search-icon' type="submit">
			<img className='search-icon-img' src={properties.image} alt=""></img>
		   </button>
		}

		{!showImage && 
			<button className='search-icon' type="submit">{properties.buttonLabel}
			</button>
		}
	</div>
	</form>
    );
}

export default Search;