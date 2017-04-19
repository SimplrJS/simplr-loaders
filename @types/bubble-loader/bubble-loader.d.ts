/// <reference types="react" />
import { LoaderBase, BaseProps } from "../abstractions/loader-base";
/**
 * Class of bubble loader component.
 *
 * @export
 * @class BubbleLoader
 * @extends {LoaderBase<BaseProps, {}>}
 */
export declare class BubbleLoader extends LoaderBase<BaseProps, {}> {
    constructor(props: BaseProps);
    /**
     * Id of bubble loader.
     *
     * @type {string}
     * @memberOf BubbleLoader
     */
    LoaderId: string;
    render(): JSX.Element;
}
