import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentTab: props.panes[0]};
  }

  createTabs(){
    return this.props.panes.map(pane => (
      <h1>{pane.title}</h1>
    ));
  }

  changeTab(currentTab){
    $(".tabs li").removeClass("active");
    $(`.${currentTab.title}`).addClass("active");
    this.setState( {currentTab} );
  }

  render(){
    return(
      <div className="tab-section">
        <h1>Tabs</h1>
        <ul className="tabs">
          {this.props.panes.map(pane => (
            <li className={pane.title} key={pane.title} onClick={this.changeTab.bind(this, pane)}>
              {pane.title}
            </li>
          ))}
        </ul>
        <p>{this.state.currentTab.content}</p>
      </div>
    );
  }
}

export default Tabs;
