import * as React from "react";

export interface Props {
    imageClass?: string;
}

export class LogoImage extends React.Component<Props, {}> {
    render() {
        return <span className={`logo ${(this.props.imageClass != null ? this.props.imageClass : "")}`}></span>;
    }
}

export class Logo extends React.Component<Props, {}> {
    render() {
        return <a
            href="https://simplrjs.com"
            className="logo-container"
        >
            <span className={`logo ${(this.props.imageClass != null ? this.props.imageClass : "")}`}></span>
            <div className="title">
                SimplrJS
                    </div>
        </a>;
    }
}
