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
