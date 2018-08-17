import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/index';

class EmployeeList extends Component{

    componentWillMount() {
        this.props.employeesFetch();
        //this.createDataSource(this.props.employees);
    }

    componentWillReceiveProps(nextProps) {
        //this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        this.dataSource = employees;
    };

    render() {
        return(
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        )
    }
}

export default connect(null, { employeesFetch })(EmployeeList);

//var peopleArray3 = Object.keys(peopleObjj).map(i => {
//    peopleObjj[i]
//    return{...peopleObjj[i], id: i}
//})

//var y = []
//for(x in employees){
//    y.push(Object.assign(employees[x], {id: x}))
//}