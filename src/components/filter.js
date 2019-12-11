import React,{Component} from "react"
import styled from "styled-components"
import { connect } from 'react-redux'

import {brandFilter} from '../actions'
import CheckBox from './checkbox'

const propTypes = {}

const defaultProps = {
  checkBox: ['lenovo', 'apple', 'moto', 'samsung','huwaei','redmi','micromax']
}
const ShareChk = styled.div`
  margin: 10px 0px;
`
const FilterContainer = styled.div`
border:1px solid lightgray;
height:fit-content;
padding:10px;
border-radius:10px;

`
const Title = styled.h2`
margin:10px 0px;
`
const SubHeader = styled.h3`
margin:10px 0px;
`
 class sharingCheckbox extends Component {
  state = {
    show: true,
    checks: [],
  }
  isElementExist = (array, ele) => {
    let count = 0
    array.forEach(element => {
      if (element === ele) return true
      count += 1
    })
    if (count !== array.length) return true
    return false
  }
  addElements = element => {
    if (!this.isElementExist(this.state.checks, element))
      this.setState({ checks: [...this.state.checks, element] },()=>{
        this.props.brandFilter(this.state.checks)
      })
  }
  delElements = element => {
    if (this.isElementExist(this.state.checks, element))
      this.setState({
        checks: [...this.state.checks].filter(
          x => JSON.stringify(element) !== JSON.stringify(x)
        ),
      },()=>{
        this.props.brandFilter(this.state.checks)
      })
  }
  OnChange = (element, cond) => {
    if (cond) this.addElements(element)
    else this.delElements(element)
  }

  render() {
    // console.log("state", this.state.checks,this.props)
    return (
      <FilterContainer>
        {/* <Title>Filter Options</Title> */}
        <ShareChk>
          <SubHeader>Brands</SubHeader>
          {this.props.checkBox.map((ele, index) => (
            <React.Fragment>
              {index ? (
                <hr
                  style={{
                    borderColor: "rgba(242, 242, 242, 0.3)",
                    display: `${this.props.disp}`,
                  }}
                />
              ) : null}
              <CheckBox
                name={ele}
                value={this.isElementExist(this.state.checks, ele)}
                onChange={checks => this.OnChange(ele, checks)}
              />
            </React.Fragment>
          ))}
        </ShareChk>
      </FilterContainer>
    )
  }
}
export default connect(null,{brandFilter})(sharingCheckbox)

sharingCheckbox.propTypes = propTypes
sharingCheckbox.defaultProps = defaultProps
