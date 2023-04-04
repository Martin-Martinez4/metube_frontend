import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Home from "./Home";
import { VIDEOS_QUERY } from "./Home";
import { vitest } from "vitest";

// 1- Mocking the hook using vitest.fn
const mockedUsedNavigate = vitest.fn();

// 2- Mock the library
vitest.mock("react-router-dom", () => ({

    // 3- Import non-mocked library and use other functionalities and hooks
    ...(vitest.importActual("react-router-dom") as any),

    // 4- Mock the required hook
    useNavigate: () => mockedUsedNavigate
}));

describe("Tests Home page", () => {

    const mocks = [
        {
            request: {
                query: VIDEOS_QUERY,

            },
            result: {
                data: {
                    videos: [

                        {
                            id: "1",
                            url: "a url",
                            contentinformation: {
                                title: "video title"
                            },
                            thumbnail: {
                                url: "thumbnail url"
                            },
                            statistic: {
                                views: 200
                            },
                            profile: {
                                username: "test username"
                            },

                        }
                    ]
                }
            }
        }
    ];


    it("navigates to the user profile page", async () => {



        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Home></Home>

            </MockedProvider>
        );
        expect(await screen.findByText("Loading...")).toBeInTheDocument();
        expect(await screen.findByText("coding_channel")).toBeInTheDocument();
        expect(await screen.getAllByText("video title")[0]).toBeInTheDocument();
        fireEvent.click(screen.getAllByText("video title")[0])
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/profile/test username');
    });

    it("navigates to the video page", async () => {



        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Home></Home>

            </MockedProvider>
        );
        expect(await screen.findByText("coding_channel")).toBeInTheDocument();
        expect(await screen.getAllByText("video title")[0]).toBeInTheDocument();
        expect(await document.getElementsByClassName("thumbnailpreview__thumbnail")[0]).toBeInTheDocument();
        fireEvent.click(document.getElementsByClassName("thumbnailpreview__thumbnail")[0])
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/video/1');
    });
})