import * as React from "react";
import { BubbleLoaderStyle } from "./bubble-loader-style";
import { LoaderBase, BaseProps } from "../abstractions/loader-base";

/**
 * Class of bubble loader component.
 *
 * @export
 * @class BubbleLoader
 * @extends {LoaderBase<BaseProps, {}>}
 */
export class BubbleLoader extends LoaderBase<BaseProps, {}> {
    constructor(props: BaseProps, context: any) {
        super(props, context);
        this.AppendStyles(BubbleLoaderStyle);
    }

    /**
     * Id of bubble loader.
     *
     * @type {string}
     * @memberOf BubbleLoader
     */
    protected LoaderId: string = "bubble-loader";

    render() {
        return <div className={this.AggregatedClassName}>
            <div className="bounce bounce1"></div>
            <div className="bounce bounce2"></div>
            <div className="bounce bounce3"></div>
        </div>;
    }
}
