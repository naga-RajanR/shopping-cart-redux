import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Modal from 'react-responsive-modal';
import { Carousel } from 'react-responsive-carousel';

import Filter from '../components/filter'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addtoCart, showProducts } from '../actions'
// import { Checkbox } from '@material-ui/core';
const ProductsWrapper = styled.div`
margin:20px;
padding:20px;
display:flex;
// align-items:center;
// justify-content:center;
// flex-wrap:wrap;
`
const ProductContiner = styled.div`
display:flex;
// align-items:center;
width:70%;
// justify-content:center;
flex-wrap:wrap;
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
const Title = styled.h2`
margin:10px 0px;
text-transform:uppercase;
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
const ModalWrapper = styled.div`
padding:20px;
display:flex;
`
const GalleryContainer = styled.div`
width:50%;
border-right:1px solid black;
`
const DetailsWrapper = styled.div`
padding:0px 20px;
`
const Span = styled.span`
font-weight:lighter;
`

export class products extends Component {
    state = {
        open: false,
        selectedData: null
    };
    componentDidMount() {
        this.props.showProducts()
    }

    onOpenModal = (data) => {
        this.setState({
            open: true,
            selectedData: data
        }, () => { console.log("selectedData", this.state.selectedData) });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    modalAddCart = () => {
        this.onCloseModal()
        this.props.addtoCart(this.state.selectedData)
    }
    render() {
        const { selectedData } = this.state
        console.log("prop products", this.props)
        return (
            <ProductsWrapper>
                <div style={{ width: '26%', marginRight: '30px' }}>
                    <Filter />
                </div>
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
                                <Button onClick={() => { this.onOpenModal(data) }}>View</Button>
                            </HoverContent>
                        </CardContainer>
                    })}
                </ProductContiner>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    {this.state.selectedData ? <ModalWrapper>
                        <GalleryContainer>
                            <Carousel
                                showStatus={false}
                                showArrows={false}
                                showIndicators={false}
                            >
                                {selectedData.img.map(data => {
                                    return <div>
                                        <img width='100px' alt='product logo' src={data} />
                                    </div>
                                })}
                            </Carousel>
                        </GalleryContainer>
                        <DetailsWrapper>
                            <Title>{selectedData.model}</Title>
                            <Title style={{ color: '#3f51b5' }}>{selectedData.price} $</Title>
                            <ProductTitle>Brand: <Span>{selectedData.brand}</Span></ProductTitle>
                            <ProductTitle>Description: <Span>{selectedData.desc}</Span></ProductTitle>
                            <ProductTitle>Camera: <Span>{selectedData.specifications.camera}</Span></ProductTitle>
                            <ProductTitle>Size: <Span>{selectedData.specifications.size}</Span></ProductTitle>
                            <ProductTitle>CPU: <Span>{selectedData.specifications.cpu}</Span></ProductTitle>
                            <ProductTitle>Battery: <Span>{selectedData.specifications.battery}</Span></ProductTitle>
                            <ProductTitle>Memory: <Span>{selectedData.specifications.memory}</Span></ProductTitle>
                            {this.props.addedItems.findIndex(x => x.id === selectedData.id) !== -1 ?
                               <Button>In cart</Button>:
                               <Button onClick={this.modalAddCart}>
                                Add to cart</Button>}
                            {/* <Button style={{ margin: '10px 0px' }}
                                onClick={this.modalAddCart}>
                                {this.props.addedItems.findIndex(x => x.id === selectedData.id) !== -1 ?
                                    "In cart" : 'Add to Cart'}
                            </Button> */}
                        </DetailsWrapper>
                    </ModalWrapper> : ""}
                </Modal>
            </ProductsWrapper>
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
