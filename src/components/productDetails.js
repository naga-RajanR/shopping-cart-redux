import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { addtoCart} from '../actions'
import { Carousel } from 'react-responsive-carousel';
import {FacebookShareButton, WhatsappShareButton,FacebookIcon,WhatsappIcon} from 'react-share'
const Title = styled.h2`
margin:10px 0px;
text-transform:uppercase;
`
// const FilterWrapper=styled.div`
// width:280px;
// position:absolute;
// top:0px;
// right:0px;
// @media (max-width: 768px) {
//     display:none;
//   }
// `
const ModalWrapper = styled.div`
// padding:20px;
display:flex;
@media (max-width: 768px) {
    flex-direction:column;
    width:100%;
   }
`
const GalleryContainer = styled.div`
width:50%;
border-right:1px solid black;
@media (max-width: 768px) {
    width:100%;
border-right:0px solid black;

   }
`
const ProductTitle = styled.h4`
margin:10px 0px;
text-transform:capitalize
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
const DetailsWrapper = styled.div`
@media (max-width: 768px) {
width:100%;
padding:0px 10px;
}
padding:0px 20px;
`
const Span = styled.span`
font-weight:lighter;
`
export class productDetails extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             open:false,
             selectedData:null
        }
    }
    
    componentDidMount() {
        let url=window.location.pathname
        const id=parseInt(url.split('/products/')[1])
        console.log('props',this.props,id)
        this.setState({
            selectedData:this.props.filterItems[id]
        })
    }
    onCloseModal=()=>{
        this.setState({open:false})
    }
    AddCart=()=>{
        this.props.addtoCart(this.state.selectedData)
    }
    render() {
        const {selectedData}=this.state
        const Width=window.innerWidth
        return (<div>
            {this.state.selectedData ? <ModalWrapper>
                <GalleryContainer>
                    <Carousel
                        showStatus={false}
                        showArrows={false}
                        showIndicators={false}
                        showThumbs={Width>375?true:false}
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
                       <Button onClick={this.AddCart}>
                        Add to cart</Button>}
                    {/* <Button style={{ margin: '10px 0px' }}
                        onClick={this.modalAddCart}>
                        {this.props.addedItems.findIndex(x => x.id === selectedData.id) !== -1 ?
                            "In cart" : 'Add to Cart'}
                    </Button> */}
                   <div style={{display:'flex'}}> 
                   <div style={{margin:'0px 10px'}}>
                   <FacebookShareButton  
                   quote='Check this product'
                   url={window.location.href}>
                       <FacebookIcon  size={32} round={true}/>
                   </FacebookShareButton>
                   </div>
                   <WhatsappShareButton  
                   quote='Check this product'
                   url={window.location.href}>
                       <WhatsappIcon  size={32} round={true}/>
                   </WhatsappShareButton>
                   </div>
                </DetailsWrapper>
            </ModalWrapper> : ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filterItems: state.products.items,
    addedItems: state.products.addedItems,
})


export default connect(mapStateToProps,{addtoCart})(productDetails)
