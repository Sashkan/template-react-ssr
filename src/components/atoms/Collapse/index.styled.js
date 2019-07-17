import styled from 'styled-components'
import RcCollapse from 'rc-collapse'

const StyledCollapse = styled.div`
  .customCollapse {
    font-family: 'Montserrat';
    .rc-collape-item {
    }
  }
  .customCollapseItem {
    background-color: ${props => (props.theme.primaryColor ? props.theme.primaryColor : '#1C61C6')};
    color: #fff;
    .rc-collapse-header {
      color: #fff;
    }
  }
`
export default StyledCollapse
