import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, FlatList, TouchableOpacity } from 'react-native';

var cities = [{"id":1,"city_name":"Salem","date_from":"9/21/2015","date_to":"1/3/2016"},
{"id":2,"city_name":"Thanjavur","date_from":"10/30/2015","date_to":"2/28/2016"},
{"id":3,"city_name":"Trichy","date_from":"4/28/2016","date_to":"9/10/2016"},
{"id":4,"city_name":"Pondicherry","date_from":"10/11/2015","date_to":"7/27/2016"},
{"id":5,"city_name":"Madurai","date_from":"3/16/2016","date_to":"6/27/2016"},
{"id":6,"city_name":"Coimbatore","date_from":"10/9/2015","date_to":"6/21/2016"},
{"id":7,"city_name":"Erode","date_from":"7/17/2016","date_to":"9/24/2016"},
{"id":8,"city_name":"Kanyakumari","date_from":"2/5/2016","date_to":"1/18/2016"},
{"id":9,"city_name":"Chennai","date_from":"4/25/2016","date_to":"2/14/2016"},
{"id":10,"city_name":"Namakal","date_from":"2/9/2016","date_to":"3/1/2016"}]

var image1 = require("./../img/image1.png")
var image2 = require("./../img/image2.jpg")
var image3 = require("./../img/image3.jpg")
var image4 = require("./../img/image4.jpg")
var image5 = require("./../img/image5.jpg")
var image5 = require("./../img/image5.jpg")
var image6 = require("./../img/image6.jpg")
var image7 = require("./../img/image7.jpg")
var image8 = require("./../img/image8.jpg")
var image9 = require("./../img/image9.jpg")
var image10 = require("./../img/image10.jpg")
var image11 = require("./../img/image11.jpg")
var image12 = require("./../img/image12.jpg")
var image13 = require("./../img/image13.jpg")

var images = [
image1,
image2,
image3,
image4,
image5,
image6,
]
var images2 = [
image7,
image8,
image9,
image10,
image11,
image12,
image13,
]

var viewed = [{
  "id": 1,
  "ava": "https://robohash.org/rerumvelitaliquam.jpg?size=50x50&set=set1",
  "price": "$22.17",
  "name": "dui vel sem sed",
  "reviews": 52
}, {
  "id": 2,
  "ava": "https://robohash.org/aspernaturesterror.jpg?size=50x50&set=set1",
  "price": "$39.55",
  "name": "nec sem duis aliquam",
  "reviews": 78
}, {
  "id": 3,
  "ava": "https://robohash.org/nulladoloremest.png?size=50x50&set=set1",
  "price": "$39.84",
  "name": "accumsan tellus nisi",
  "reviews": 89
}, {
  "id": 4,
  "ava": "https://robohash.org/utdoloribusasperiores.bmp?size=50x50&set=set1",
  "price": "$30.73",
  "name": "porttitor pede justo eu",
  "reviews": 47
}, {
  "id": 5,
  "ava": "https://robohash.org/odioautsaepe.bmp?size=50x50&set=set1",
  "price": "$22.70",
  "name": "fermentum donec ut mauris",
  "reviews": 53
}, {
  "id": 6,
  "ava": "https://robohash.org/ullamdoloredolor.jpg?size=50x50&set=set1",
  "price": "$25.42",
  "name": "mauris eget massa tempor",
  "reviews": 75
}, {
  "id": 7,
  "ava": "https://robohash.org/eaquenostrumofficiis.jpg?size=50x50&set=set1",
  "price": "$23.02",
  "name": "augue vestibulum ante",
  "reviews": 55
}, {
  "id": 8,
  "ava": "https://robohash.org/esseomnisdolore.png?size=50x50&set=set1",
  "price": "$12.46",
  "name": "lacus curabitur at",
  "reviews": 74
}, {
  "id": 9,
  "ava": "https://robohash.org/temporibusenimquisquam.bmp?size=50x50&set=set1",
  "price": "$18.26",
  "name": "in sagittis dui",
  "reviews": 29
}, {
  "id": 10,
  "ava": "https://robohash.org/delectussolutaut.bmp?size=50x50&set=set1",
  "price": "$29.68",
  "name": "luctus ultricies eu",
  "reviews": 92
}];

var favs = [
{name:"It Yourts So Good", homes : 18, image: image7},
{name:"Underground Homes", homes : 4, image: image8},
{name:"Geodesic Domes", homes : 5, image: image9},
{name:"Smells Like Eames Spirit", homes : 22, image: image10},
{name:"Best of Bali", homes : 18, image: image11},
{name:"Family Fun around the World", homes : 26, image: image12},
{name:"Castles", homes : 26, image: image13},
{name:"Around The World in 15 Listings", homes : 15, image: image4},
{name:"Milano Design", homes : 20, image: image8},
{name:"Oui, Oui Paris", homes : 25, image: image6},
]

var i = -1;

export default class Home extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			datasource: cities,
			dataviewed: viewed,
			datafavs:favs
		}
	}

	cityBox = ({item, index}) => {
		return (
			
				<View style={{flex:1}}>
					<ImageBackground source={images[index]} resizeMode="stretch" style={styles.cityBox}>
						<View style={styles.cityBoxInside}>
							<Text style={{backgroundColor: 'rgba(0,0,0,0)', textAlign:'center', color: '#fff', fontSize: 25, fontWeight: '700'}}> {item.city_name} </Text>
							<Text style={{backgroundColor: 'rgba(0,0,0,0)', textAlign:'center', color: '#fff', fontSize: 13, fontWeight: '600'}}> {item.date_from} </Text>
						</View>
					</ImageBackground>
				</View>
		);
	}

	viewed = ({item, index}) => {
		return(
			<View style={{flex: 1, width: 130, height: 200, margin: 5, alignItems: 'center', justifyContent: 'center'}}>
				<ImageBackground source={images2[index]} resizeMode="stretch" style={styles.viewed} borderRadius={4} />
				<View style={{flex: 1}}>
					<Text style={{fontSize: 11, fontWeight: '600', marginBottom: 1}}>{item.name}</Text>
					<Text numberOfLines={2} style={{fontSize: 16, fontWeight: '600', marginBottom: 1}}>Photoshoot & adventure in Jos and theis anasfjk</Text>
					<Text style={{fontSize: 12, fontWeight: '200', marginBottom: 1}}>US{item.price} per person</Text>
					<Text style={{fontSize: 12, color: 'green', fontWeight: '200'}}> ***** {item.reviews}</Text>
				</View>
			</View>
		);
	}

	fav = ({item, index}) => {
		return(
			<View style={{flex: 1, width: 130, height: 110, margin: 5, alignItems: 'center', justifyContent: 'center'}}>
				<ImageBackground source={item.image} resizeMode="stretch" style={styles.viewed} borderRadius={4} />
				<View style={{flex: 1}}>
					<Text style={{fontSize: 11, fontWeight: '600'}}>{item.name}</Text>
				</View>
			</View>
		);
	}

	render(){
		return(
			<View style={{flex: 1}}>
				<ScrollView style={{flex: 1}}>
					<View style={styles.container}>
						<Text style={styles.main}>Welcome to Chennai, TamilNadu</Text>
						<TouchableOpacity style={styles.button}>
							<Text style={{color: '#fff', textAlign: 'center', fontWeight: '600'}}>View itinerary</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.container2}>
						<Text style={styles.title}>Recent Searches</Text>
						<FlatList
							data={this.state.datasource}
							renderItem={this.cityBox}
							keyExtractor={ (item) => item.id}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>

					</View>

					<View style={styles.container2}>
						<Text style={styles.title}>Recently Viewed</Text>
						<FlatList
							data={this.state.dataviewed}
							renderItem={this.viewed}
							keyExtractor={ (item) => item.id}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>
						<TouchableOpacity style={{marginHorizontal: 25, borderColor: 'green', borderWidth: 1, borderRadius: 4, paddingVertical: 10, paddingHorizontal: 20, alignItems: 'center', justifyContent: 'center' }}>
							<Text style={{fontSize: 16, color:'green'}}>SHOW ALL(195)</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.container2}>
						<Text style={styles.title}>Just For The Weekend</Text>
						<FlatList
							data={this.state.datasource}
							renderItem={this.cityBox}
							keyExtractor={ (item) => item.id}
							horizontal
							showsHorizontalScrollIndicator={false}
						/>
					</View>

					<View style={styles.container2}>
						<Text style={styles.title}>AirBnb Favourites</Text>
						<FlatList
							data={this.state.datafavs}
							renderItem={this.fav}
							keyExtractor={ (item) => item.id}
							numColumns={2}
							showsHorizontalScrollIndicator={false}
						/>
					</View>

				</ScrollView>
			</View>
		)
	}
}

var styles = {
	container: {
		height: 400,
		backgroundColor: '#ff585b',
		justifyContent: 'center',
	},
	container2: {

	},
	main:{
		fontSize: 25,
		textAlign: 'left',
		color: '#fff',
		fontWeight: '600',
		margin: 10,
		marginLeft: 20,
		marginRight: 30,
		width: 200
	},
		button:{
			margin: 10,
			marginLeft: 20,
			width: 150,
			padding: 10,
			borderColor: '#fff',
			borderRadius: 18,
			borderWidth: 2
		},
		title:{
			fontWeight: '400',
			fontSize: 20,
			color: '#333',
			margin: 20,
			marginBottom: 15
		},
	cityBox: {
		width:330, 
		height: 220,
		margin: 5,
		marginBottom: 30,
		justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#ccc',
	},
		cityBoxInside: {
			position: 'absolute',
		    top: 0,
		    bottom: 0,
		    left: 0,
		    right: 0,
		    justifyContent: 'center',
	    	alignItems: 'center',
		},
	viewed: {
		width: 130,
		height: 100,
		borderWidth: 1,
    	borderColor: '#fff',
		borderRadius: 4,
		backgroundColor: '#ddd'
	}
}