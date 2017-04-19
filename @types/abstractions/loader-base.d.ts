/// <reference types="react" />
import * as React from "react";
/**
 * className of a loader when it is reduced.
 *
 * @export
 * @const REDUCED_LOADER_CLASSNAME
 */
export declare const REDUCED_LOADER_CLASSNAME = "reduced";
/**
 * className of a loader when it is expanded.
 *
 * @export
 * @const EXPANDED_LOADER_CLASSNAME
 */
export declare const EXPANDED_LOADER_CLASSNAME = "expanded";
/**
 * Base props of all loader components in simplr-loaders.
 *
 * @export
 * @interface BaseProps
 */
export interface BaseProps {
    /**
     * Custom class name of a loader.
     *
     * @type {string}
     * @memberOf BaseProps
     */
    className?: string;
    /**
     * Specifies whether style should be placed in <head>.
     * This is a default behavior you can cancel.
     *
     * @type {boolean}
     * @memberOf BaseProps
     */
    useDefaultStyle?: boolean;
    /**
     * Specifies whether loader should take area of a strict size.
     * By default a loader should expand to take all possible area.
     * Using this prop you can cancel default behavior.
     *
     * @type {boolean}
     * @memberOf BaseProps
     */
    shouldReduceSize?: boolean;
}
/**
 * Base class of all loader components in simplr-loaders.
 *
 * @export
 * @abstract
 * @class LoaderBase
 * @extends {React.PureComponent<TProps, TState>}
 * @template TProps interface of loader component Props.
 * @template TState interface of loader component State.
 */
export declare abstract class LoaderBase<TProps extends BaseProps, TState> extends React.PureComponent<TProps, TState> {
    /**
     * Unique identifier of a loader.
     * Used in `protected AppendStyles` to prevent styles duplications.
     */
    protected abstract LoaderId: string;
    /**
     * Puts stringified stylesheet of a loader to the `<head>`.
     * @param styles {string} strigified stylesheet of a loader.
     * @param props {TProps} props of loader component.
     */
    protected AppendStyles(styles: string, props: TProps): void;
    /**
     * Default className of a loader component.
     *
     * @protected
     * @type {string}
     * @memberOf LoaderBase
     */
    protected StylesClass: string;
    /**
     * Aggregates all classNames used inside a loader.
     *
     * @readonly
     * @protected
     *
     * @memberOf LoaderBase
     */
    protected readonly AggregatedClassName: string;
}
