import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff045',
        height: '100%',
    },
    greenButton: {
        backgroundColor: '#17d454',
        color: 'black',
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    blueButton: {
        backgroundColor: '#63b8f3',
        color: 'black',
        alignItems: "center",
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonText:{
        fontWeight: 'bold',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10,
        fontSize: 20
    },
    input: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 40, 
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    },
    textContainer: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    text1: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text2: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});