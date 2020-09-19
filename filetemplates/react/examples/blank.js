exports.examples = (what, info) => {
    var r = ''
    switch(what) {

case 'module':
r =
`
import React, { Component } from 'react';
import { ExtPanel, ExtToolbar, ExtButton, ExtGrid, ExtGridcolumn } from "@sencha/ext-react";

class App extends Component {

  render() {
    return (
      <ExtPanel
        title="Panel"
        layout="fit"
        shadow="true"
        viewport="true"
        padding="10"
      >
        <ExtToolbar docked="top">
          <ExtButton text="button1"></ExtButton>
          <div>div with text</div>
          <ExtButton text="button2"></ExtButton>
        </ExtToolbar>
        <ExtGrid title="The Grid" shadow="true" onReady={ this.readyGrid }>
          <ExtGridcolumn text="name" dataIndex="name"></ExtGridcolumn>
          <ExtGridcolumn text="email" dataIndex="email" flex="1"></ExtGridcolumn>
        </ExtGrid>
      </ExtPanel>
    )
  }

  readyGrid = event => {
    var grid = event.detail.cmp;
    var data=[
      {name: 'Marc', email: 'marc@gmail.com'},
      {name: 'Nick', email: 'nick@gmail.com'},
      {name: 'Andy', email: 'andy@gmail.com'}
    ]
    grid.setData(data);
  }

}
export default App;

`
break;

default:
r = ``
break;

    }
    return r
}
