'use strict'

import React,{Component} from 'react';
import propTypes from 'prop-types';

import User from './User.jsx';

export default class Users extends Component{
    static get propTypes(){
        return{
            users : propTypes.array
        }
    }

    constructor(props){
        super(props);
    }

    render(){
        const {users}=this.props;
        return <div>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => {
                        return <User key={user.id} user={user}/>
                    })
                }
                </tbody>
            </table>
        </div>
    }
}