import React, {Component} from 'react';

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filteredAtms: this.props.filteredAtms,
            apiError: this.props.apiError
        }

    }

    render() {

        let atms = this.props.atms;

        return (
            <div>

                <ul className='atmList'>
                    {atms.map((atm) => {
                        return <li
                            className='item-atm'
                            key={atm.id}
                            tabIndex={0}
                            id={atm.id}>
                            {atm.name}
                            </li>
                    })}
                </ul>
            </div>
        );
    }

}

export default Sidebar;