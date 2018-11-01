import React from 'react'

export default function CartItem (props) {
    const { id, photo, title, price } = props
    return (
        <tr key={id}>
            <td className="ui small image"><img src={photo}></img></td>
                <td>
                    <div>
                        <div className="header">{title}</div>
                        <div className="meta">
                            <span className="price">by This Author</span>
                            <span className="stay"></span>
                        </div>
                        <div className="description">
                            <p>qty: 1???</p>
                        </div>
                    </div>
                </td>
            <td>{price}</td>
        </tr>
    )
}