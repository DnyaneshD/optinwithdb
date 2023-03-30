import React from "react";

const SummaryWidget = () => {

    return (
    <div className="summary highlighted-box">
        <h3>Summary</h3>
        <div className="desc">
            <h4>Items:</h4>
            <div className="item">
                <p>Job posting:</p>
                <span className="price">$0,00</span>
            </div>
            <div className="item">
                <p>Promo plan:</p>
                <span className="price">$0,00</span>
            </div>
            <div className="item tax">
                <p>Tax</p>
                <span className="price">$0,00</span>
            </div>
            <div className="item total desc">
                <h3>Total</h3>
                <span className="price">$0,00</span>
            </div>
        </div>
    </div>
    )
}

export default SummaryWidget;

