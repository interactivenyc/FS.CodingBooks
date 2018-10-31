import React, { Component } from 'react'

export default class UserCardDetailed extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="ui centered card">
                <div className="image">
                    <img src="/images/avatar2/large/elyse.png">
                </div>
                    <div className="content">
                        <a className="header">Elyse</a>
                    </div>
            </div>
                )
            }
}