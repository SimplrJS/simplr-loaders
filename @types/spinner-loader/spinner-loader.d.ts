/// <reference types="react" />
import { LoaderBase, BaseProps } from "../abstractions/loader-base";
/**
 * Class of spinner loader component.
 *
 * @export
 * @class SpinnerLoader
 * @extends {LoaderBase<BaseProps, {}>}
 */
export declare class SpinnerLoader extends LoaderBase<BaseProps, {}> {
    constructor(props: BaseProps, context: any);
    /**
     * Id of spinner loader.
     *
     * @type {string}
     * @memberOf SpinnerLoader
     */
    protected LoaderId: string;
    render(): JSX.Element;
}
