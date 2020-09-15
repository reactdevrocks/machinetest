import React, { memo } from 'react';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import {
    StyleSheet,
    Text, View,
    ScrollView, Dimensions
} from 'react-native';

const ChartScreen = ({ navigation }) => (
    <ScrollView>
        <View style={styles.container}>
            <Text style={styles.name}>Users</Text>
            <VerticalBarGraph
                data={[20, 45, 28, 80, 99, 43, 50]}
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                width={Dimensions.get('window').width - 90}
                height={200}
                barRadius={5}
                barWidthPercentage={0.65}
                barColor='#53ae31'
                baseConfig={{
                    hasXAxisBackgroundLines: false,
                    xAxisLabelStyle: {
                        position: 'right',
                        //prefix: '$'
                    }
                }}
                style={{
                    marginBottom: 30,
                    padding: 10,
                    paddingTop: 20,
                    borderRadius: 20,
                    backgroundColor: `#dff4d7`,
                    width: Dimensions.get('window').width - 70
                }}
            />
            <Text style={styles.name}>Posts</Text>
            <VerticalBarGraph
                data={[20, 45, 28, 80, 99, 43, 50]}
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                width={Dimensions.get('window').width - 90}
                height={200}
                barRadius={5}
                barWidthPercentage={0.65}
                barColor='#53ae31'
                baseConfig={{
                    hasXAxisBackgroundLines: false,
                    xAxisLabelStyle: {
                        position: 'right',
                        //prefix: '$'
                    }
                }}
                style={{
                    marginBottom: 30,
                    padding: 10,
                    paddingTop: 20,
                    borderRadius: 20,
                    backgroundColor: `#dff4d7`,
                    width: Dimensions.get('window').width - 70
                }}
            />
            <Text style={styles.name}>Comments</Text>
            <VerticalBarGraph
                data={[20, 45, 28, 80, 99, 43, 50]}
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
                width={Dimensions.get('window').width - 90}
                height={200}
                barRadius={5}
                barWidthPercentage={0.65}
                barColor='#53ae31'
                baseConfig={{
                    hasXAxisBackgroundLines: false,
                    xAxisLabelStyle: {
                        position: 'right',
                        //prefix: '$'
                    }
                }}
                style={{
                    marginBottom: 30,
                    padding: 10,
                    paddingTop: 20,
                    borderRadius: 20,
                    backgroundColor: `#dff4d7`,
                    width: Dimensions.get('window').width - 70
                }}
            />
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        backgroundColor: "#00BFFF",
        height: 60,
    },
    name: {
        fontSize: 16,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 0,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
});

export default memo(ChartScreen);
