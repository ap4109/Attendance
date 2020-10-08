import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component{
    next = ()=> {this.props.navigation.navigate('Scan')}
    render(){
        return(
            <View style={{justifyContent:'center', flex:1, alignItems:'center'}}>
               
                
            <TouchableOpacity onPress  = {this.next} 
            style ={{borderWidth:2, backgroundColor: 'skyblue', height:40, alignItems:'center', borderColor:'black',borderRadius:20, width:100}}
            >
                <Text style={{ fontSize:20, fontWeight:'bold', marginTop:4 }}>SCAN</Text>
            </TouchableOpacity>
            
            </View>
        )
    }
}