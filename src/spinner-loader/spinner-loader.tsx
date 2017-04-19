import * as React from "react";
import { SpinnerLoaderStyle } from "./spinner-loader-style";
import { LoaderBase, BaseProps } from "../abstractions/loader-base";

/**
 * Class of spinner loader component.
 *
 * @export
 * @class SpinnerLoader
 * @extends {LoaderBase<BaseProps, {}>}
 */
export class SpinnerLoader extends LoaderBase<BaseProps, {}> {
    constructor(props: BaseProps) {
        super(props);
        this.AppendStyles(SpinnerLoaderStyle, props);
    }

    /**
     * Id of spinner loader.
     *
     * @type {string}
     * @memberOf SpinnerLoader
     */
    LoaderId: string = "spinner-loader";

    render() {
        return <div className={this.AggregatedClassName}>
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        </div>;
    }
}
