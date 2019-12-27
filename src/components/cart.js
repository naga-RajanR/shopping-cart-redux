import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import Modal from 'react-responsive-modal';
// import Checkbox from '../components/checkbox'
import { removeItem, addQuantity, removeQuantity } from '../actions'

const CartWrapper = styled.div`
// margin:20px;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
// flex-wrap:wrap;
`
const Title = styled.h2`
margin:0px;
`
const CartContainer = styled.div`
display:flex;
align-items:center;
justify-content: space-evenly;
width: calc(100% - 200px);
padding: 10px 20px;
box-sizing: border-box;
border: 1px solid lightgrey;
border-radius: 10px;
margin: 10px 20px;
@media (min-width: 769px) and (max-width: 1024px) {
    width:100%;
   }
@media (max-width: 768px) {
    flex-direction:column;
    width:100%;
   }
`
const Image = styled.img`
height: 150px;
`
const ProductDetails = styled.div`
// width:50%;
`
const SubHeader = styled.h3`
margin:10px 0px;
text-transform:capitalize;
`
const ButtonContainer = styled.div`

`
const P = styled.p`
margin:5px 0px;

`
const RemoveItem = styled.div`
// width:10%;
`
const Button = styled.button`
padding:5px 10px;
margin:10px 0px;
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
const PriceWrapper = styled.h3`
width: 100%;
display: flex;
margin:10px 0px;
justify-content: flex-end;
`
const RemoveItemWrapper = styled.div`
width:280px;
box-sizing:border-box;
@media (max-width: 768px) {
    flex-direction:column;
    width:240px;
   }
`
// const Button=styled.button``
export class cart extends Component {
    state = {
        open: false,
        deleItem: null
    };

    onOpenModal = (data) => {
        this.setState({
            open: true,
            deleItem: data
        });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    removeCartItem = () => {
        this.onCloseModal()
        this.props.removeItem(this.state.deleItem.id)
    }
    render() {
        console.log("cart PRops", this.props.cartItems)
        return (<Fade>
            <CartWrapper>
                <Title>Cart items</Title>
                {this.props.cartItems.length > 0 ? <>
                    {this.props.cartItems.map((data, index) => {
                        return <CartContainer>
                            <Image src={data.img[0]} />
                            <ProductDetails>
                                <SubHeader>{data.brand}</SubHeader>
                                <P>{data.desc}</P>
                                <P>Quantity: <span>{data.quantity}</span></P>
                                <P>Price: {data.price} $</P>
                                <ButtonContainer>
                                    <Button onClick={() => { this.props.addQuantity(data.id) }}>+</Button>
                                    <Button disabled={data.quantity === 1 ? true : false}
                                        onClick={() => { this.props.removeQuantity(data.id) }}
                                        style={{ margin: '10px' }}>-</Button>
                                </ButtonContainer>
                            </ProductDetails>
                            <RemoveItem>
                                <Button onClick={() => { this.onOpenModal(data) }} style={{ background: 'red' }}>Remove</Button>
                            </RemoveItem>
                        </CartContainer>
                    })}
                    <PriceWrapper>Total Price: <span style={{ fontWeight: 'lighter', marginLeft: '5px' }}> {this.props.total} $</span></PriceWrapper>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <RemoveItemWrapper>
                            <SubHeader style={{ marginTop: '20px' }}>Remove item</SubHeader>
                            {this.state.deleItem ? <div style={{ display: 'flex' }}>
                                <Image height="80x" width="80px" src={this.state.deleItem.img[0]} />
                                <div style={{ marginLeft: '20px' }}>
                                    <P>Price: {this.state.deleItem.price} $</P>
                                    <P>Are you sure you want to remove this item?</P>
                                    <Button style={{ background: 'red' }}
                                        onClick={this.removeCartItem}
                                    >
                                        Remove
                               </Button>
                                </div>
                            </div> : ""}

                        </RemoveItemWrapper>
                    </Modal>
                </> :<>
                    <P style={{ margin: '20px 0px' }}>Looks like your cart is empty.. click below to add products</P>
                    {/* <Checkbox/> */}
                    <Link className="link" to='/products'>
                    <Button>Go to shopphig</Button>
                    </Link>
                    </>}
            </CartWrapper>
            </Fade>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.products.addedItems,
        total: state.products.total
    }
}

export default connect(mapStateToProps, { removeItem, addQuantity, removeQuantity })(cart)
