import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class Screen_02 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detail_con}>
            <Image style={styles.img} source={require('../assets/vsmart_live_xanh 2.png')}/>
            <Text style={{fontSize:18,width:250}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
        <View style={styles.choose_con}>
            <Text style={{fontSize:18,flex:1,}}>Chọn một màu bên dưới:</Text>
            <View style={{flexDirection:'column',justifyContent:'space-around',flex:10,alignItems:'center'}}>
                <TouchableOpacity style={{width:100,height:100,backgroundColor:'#C5F1FB'}}/>
                <TouchableOpacity style={{width:100,height:100,backgroundColor:'#F30D0D'}}/>
                <TouchableOpacity style={{width:100,height:100,backgroundColor:'#000000'}}/>
                <TouchableOpacity style={{width:100,height:100,backgroundColor:'#234896'}}/>
            </View>
            <TouchableOpacity style={{width:'100%',height:100,backgroundColor:'#4D6DC1',flex:1,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{textAlign:'center',fontSize:20,color:'#fff',fontWeight:'600'}}>XONG</Text>
            </TouchableOpacity>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    detail_con:{
        flex:2,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'flex-start',
        width:'100%',
        backgroundColor:'#fff',
        flexDirection:'row',
        paddingVertical:25,
    },
    choose_con:{
        flex:10,
        backgroundColor:'#C4C4C4',
        width:'100%',
        padding:10,
    },
    img:{
        width: 100,
        height: 110,
    },
})