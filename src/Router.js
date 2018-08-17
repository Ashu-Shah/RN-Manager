import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Router, Scene, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

export default RouterComponent = () => {
    return(
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login"/>
                </Scene>

                <Scene key="main">
                    <Scene
                        onRight={() => Actions.employeeCreate()}
                        rightTitle="Add"
                        rightButtonStyle={styles.rightButtonStyle}
                        rightButtonTextStyle={styles.rightButtonTextStyle}
                        key="employeeList"
                        component={EmployeeList}
                        title="Employees"
                        initial
                    />
                    <Scene
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Create Employee"
                    />
                </Scene>
            </Stack>
        </Router>
    )
}

const styles = StyleSheet.create({
    rightButtonStyle: {
        padding: 5
    },
    rightButtonTextStyle: {
        textAlign: 'center'
    }
});