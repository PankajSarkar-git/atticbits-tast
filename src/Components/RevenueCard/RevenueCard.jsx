import React from 'react'
import "./RevenueCard.css"
const RevenueCard = ({data}) => {
    const {name , change , amount , previous, growth} = data
    return (
        <div className="revenue-card">
          <div className="revenue">
            <h2 className="revenue-title">{name}</h2>
            <p className="revenue-change">{change}%</p>
          </div>
          <h3 className="revenue-amount">${amount}</h3>
          <div className="revenue-breakdown">
            <p className="revenue-previous">${previous}</p>
            <p className="revenue-growth">+ ${growth}</p>
          </div>
        </div>
      );
}

export default RevenueCard
