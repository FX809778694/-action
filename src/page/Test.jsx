import React,{Component} from 'react';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from '../store/test/actions'

import '../assets/css/head.css'

class Test extends Component{
  constructor() {
    super()
    this.updateData = this.updateData.bind(this)
  }

  updateData() {
    console.log(111)

    let data = {
      name: "名称",
      value: "内容"
    }
    const {actions} = this.props
    actions.update(data)
    console.log(this.props)
  }
  componentDidMount() {
    console.log(this.props)

  }

  render() {
    const {data} = this.props
    console.log(data)
    return (
      <div className="test">
        我是测试页
        <a onClick={this.updateData}>{data.name}</a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.testReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)