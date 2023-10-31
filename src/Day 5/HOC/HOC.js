import React, { useState } from 'react';

const HOC = (BiddingData) => {

    const BiddingFunction = () => {
        const [auction, setAuction] = useState(1);
        const handleAuction = () => {
            setAuction(auction * 2);
        }

        const handleAuction1 = () => {
            setAuction(auction * val);
        }
        return (
            <BiddingData auction = {auction}  handleAuction =  {handleAuction} handleAuction1 ={handleAuction1} />
        )
    }
    return BiddingFunction;
    
}

export default HOC;