import React, { useEffect, useState } from "react";
import "./CovidData.css";

function CovidData() {
const [country, setCountry] = useState("");
const [cases, setCases] = useState("");
const [recovered, setRecovered] = useState("");
const [deaths, setDeaths] = useState("");
const [todayCases, setTodayCases] = useState("");
const [userInput, setUserInput] = useState("");

useEffect(() => {
	fetch("https://disease.sh/v3/covid-19/countries")
	.then((res) => res.json())
	.then((data) => {
		setData(data);
	});
}, []);

const setData = ({
	country,
	cases,
	deaths,
	recovered,
}) => {
	setCountry(country);
	setCases(cases);
	setRecovered(recovered);
	setDeaths(deaths);
	setTodayCases(todayCases);
};

const handleSearch = (e) => {
	setUserInput(e.target.value);
};
const handleSubmit = (props) => {
	props.preventDefault();
	fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
	.then((res) => res.json())
	.then((data) => {
		setData(data);
	});
};

return (
	<div className="covidData">
        <div className="covidData__input">
            <form onSubmit={handleSubmit}>
            <input onChange={handleSearch} placeholder="Enter Country Here" />
            <br />
            <button type="submit">Search</button>
            </form>
        </div>

        <div className="covidData_info">
            <p>Name: {country} </p>
            <p>Cases: {cases}</p>
            <p>Deaths: {deaths}</p>
            <p>Recovered: {recovered}</p>
        </div>
	</div>
);
}

export default CovidData;
