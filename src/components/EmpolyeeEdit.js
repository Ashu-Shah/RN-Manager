import _ from 'lodash';
import Communications from 'react-native-communications';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common/index';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions/index';

class EmpolyeeEdit extends Component{
    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        })
    };

    onButtonPress = () => {
        const { name, phone, shift, employee } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: employee.uid });
    };

    onTextSchedulePress = () => {
        const { phone, shift } = this.props;
        //Communications.web('https://github.com/Ashu-Shah');
        //Communications.phonecall(phone, true);
        Communications.text(phone, `Your upcomming shift is on ${shift}`);
    };

    render() {
        return(
            <Card>
                <EmployeeForm/>

                <CardSection>
                    <Button onPress={this.onButtonPress}>Update</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextSchedulePress}>Text Schedule</Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return{ name, phone, shift }
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmpolyeeEdit);