/// <reference path="../../@types/simplr-loaders.d.ts" />

import * as React from "react";
import * as SimplrLoaders from "simplr-loaders";

import { ParamsPicker, LoaderParams, OnChange } from "./params-picker";

import "./example.css!";

interface State {
    loadersParams: { [key: string]: LoaderParams };
}

export class ExampleComponent extends React.Component<{}, State> {

    state: State = {
        loadersParams: {}
    };

    private onChange: OnChange = (id, params) => {
        this.setState((state: State) => {
            state.loadersParams[id] = params;
        });
    }

    private get bubbleLoaderCss() {
        return `.bubble-loader .bounce {
            background-color: green;
        }`;
    }

    private get spinnerLoaderCss() {
        return `.spinner-loader {
            color: red;
        }`;
    }

    render() {
        return <div className="example">
            <h1>
                SimplrLoaders
            </h1>
            <div className="loader-row">
                <h3 className="loader-title">Bubble loader</h3>
                <div className="loader-block">
                    <div className="loader-example">
                        <SimplrLoaders.BubbleLoader
                            {...this.state.loadersParams["bubble-loader"]}
                        />
                    </div>
                    <ParamsPicker
                        loaderId="bubble-loader"
                        onChange={this.onChange}
                        defaultCss={this.bubbleLoaderCss}
                        params={this.state.loadersParams["bubble-loader"]}
                    />
                </div>
            </div>
            <div className="loader-row">
                <h3 className="loader-title">Spinner loader</h3>
                <div className="loader-block">
                    <div className="loader-example">
                        <SimplrLoaders.SpinnerLoader
                            {...this.state.loadersParams["spinner-loader"]}
                        />
                    </div>
                    <ParamsPicker
                        loaderId="spinner-loader"
                        onChange={this.onChange}
                        defaultCss={this.spinnerLoaderCss}
                        params={this.state.loadersParams["spinner-loader"]}
                    />
                </div>
            </div>
        </div >;
    }
}
