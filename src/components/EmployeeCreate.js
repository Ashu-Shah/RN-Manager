import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common/index';
import { employeeCreate } from '../actions/index';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component{

    constructor() {
        super();

    }

    onButtonPress = () => {
        const { name, phone, shift, employeeCreate } = this.props;
        employeeCreate({ name, phone, shift: shift || 'monday' })
    };

    render() {

        return(
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={this.onButtonPress}>Create</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return{ name, phone, shift }
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate)