import App from "./App";
import axios, { AxiosResponse } from "axios";
import MockAxios from "jest-mock-axios";
import { act, render, screen } from "@testing-library/react";

//jest.mock(...) is used to automatically mock the axios
jest.mock("axios");

//Create an object of type of mocked Axios (only typescript)
const mockedAxios = axios as jest.Mocked<typeof axios>;

it("Brings the Movies", () => {
	//Our desired output
	const res = {
		data: {
			results: [
				{
					id: 1,
					poster_path: "url",
					title: "Avengers",
					overview: "The best superheros movie",
					vote_average: "4",
					release_date: "2019/12/10",
				},
			],
		},
	};

	const mockResponse = {
		data: res,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	};

	//Make the mock return the custom axios response
	mockedAxios.get.mockResolvedValueOnce(mockResponse);
	const movie = screen.getByText("Avengers");
	const asd = "ads";
});
