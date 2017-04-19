# simplr-loaders
React css loaders with no prerequisite style loading.

# Get started

```sh
$ npm install simplr-loaders --save
```

# Usage

```ts
import * as React from "react";
import { BubbleLoader } from "simplr-loaders";

export class MyComponent extends React.Component<{}, {}> {
    render() {
        return <BubbleLoader/>;
    }
}
```

## Loaders

This package currently contains two loaders:
- `SpinnerLoader`
- `BubbleLoader`

If you'd like to see more loaders here feel free to contribute.

## Style

### Stylesheets

You don't need to import loaders stylesheets. By default they are loaded after first use of a loader component.

If you still want to load css yourself, you can cancel default behavior by setting `useDefaultStyle={false}`. 
and load it from stylesheets that are included in this package.

### Use of space

We found it useful for loaders to center and expand to take all possible area around.

If you want to position loader yourself your can set prop `shouldReduceSize={true}`. 

# Example
1. Clone this repository
2. Install packages in simplr-loaders root directory:
```sh
$ npm install
```
3. Go to 'example' folder and run:
```sh
$ npm run example && npm run start
```

# API

## LoaderBase

```ts
export abstract class LoaderBase<TProps extends BaseProps, TState> extends React.PureComponent<TProps, TState>
```
`LoaderBase` is a base class of all loader components in `simplr-loaders`.

### `protected abstract LoaderId: string;`
Unique identifier of a loader.

### `protected StylesClass: string;`
Default className of a loader component. If not declared, `LoaderId` will be taken as default className.

### `protected AppendStyles(styles: string, props: TProps)`
Puts stringified stylesheet of a loader into the `<head>`.

`styles: string` - stringified stylesheet.

`props: TProps` - component props.

### `protected get AggregatedClassName()`
Aggregates all classNames of a loader:
- default className defined in `StylesClass`
- `props.className`
- className that defines how loader use the space (whether it's size should be expanded or reduced).

## BaseProps
Base props of all loader components in simplr-loaders.

```ts
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
```

# Contribution

If you want to add loader to this package you'll need to know basic concepts of:
- [`TypeScript`](https://www.typescriptlang.org/docs/tutorial.html)
- [`SCSS`](http://sass-lang.com/guide)
- [`React`](https://facebook.github.io/react/tutorial/tutorial.html)

In `src/your-loader-folder` should be placed three files:
- Stylesheet written in SCSS;
- React component of a loader written in TypeScript;
- TypeScript file with exported stringified stylesheet of your loader (automatically generated with [`css-to-ts`](https://www.npmjs.com/package/css-to-ts) when building).

## Component

Use TypeScript to create component class:

```ts
import * as React from "react";

// `MyLoaderStyle` TypeScript file with stringified css will be generated from your stylesheet when build is started.
// But you still have to import it.
import { MyLoaderStyle } from "./spinner-loader-style";                 

import { LoaderBase, BaseProps } from "../abstractions/loader-base";

// Loader MUST extend LoaderBase class.
// Every loader MUST have props that are defined in BaseProps.
// If you need more props, you can create your own interface with BaseProps extended.
export class MyLoader extends LoaderBase<BaseProps, {}> {

    // Load style using `AppendStyles` from LoaderBase. 
    constructor(props: BaseProps, context: any) {
        super(props, context); 
        this.AppendStyles(MyLoaderStyle, props);
    }

    // Define loader id.
    // Id is used to identify style in `<head>`.
    protected LoaderId: string = "my-loader";

    // This property is optional.
    // If you don't define `StylesClass`, `LoaderId` will be taken as 'StylesClass'.
    protected StylesClass: string = "class-name-of-my-loader";

    // Define containers structure that your loader requires.
    render() {
        // Use `AggregatedClassName` from `LoaderBase` to define all classNames of your loader.
        return <div className={this.AggregatedClassName}>
            <div></div>
            <div></div>
        </div>;
    }
}
```

## StyleSheet
Use SCSS to write a loader's stylesheet.

Next to all styles of your loader you should implement two additional classNames:

- `.expanded` when loader takes all area of parrent container (default).
- `.reduced` when loader takes strict area. Basically it should contain specified height and width.

# License
Released under the [MIT license](LICENSE).