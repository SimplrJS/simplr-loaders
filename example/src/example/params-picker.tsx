import * as React from "react";

interface Props {
    loaderId: string;
    onChange: OnChange;
    defaultCss: string;
    params: LoaderParams | undefined;
}

export interface OnChange {
    (loaderId: string, params: LoaderParams): void;
}

export interface LoaderParams {
    className: string;
    shouldReduceSize: boolean;
}

interface State {
    css: string;
}

export class ParamsPicker extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.appendStyles(this.props.defaultCss);
    }

    static defaultProps: Partial<Props> = {
        params: {
            className: "",
            shouldReduceSize: false
        }
    };

    private onClassNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newParams: LoaderParams = {
            className: event.target.value,
            shouldReduceSize: this.props.params!.shouldReduceSize
        };

        this.props.onChange(this.props.loaderId, newParams);
    }

    private onShouldReduceSizeChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newParams: LoaderParams = {
            className: this.props.params!.className,
            shouldReduceSize: event.target.checked
        };

        this.props.onChange(this.props.loaderId, newParams);
    }

    private onCssChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const value = event.target.value;
        this.appendStyles(value);
    }

    private appendStyles(css: string) {
        const head = document.getElementsByTagName("head")[0];
        const id = "example-" + this.props.loaderId;

        if (head != null) {
            const container = document.getElementById(id);
            if (container == null) {
                const style = document.createElement("style");
                style.setAttribute("id", id);
                const textNode = document.createTextNode(css);
                style.appendChild(textNode);
                head.appendChild(style);
            } else {
                container.innerHTML = css;
            }
        } else {
            throw new Error("No <head> tag found.");
        }
    }

    render() {
        return <div className="loader-params">
            <h4>Props</h4>
            <div className="param-field">
                <h5>className</h5>
                <input type="text" value={this.props.params!.className} onChange={this.onClassNameChange} />
            </div>
            <div className="param-field">
                <h5>shouldReduceSize</h5>
                <input type="checkbox" checked={this.props.params!.shouldReduceSize} onChange={this.onShouldReduceSizeChange} />
            </div>
            <h4>Css</h4>
            <div className="param-field">
                <textarea className="css-box" onChange={this.onCssChange} defaultValue={this.props.defaultCss} />
            </div>
        </div>;
    }
}
