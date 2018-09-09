import React, { Component } from 'react';
import { Picker, Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common/index';
import { employeeUpdate } from '../actions/index';

class EmployeeForm extends Component{

    constructor() {
        super();
        this.days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    render() {
        const { name, phone, shift, employeeUpdate } = this.props;
        return(
            <View>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Ashu"
                        returnKeyType="next"
                        value={name}
                        onChangeText={value => employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="0346-1234567"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={value => employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{flexDirection: 'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        selectedValue={shift}
                        onValueChange={value => employeeUpdate({ prop: 'shift', value })}
                    >
                        {this.days.map(day => <Picker.Item key={day} label={this.capitalizeFirstLetter(day)} value={day}/>)}
                    </Picker>
                </CardSection>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    pickerTextStyle: {
        color: '#000',
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapToStateProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return{ name, phone, shift }
};

export default connect(mapToStateProps, {employeeUpdate})(EmployeeForm);