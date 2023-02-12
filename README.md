### <div align="center">Modal-RT</div>

<br>
<br>

### Mount `<Modal />` Component in any component (Root component prefered)

### `src/index.tsx`

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Modal } from 'modal-rt';

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Modal />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Use `modal` api from any component

### `src/components/component.tsx`

```
import React from 'react';
import { modal } from 'modal-rt';

interface Props {
  name: string;
}

const Component: React.FC<Props> = ({ name }) => {
    const revealModal = () => {
        modal(<div>Hello</div>)
    }


  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button
        onClick={revealModal}
      >Reveal Modal</button>
    </div>
  );
};

export default Component;
```

## Api

| Api             | Type                                  | Value               | Description                                                                                                 |
| --------------- | ------------------------------------- | ------------------- | ----------------------------------------------------------------------------------------------------------- |
| modal()         | `string`, `JSX.Element` or `function` | Default `null`      | Text or React component which to be showed in the modal                                                     |
| modal.close(id) | `string`                              | default `undefined` | Close a modal by providing modal id as parameter. If `id` id is `undefined` it will close all active modal. |

## Options for modal api

`modal(<div>Hey</div>, options)`

### Options

```
{
    animation: true or false
    customTrigger: true or false,
}
```

| Option        | Type      | Value           | Description                                                                             |
| ------------- | --------- | --------------- | --------------------------------------------------------------------------------------- |
| animation     | `boolean` | Default `true`  | Triggers Zoom-In and Zoom-Out animation                                                 |
| customTrigger | `boolean` | default `false` | Triggers default close button. Custom close funtionality can be achived. See advanched. |

## Advanched

A function which returns a React component or JSX.Element can also be passed in `modal()` function.

The function will receive a modal object which has a id property.

Example:

```
import React from 'react';
import { modal } from 'modal-rt';

interface Props {
  name: string;
}

const Component: React.FC<Props> = ({ name }) => {
    const revealModal = () => {
        modal((modal) => <Component2 id={modal.id} />, { customTrigger: true })
    }


  return (
    <div>
      <h1>Hello, {name}!</h1>
      <button
        onClick={revealModal}
      >Reveal Modal</button>
    </div>
  );
};

export default Component;


interface Props2 {
  id: string;
}

const Component2: React.FC<Props2> = ({ id }) => {
    const close = () => {
        modal.close(id)
    }


  return (
    <div>
      <h1>Hello, Modal!</h1>
      <button
        onClick={close}
      >Close</button>
    </div>
  );
};

export Component2;
```
