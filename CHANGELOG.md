## Changes in 2.0.0 (2017-04-18)

### [Breaking changes]
- Directories structure changed. All production files moved to `dist` folder.
- `blackLoader` prop removed from `SpinnerLoader`.
- `color` prop removed from `BubbleLoader`.
- `shouldReduceSize` props changed to `shouldExpand`. Default value `shouldExpand={true}`. 

`color` and `blackLoader` props are removed leaving you a posibility to set them using CSS.

Setting color of `SpinnerLoader`:
```css
.spinner-loader .loader-container .loader {
    color: green;
}
```

Setting color of `BubbleLoader`:
```css
.bubble-loader .bounce {
    background-color: red;
}
```

### [Fixes]
- Fixed issue that blocked the ability to set color of `SpinnerLoader` and `BubbleLoader` using CSS.

### [Dev]
- `glob-uglifyjs` version updated.
- `pushstate-server` moved to `example`.
- `react` and `@types/react` versions updated.
- `tslint` added.
- `css-to-ts` added to have css in TypeScript files.
- Example build changed (check README.md for more information).
- LoaderBase introduced as a base class for all loaders.

## Changes in 1.0.1 (2017-02-05)

### [Dev]
- `@types/react` version fixed to `15.0.0`.


## Changes in 1.0.0 (2017-02-05)

### [Feature]
- Loaders size is expanded and centered by default.
- Reduced and expanded loaders examples added.
- `shouldReduceSize` prop added.
- `spinner-loader` default class name added to `SpinnerLoader`.

### [Dev]
- `node-sass` version updated.
- `@types/react` updated.

### [Breaking changes]
- `loader-small` class name changed to `bubble-loader` for `BubbleLoader`.
- Additional container added for `SpinnerLoader`.