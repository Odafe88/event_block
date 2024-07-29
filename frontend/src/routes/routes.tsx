import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import HomePage from "../pages/home"
import EventsPage from "../pages/events"
import EventPage from "../pages/event"
import CreateEvent from "../pages/createEvent"
import SignInPage from "../pages/signin"
import SignUpPage from "../pages/signup"
import ProfilePage from "../pages/profile"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App title={""} />,
        children: [
            { path: "", element: <HomePage /> },
            {
                path: "events",
                element: <EventsPage />,
                children: [
                    {path: "event:ticker", element: <EventPage />}
                ]
            },
            { path: "create-event", element: <CreateEvent /> },
            { path: "signup", element: <SignUpPage /> },
            { path: "signin", element: <SignInPage /> },
            { path: "profile", element: <ProfilePage />}
        ]
    }
])