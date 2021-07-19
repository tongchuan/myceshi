import React from 'react';
import ReactDOM from 'react-dom';
// import React, { useState, useEffect } from 'react';
// import Navigation from '../components/Navigation';
const element = document.createElement('div');

interface childInterface {
  width: number;
}

interface stateInterface {
  isShow: boolean;
  child: childInterface;
}

function TestChild(props: childInterface) {
  const { width } = props;
  console.log(width);
  return (
    <div className="test-child">
      <h1>Test</h1>
      <p>Child</p>
    </div>
  );
}

class Test extends React.Component<any, stateInterface> {
  constructor(props: any) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.state = {
      isShow: false,
      child: {
        width: 0
      }
    };
  }

  componentDidMount() {
    element.setAttribute('id', 'test');
    document.body.appendChild(element);
  }

  componentWillUnmount() {
    document.body.removeChild(element);
  }

  onFocus(event: React.SyntheticEvent) {
    console.log(event);
    this.setState({
      isShow: true
    });
  }

  render() {
    const { isShow, child } = this.state;
    return (
      <div>
        <input type="text" onFocus={this.onFocus} />
        {isShow && ReactDOM.createPortal(<TestChild width={child.width} />, element)}
      </div>
    );
  }
}

export default Test;
// function Test() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setCount((prevCount) => (prevCount + 1));
//   }, []);

//   return (
//     <div>
//       Product
//       {count}
//     </div>
//   );
// }

// export default Test;
