import React, { Suspense, lazy } from "react";
// import Home from './Home';

const Home = lazy(() => import("./Home"));
const Data = lazy(() => import("./Data"));

function CompoLazy() {
    return (
        <div>
            <h1>This is a Lazy loading components</h1>
            <Suspense fallback={<p>Component is Loading....</p>}>
                <Home />
            </Suspense>
            <Suspense fallback={<p>This is for Data Compo...</p>}>
                <Data />
            </Suspense>
        </div>
    );
}

export default CompoLazy;
