import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common/index';

class ListItem extends Component {

    onRowPress = () => {
        Actions.employeeEdit({employee: this.props.item});
    };

    render() {
        let  { name } = this.props.item;
        return(
            <TouchableWithoutFeedback onPress={this.onRowPress}>
                <View>
                    <CardSection>
                        <Text style={styles.titleText}>{name}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        paddingLeft: 15,
        marginVertical: 10
    }
});

export default ListItem;