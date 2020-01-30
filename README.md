## Read progressbar

When you want to show the user how much they have scrolled by showing a progressbar at the top of the window.
The progressbar is commonly used when you have a lot of text content on your site.

## Installation

```
    npm i read-progressbar
```

### [Demo](https://stackblitz.com/edit/read-progressbar-example?file=index.tsx)

## Examples

```js
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReadProgressBar from 'read-progressbar';

interface AppProps {}
interface AppState {}

class App extends Component<AppProps, AppState> {
  myRef;

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div>
        <ReadProgressBar attachTo={this.myRef} />
        <div style={{ height: '2000px' }} ref={this.myRef}></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
```

## API

---

| Prop            | Type   | Description                             |
| --------------- | ------ | --------------------------------------- |
| attachTo        | Ref    | The container you want to track         |
| color           | string | the color of the progressbar            |
| backgroundColor | string | The background color of the progressbar |
