import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout } from "./layout/layout";
import { ExampleComponent } from "./example/example";

import "./app.css!";

export class App extends React.Component<{}, {}> {

    render() {
        return <Layout>
            <ExampleComponent />
        </Layout>;
    }
}

ReactDOM.render(<App />, document.getElementById("app-root"), () => {
    console.log("Example loaded.");
});
