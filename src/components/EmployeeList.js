import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/index';
import ListItem from './ListItem';
import { Spinner } from './common/index';

class EmployeeList extends Component{

    componentWillMount() {
        this.props.employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employeesData }) {
        this.dataSource = employeesData;
    };

    renderItem({item}) {
        return(
            <ListItem item={item}/>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                {this.dataSource.length ?
                    <FlatList
                        data={this.dataSource}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.uid}
                    />
                    : <Spinner/>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const mapToStateProps = ({ employees }) => {
    let employeesData = [];
    for(employee in employees) {
        employeesData.push(Object.assign(employees[employee], {uid: employee}))
    }
    return { employeesData }
};

export default connect(mapToStateProps, { employeesFetch })(EmployeeList);