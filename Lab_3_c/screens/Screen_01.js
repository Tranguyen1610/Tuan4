import { Text, StyleSheet, View,Image,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import { Rating } from 'react-native-ratings'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Screen_01 extends Component {
  render() {
    const {navigation}=this.props
    return (
      <View style={styles.container}>
        <View style={styles.mainImg}>
            <Image
                source={require('../assets/vsmart_live_xanh 2.png')}
                style={{width:230,height:300}}/>
        </View>
        <View style={styles.new}>
            <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        </View>
        <View style={styles.rate_con}>
            <Rating
                style={{marginRight:30}}
                startingValue={5}
                ratingCount={5}
                imageSize={30}
            />
            <Text>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.rate_con}>
            <Text style={{fontWeight:'bold',fontSize:20,marginRight:30}}>1.790.000 đ</Text>
            <Text style={{textDecorationLine:'line-through',color:'#6B6B6B',fontWeight:'bold'}}>1.790.000 đ</Text>
        </View>
        <View style={styles.rate_con}>
            <Text style={{color:'#FA0000',fontWeight:'bold',fontSize:10,marginRight:10}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <SimpleLineIcons name='question' size={15}/>
        </View>
        <View style={styles.new1}>
                <TouchableOpacity 
                    style={styles.choose_button}
                    onPress={()=>{
                        navigation.navigate('Screen_02');
                    }}>
                    <Text style={{marginRight:60}}>4 MÀU-CHỌN MÀU</Text>
                    <AntDesign name='right'/>
                </TouchableOpacity>
        </View>
        <View style={styles.new2}>
            <TouchableOpacity style={styles.mua_button}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>CHỌN MUA</Text>
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
        backgroundColor:'#fff',
    },
    mainImg:{
        flex:7,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    new:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start',
        width:'100%',
        paddingHorizontal:10,
    },
    rate_con:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:10,
    },
    new1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:10,
    },
    new2:{
        flex:2,
        justifyContent:'flex-end',
        alignItems:'center',
        width:'100%',
        paddingHorizontal:10,
        paddingBottom:20,
    },
    choose_button:{
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        width:'90%',
        padding:10,
        borderRadius:10,
        borderWidth:1,
    },
    mua_button:{
        backgroundColor:'#EE0A0A',
        width:'90%',
        padding:12,
        textAlign:'center',
        borderRadius:10,
    },
})