const CartWidget = () => {
    return(
    <div className='cart'>
        <img src={require('../assets/002-shopping-bag-1.png')} className="cart-pic" alt="cart"/>
        <span className="item__Total">0</span>
    </div>
    )
};

export default CartWidget;