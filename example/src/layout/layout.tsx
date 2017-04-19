import * as React from "react";

import { Logo, LogoImage } from "./logo";

// Import styles.
import "./styles/reset.css!";
import "./styles/main.css!";
import "./styles/github.css!";
import "./styles/template.css!";

export class Layout extends React.Component<{}, {}> {

    render() {
        return <main>
            <header
                className="top-bar">
                <section>
                    <Logo />
                    <nav>
                        <div className="link-container">
                            <a href="https://simplrjs.com/docs">
                                Docs
                            </a>
                        </div>
                        <div className="link-container">
                            <a href="https://github.com/simplrjs">Github</a>
                        </div>
                    </nav>
                </section>
            </header>
            <section className="content">
                {this.props.children}
            </section>
            <footer>
                <section className="columns">
                    <section className="column">
                        <LogoImage imageClass="light" />
                    </section>
                    <section className="column">
                        <h6>About us</h6>
                        <ul>
                            <li><a href="https://quatrodev.com">Team</a></li>
                            <li><a href="https://github.com/SimplrJS">Projects</a></li>
                        </ul>
                    </section>
                </section>
                <section className="merchandise">
                    <div>
                        <div className="QuatroDev" />
                        <div className="copyright">
                            Copyright © {new Date().getFullYear()} QuatroDev
                    </div>
                    </div>
                </section>
            </footer>
        </main>;
    }
}
