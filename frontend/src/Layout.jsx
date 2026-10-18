import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <div>
                <nav>Welcome to paper Trail</nav>
                <main>
                    <Outlet />
                </main>

            </div>

        </>
    )
}