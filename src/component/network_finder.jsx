import React from 'react'
import Paper from 'material-ui/lib/paper'

import TopBar from './topbar/topbar'
import SearchArea from './search/search_area'
import ResultArea from './result/result_area'

export default class NetworkFinder extends React.Component {

  constructor(props) {super(props)}

  render() {
    console.log(this)
    const style = {
      height: 700,
      width: "90%"
    }
    return (
      <Paper style={style} zDepth={5}>
        <TopBar
          cart={this.props.cart}
          user={this.props.user}
          pass={this.props.pass}
          logged_in={this.props.logged_in}
          login={this.props.login}
          logout={this.props.logout}
          updateUser={this.props.updateUser}
          updatePass={this.props.updatePass}
          removeFromCart={this.props.removeFromCart}/>
        <SearchArea
          search={this.props.search}
          result={this.props.result}
          error={this.props.error}
          updateQuery={this.props.updateQuery}
          startSearch={this.props.startSearch}
          addResults={this.props.addResults}
          endSearch={this.props.endSearch}
          query={this.props.query}
        />
        <ResultArea
          networkLists={this.props.networkLists}
          cart={this.props.cart}
          isSearching={this.props.isSearching}
          addToCart={this.props.addToCart}
          vizSwitch={this.props.vizSwitch}
          viz={this.props.viz}/>
      </Paper>
    )
  }

}
