import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default class EachMessage extends React.Component {
	constructor(props){
		super(props);
		console.log(this.props);
	}

	render(){
		const {rowData} = this.props;
		const {avatar, first_name, time, message} = rowData;
		return(
			<TouchableOpacity>
				<View style= {{padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#e3e3e3'}}>
					<Image source={{uri:avatar}} resizeMode="contain" style={styles.profileView}/>
					<View style={{alignSelf:'center', justifyContent:'center'}}>
			            <View style = {{flexDirection:'row', justifyContent:'space-between', width:250}}>
			              <Text style={{fontWeight:'600', color:'#333'}}>{first_name}</Text>
			              <Text style={{fontWeight:'400', color:'#333', fontSize:10}}>{time}</Text>
			            </View>
			            <Text style ={{width:150, height:33, fontWeight:'300', color:'#333'}}>{message}</Text>
			        </View>
				</View>
			</TouchableOpacity>
		)
	}
}

const styles={
	profileView:{
		height:50, 
		width:50, 
		margin:10, 
		borderRadius:25, 
		backgroundColor:'#f8f8f8'
	}
}