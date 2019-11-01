// import React from 'react';

// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';


// export default function CheckboxLabels() {
//   const [state, setState] = React.useState({
//     checkedA: false,
//     checkedB: false,
//   });

//   const handleChange = name => event => {
//     setState({ ...state, [name]: event.target.checked });
//   };

//   return (
//     <FormGroup>
//       <FormControlLabel
//         control={
//           <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
//         }
//         label="Secondary"
//       />
//       <FormControlLabel
//         control={
//           <Checkbox
//             checked={state.checkedB}
//             onChange={handleChange('checkedB')}
//             value="checkedB"
//             color="primary"
//           />
//         }
//         label="Primary"
//       />
//     </FormGroup>
//   );
// }


import React from "react"
import PropTypes from "prop-types"
import Checkbox from "react-simple-checkbox"
// import Icons from "../../utilities/Icons"

import styled from "styled-components"

const propTypes = {
  IconName: PropTypes.string,
  name: PropTypes.string,
}

const defaultProps = {
  IconName: "",
  name: "Lenovo",
  disp: "",
  value: false,
}
const CheckboxWrapper = styled.label`
  // display:flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  width: 100%;
  cursor: pointer;
`
const Label = styled.span`
  margin: 0px 10px;
  text-transform:capitalize;
`
const ChkBox = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
`
export default class checkbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ChkBox>
          {/* <IconWrapper>  */}
          {/* <Icons name={this.props.IconName} width="20px" height="20px" /> */}
          <CheckboxWrapper for={this.props.name}>
            <Label>{this.props.name}</Label>
          </CheckboxWrapper>
          {/* </IconWrapper> */}
          <Checkbox
            onChange={value => this.props.onChange(value)}
            checked={this.props.value}
            size="3"
            id="lenovo"
            className="check_box"
            tickSize="3"
            borderThickness="1"
            backAnimationDuration={100}
            tickAnimationDuration={200}
            color={{
              backgroundColor: "#3f51b5",
              borderColor: "#3f51b5",
              uncheckedBorderColor: "#3f51b5",
              tickColor: "#fff",
              outline: "none",
              uncheckedBackgroundColor: "#fff",
            }}
          />
        </ChkBox>
      </React.Fragment>
    )
  }
}

checkbox.propTypes = propTypes
checkbox.defaultProps = defaultProps