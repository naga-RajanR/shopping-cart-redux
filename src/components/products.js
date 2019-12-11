import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
// import Modal from 'react-responsive-modal';
// import { Carousel } from 'react-responsive-carousel';
import Fade from 'react-reveal/Fade';
import Filter from '../components/filter'
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addtoCart, showProducts } from '../actions'
// import { Checkbox } from '@material-ui/core';
const ProductsWrapper = styled.div`
// margin:20px;
// padding:20px;
position:relative;
display:flex;
// align-items:center;
// justify-content:center;
// flex-wrap:wrap;
`
const ProductContiner = styled.div`
display:flex;
transition:all 2s;

// align-items:center;
// width:70%;
// justify-content:center;
flex-wrap:wrap;
@media (max-width: 768px) {
   width:100%;
  }
`
const CardContainer = styled.div`
border:1px solid lightgray;
border-radius:10px;
cursor:pointer;
padding:10px;
width:260px;
height:400px;
margin:15px;
transition: transform .6s;
box-sizing:border-box;
// height:280px;
text-align:center;
box-shadow: 1px 1px 3px 0px lightgrey;
&:hover{
    transform: scale3d(1.006, 1.06, 1);
    box-shadow: 1px 1px 5px 1px lightgrey;
}

`
const ProductDetails = styled.div`
margin:0px;
padding:0px 20px;
text-align:left;
`
const HoverContent = styled.div`
visibility:hidden;
opacity:0;
position: absolute;
bottom: 0;
left: 0;
border-radius: 0px 0px 10px 10px;
right: 0;
background: #000000a6;
height: 10px;
transition:all .5s;
// transform: translateY(100px);
${CardContainer}:hover & {
    visibility:visible;
    opacity:1;
    height:120px;
    // z-index:2;
    // transform: translateY(0px);
  }
`

const ProductRate = styled.p`
margin:0px;
`
const ProductTitle = styled.h4`
margin:10px 0px;
text-transform:capitalize
`
const Image = styled.img`
height:300px;
`
const Button = styled.button`
padding:5px 10px;
margin:10px;
color:white;
background:#3f51b5;
cursor:pointer;
outline:none;
border-radius: 10px;
font-family: cursive;
border: 1px solid transparent;
&:hover{
box-shadow: 1px 2px 5px 1px #796e6ed1; 
}
`
const FilterWrapper=styled.div`
// border:1px solid black;
height:75vh;
`
const FilterContainer=styled.div`
width: ${props => props.show ? "200px" : "min-content"};
visibility:${props => props.show ? "visible" : "hidden"};
opacity:${props => props.show ? 1 : 0};
transition:all 2s;
`
const FilterButton=styled.button`
margin: 10px 0px;
    display: flex;
    transition:all 2s;
    width:${props => props.show ? "fill-available" : "90px"};
    align-items: center;
    justify-content: space-between;
    color: white;
    background: #3f51b5;
    cursor: pointer;
    outline: none;
    border-radius: 10px;
    font-family: cursive;
    border: 1px solid transparent;
`
export class products extends Component {
    state = {
        open: false,
        selectedData: null,
        showFilterOptions:false,
    };
    componentDidMount() {
        this.props.showProducts()
    }

    

    onCloseModal = () => {
        this.setState({ open: false });
    };
    modalAddCart = () => {
        this.onCloseModal()
        this.props.addtoCart(this.state.selectedData)
    }
    showFilter=()=>{
        this.setState({
        showFilterOptions:!this.state.showFilterOptions
    })
    }
    render() {
        const Width=window.innerWidth
        const { showFilterOptions } = this.state
        console.log("prop products", this.props,Width)
        return (<Fade>
            <ProductsWrapper>
                <FilterWrapper>
                    <FilterButton
                    show={this.state.showFilterOptions}
                    style={{margin:'10px 0px'}} 
                    onClick={this.showFilter}>
                    Filter <i style={{fontSize:'16px', marginLeft:'15px'}} 
                    className={showFilterOptions?'fa fa-chevron-left':"fa fa-chevron-right"}>
                    </i></FilterButton>
                    <FilterContainer show={this.state.showFilterOptions}>
                        <Filter/>                       
                    </FilterContainer>
                </FilterWrapper>
                <ProductContiner>
                    {this.props.filterItems.map((data, index) => {
                        return <CardContainer>
                            <Image src={data.img[0]} alt='product logo' width='70%' />
                            <ProductDetails>
                                <ProductTitle>{data.brand}</ProductTitle>
                                <ProductRate>{data.price} $</ProductRate>
                            </ProductDetails>
                            <HoverContent>
                                <ProductTitle style={{ color: 'white' }}>{data.brand}</ProductTitle>
                                <ProductRate style={{ color: 'white' }}>{data.price} $</ProductRate>
                               {this.props.addedItems.findIndex(x => x.id === data.id) !== -1 ?
                               <Button>In cart</Button>:
                               <Button onClick={() => { this.props.addtoCart(data) }}>
                                Add to cart</Button>}
                               <Link to={`/products/${index}`}> <Button>View</Button></Link>
                            </HoverContent>
                        </CardContainer>
                    })}
                </ProductContiner>    
                {/* {this.state.showFilterOptions?<FilterWrapper style={{position:this.state.showFilterOptions?'static':'absolute'}} >
                    <Filter close={this.closeFilter}/>                
                </FilterWrapper>:<p onClick={this.showFilter} className='filter-btn'>Filter</p>} */}
                
            </ProductsWrapper>
            </Fade>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productsList: state.products.items,
        addedItems: state.products.addedItems,
        filterItems: state.products.filteredItems
    }
}

export default connect(mapStateToProps, { addtoCart, showProducts })(products)
