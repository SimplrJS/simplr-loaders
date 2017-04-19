import * as React from "react";
import * as classNames from "classnames";

export interface Props {
    className?: string;
}

export class LogoImage extends React.Component<Props, {}> {
    render() {
        return <span className={classNames("logo", this.props.className)}></span>;
    }
}

export class Logo extends React.Component<Props, {}> {
    render() {
        return <a href="https://simplrjs.com" className="logo-container">
            <span className={classNames("logo", this.props.className)}></span>
            <div className="title">
                SimplrJS
            </div>
        </a>;
    }
}
