/**
 * Message Component Demo for uxcore
 * @author eternaslky
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const Button = require('uxcore-button');
const Message = require('../src');

Message.config({
  getContainer: () => {
    const div = document.createElement('div');
    div.className = 'uxcore';
    document.body.appendChild(div);
    return div;
  },
  // multipleInstance: false,
});


class Demo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleClick(type) {
    Message[type](type, 10);
  }

  render() {
    const me = this;
    return (
      <div>
        <Button onClick={me.handleClick.bind(me, 'success')}>显示成功提示</Button>
        <Button onClick={me.handleClick.bind(me, 'info')}>显示普通提示</Button>
        <Button onClick={me.handleClick.bind(me, 'error')}>显示错误提示</Button>
        <Button onClick={me.handleClick.bind(me, 'loading')}>显示加载提示</Button>
        <Button onClick={me.handleClick.bind(me, 'clear')}>清除</Button>
      </div>
    );
  }
}

module.exports = Demo;