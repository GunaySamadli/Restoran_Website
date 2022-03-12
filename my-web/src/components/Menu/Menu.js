import { React, useState } from 'react';
import { Tabs, Tab } from "@material-ui/core";
import '../../styles/Menu.css';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lovely from './Lovely';
import Popular from './Popular';
import Launch from './Launch';



const Menu = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    }
    return (
        <div className='menu'>
            <div className="menu-info">
                <h5 className="menu-title"> Food Menu</h5>
                <h1 className="menu-head">Most Popular Items</h1>
            </div>
            <div className="menu-tabs">
                <Container>
                    <Row>
                        <Tabs value={selectedTab} onChange={handleChange} centered >
                            <Tab label={
                                <div className='tab-menu'>
                                    <i className="fa fa-coffee fa-2x tab-text-primary"></i>
                                    <small className="tab-small">Popular</small>
                                    <h6 className="tab-text">Breakfast</h6>
                                </div>
                            }>
                            </Tab>
                            <Tab label={
                                <div className='tab-menu'>
                                    <i className="fa fa-hamburger fa-2x tab-text-primary"></i>
                                    <small className="tab-small">Special</small>
                                    <h6 className="tab-text">Launch</h6>
                                </div>
                            }>
                            </Tab>
                            <Tab label={
                                <div className='tab-menu'>
                                    <i className="fa fa-utensils fa-2x tab-text-primary"></i>
                                    <small className="tab-small">Lovely</small>
                                    <h6 className="tab-text">Dinner</h6>
                                </div>
                            }>
                            </Tab>
                        </Tabs>
                        {selectedTab === 0 && <Popular />}
                        {selectedTab === 1 && <Lovely />}
                        {selectedTab === 2 && <Launch />}
                    </Row>
                </Container>
            </div>
        </div>

    )
}

export default Menu




// import { React, useState } from 'react';
// import '../../styles/Menu.css';
// import { MenuItemData } from "./MenuItemData";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Container, Row, Col } from 'react-bootstrap';


// const Menu = (index) => {
//     const [items, setItems] = useState(MenuItemData);



//     const filterItem = (categoryItem) => {
//         const updatedIems = MenuItemData.filter((cuurentElem) => {
//             return cuurentElem.category === categoryItem;
//         })

//         setItems(updatedIems);

//     }

//     return (
//         <div className='menu'>
//             <div className="menu-info">
//                 <h5 className="menu-title"> Food Menu</h5>
//                 <h1 className="menu-head">Most Popular Items</h1>
//             </div>
//             <div className="menu-tabs">
//                 <div className="tab-menu" onClick={() => filterItem('Popular')}>
//                     <i className="fa fa-coffee fa-2x tab-text-primary"></i>
//                     <small className="tab-small">Popular</small>
//                     <h6 className='tab-text'>Breakfast</h6>
//                 </div>
//                 <div className="tab-menu" onClick={() => filterItem('Launch')}>
//                     <i className="fa fa-hamburger fa-2x tab-text-primary"></i>
//                     <small className="tab-small">Special</small>
//                     <h6 className="tab-text">Launch</h6>
//                 </div>
//                 <div className="tab-menu" onClick={() => filterItem('Lovely')}>
//                     <i className="fa fa-utensils fa-2x tab-text-primary"></i>
//                     <small className="tab-small">Lovely</small>
//                     <h6 className="tab-text">Dinner</h6>
//                 </div>
//             </div>
//             <Container>
//                 <Row>
//                     {
//                         items.map((elem) => {
//                             const { id, name, img, desc, price } = elem;

//                             return (
//                                 <Col md={6} key={id}>
//                                     <div className="tab-items">
//                                         <div className="tab-item">
//                                             <img src={img} alt="" />
//                                             <div className="tab-item-info">
//                                                 <h5 className="tab-item-title">
//                                                     <span>{name}</span>
//                                                     <span className="tab-text-primary">${price}</span>
//                                                 </h5>
//                                                 <small>{desc}</small>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </Col>
//                             )

//                         })
//                     }

//                 </Row>
//             </Container>
//         </div>

//     )
// }

// export default Menu

