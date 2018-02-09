import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Icon from 'react-icons-kit';
import { ic_account_box } from 'react-icons-kit/md/ic_account_box';
import { ic_email } from 'react-icons-kit/md/ic_email';
import { ic_lock_open } from 'react-icons-kit/md/ic_lock_open';

class Icon2 extends React.Component {
  render() {
    if (this.props.id === '1') {
      return (<Icon icon={ic_account_box} />);
    } else if (this.props.id === '2') {
      return (<Icon icon={ic_email} />);
    } else if (this.props.id === '3') {
      return (<Icon icon={ic_lock_open} />);
    }
  }
}


class Field extends React.Component {
  render() {
    return (
      <input type="text" value={this.props.placeholder} />
    );
  }
}

class Form extends React.Component {
  render() {
    return (<div> <div className="fieldC"><Icon2 id="1" /> <Field placeholder="Username" /> </div><br />
      <div> <Icon2 id="2" /><Field placeholder="Email address" />  </div><br />
      <div><Icon2 id="3" /><Field placeholder="Password" /> <Field placeholder="Confirm Password" /></div>
    </div>
    );
  }
}

class Heading extends React.Component {
  render() {
    return (
      <h1>Registration form </h1>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div className="heading">
          <Heading />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Board />,
  document.getElementById('root'),
);
