import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import bookima from './assets/book.png';
import { useState } from 'react';

export default function App() {
  const [qua,setqua] = useState('1');
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image 
          source={bookima}
          style={styles.img}/>
          <View style={{marginLeft:20}}>
            <Text style={{fontWeight:'bold',}}>Nguyên hàm tích phân và ứng dụng</Text>
            <Text style={{fontWeight:'bold',}}>Cung cấp bởi Tiki Trading</Text>
            <Text style={{color:'#EE0D0D',fontSize:18,fontWeight:'bold'}}>141.800 đ</Text>
            <Text style={{textDecorationLine:'line-through',color:"#808080"}}>141.800 đ</Text>
            <View style={styles.qua}>
              <TouchableOpacity 
                onPress={() => {
                  if(qua*1>0)
                    setqua(qua*1-1);
                } } >
                <Text style={{marginTop:4}}>-</Text>
              </TouchableOpacity>
              <TextInput  
                  style={styles.inputqua}
                  onChange={(e) => setqua(e.value)}>{qua}
                </TextInput>
              <TouchableOpacity
                onPress={() => setqua(qua*1+1)}>
                <Text style={{marginTop:4}}>+</Text>
                
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnbuylater}>
              <Text style={{color:'#134FEC'}}>Mua sau</Text>
              </TouchableOpacity> 
          </View>
        </View>
      </View>
    <View style={styles.container1}>
      <Text>Mã giảm giá đã lưu</Text>
        <TouchableOpacity style={styles.btnbuylater}>
        <Text style={{color:'#134FEC'}}>Xem tại đây</Text>
        </TouchableOpacity>
    </View>
      <View style={styles.container1}>
        <View style={{flexDirection:'row',borderWidth:1,borderRadius:2,width:220,padding:10,marginRight:20}}>
          <Text style={{backgroundColor:'#F2DD1B',width:50,marginRight:10}}></Text>
          <TextInput placeholder='Mã giảm giá'></TextInput>
        </View>
        <TouchableOpacity style={{backgroundColor:'#0A5EB7',padding:10}}>
            <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Áp dụng</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <Text style={{fontSize:14,}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <TouchableOpacity >
        <Text style={{color:'#134FEC',fontSize:14}}>Nhập tại đây?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#011627',marginRight:160}}>Tạm tính</Text>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#EE0D0D'}}>141.800 đ</Text>
      </View>
      <View style={styles.container}>
      </View>
      <View style={styles.container4}>
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:20,fontWeight:'bold',color:'#808080',marginRight:150}}>Thành tiền</Text>
          <Text style={{fontSize:20,fontWeight:'bold',color:'#EE0D0D'}}>141.800 đ</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'#E53935',marginVertical:15,width:'90%'}}>
        <Text style={{color:'#fff',fontSize:20,padding:10,textAlign:'center'}}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#C4C4C4',
    marginVertical:0,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'flex-start',
    backgroundColor: '#ecf0f1',
    flexDirection:'row',
    padding:20,
  },
  container1: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    paddingHorizontal:10,
  },
  container3: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    paddingHorizontal:10,
    marginVertical:20,
  },
  container4: {
    flex:1,
    alignItems:'center',
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
  img:{
    width:104,
    height:127,
  },
  qua:{
    flexDirection:'row',
  },
  inputqua:{
    width:30,
    fontWeight:'bold',
    textAlign:'center',
    fontSize:17,
  },
  btnbuylater:{
    marginLeft:100,
    
  },
});
