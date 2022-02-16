import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState('');

    const getData = () => {
        fetch("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=")
        .then((res) => res.json())
        // .then((data) =>
        //     console.log(data.result.products[0].size.substr(1, data.result.products[0].size.length - 2).split('],['))
        // )
        .then((data) =>
            setData(data.result.products)
        )
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="App">
            <div className="header">
                <div className="row no-lr-margins">
                    <div className="col-xs-12 col-md-1">
                        <img src="images/logo.png" className="header-logo" alt="logo"/>
                    </div>
                    <div className="col-xs-12 col-md-8 balance-margin">
                        <ul className="main-menu">
                            <li>NEW IN</li>
                            <li>TOP WEAR</li>
                            <li>BOTTOM WEAR</li>
                            <li>COSMETICS</li>
                            <li>FOOTWEAR</li>
                            <li>WINTER WEAR</li>
                            <li>DRAPES</li>
                            <li>WISHFUL</li>
                            <li>SALE</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-md-3 balance-margin">
                        <input placeholer="Search"/>
                    </div>
                </div>
            </div>
            <div className="row no-lr-margins">
                <div className="col-xs-12 col-md-3">
                    <div className="side-menu-filter-box">
                        <div className="side-menu-filter-heading">FILTER</div>
                        <div className="side-menu-filter">Category</div>
                        <div className="side-menu-filter">Price</div>
                        <div className="side-menu-filter">Colour</div>
                        <div className="side-menu-filter">Size</div>
                        <div className="side-menu-filter">Neck Type</div>
                        <div className="side-menu-filter">Sleeve</div>
                        <div className="side-menu-filter">Occasion</div>
                        <div className="side-menu-filter">Length</div>
                        <div className="side-menu-filter">Fastening/Closure</div>
                        <div className="side-menu-filter">Pattern</div>
                        <div className="side-menu-filter">Ornamentation</div>
                        <div className="side-menu-filter">Fabric Family</div>
                        <div className="side-menu-filter">Closure</div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-9 pl-0">
                    <div className="row no-lr-margins">
                        <div className="col-xs-12 col-md-12">
                            <div className="items-count">
                                <select className="form-control">
                                    <option value="price_low">Price (Low to High)</option>
                                    <option value="selling_price">Price (High to Low)</option>
                                    <option value="discount">Discount</option>
                                    <option value="price">Price</option>
                                    <option value="product_position">Newest</option>
                                </select>
                                <p>189 Items</p>
                            </div>
                        </div>
                        {data && data.map((data, i) => (
                            <div key={i} className="col-xs-6 col-md-3">
                                <div className="product-display">
                                    <img src={data.image} style={{width:'100%'}} alt="product"/>
                                    <div className="product-view"><p>VIEW DETAILS</p></div>
                                    <div className="product-details">
                                        <p>{data.name}</p>
                                        <p>Rs. {data.price}</p>
                                    </div>
                                    {data.size.substr(1, data.size.length - 2).split('],[') &&
                                        <p className="product-size">Size - {data.size.substr(1, data.size.length - 2).split('],[').map(text => (
                                            <>{text} &nbsp;</>
                                        ))}</p>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;