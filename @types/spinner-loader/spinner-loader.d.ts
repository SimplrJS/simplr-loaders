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
    constructor(props: BaseProps);
    /**
     * Id of spinner loader.
     *
     * @type {string}
     * @memberOf SpinnerLoader
     */
    LoaderId: string;
    render(): JSX.Element;
}
