import React, { Component} from 'react';
import {StyleSheet,View, Text, Image, ScrollView, Platform, Dimensions, TouchableOpacity, StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Status from '../components/status';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

var component;

if(Platform.OS === "ios"){
	var heightScreen = Dimensions.get('window').height;
}else{
	var heightScreen = Dimensions.get('window').height - StatusBar.currentHeight;
}

var iconMenu = <Icon name="bars" size={20} color="#fff" />;
var iconConfig= <Icon name="cog" size={20} color="#fff" />;

var widthScreen = Dimensions.get('window').width;

export default class Inicio extends Component{

	constructor(props){
		super(props);
		this.state = {
			filters: [
				{
					name: "Yoga",
					image: require("../img/ic_yoga.png")
				},
				{
					name: "Upper Body",
					image: require("../img/ic_upper_body.png")
				},
				{
					name: "Lower Body",
					image: require("../img/ic_lower_body.png")
				},
				{
					name: "Dance",
					image: require("../img/ic_dance.png")
				},
				{
					name: "Yoga",
					image: require("../img/ic_yoga.png")
				}
			],
			exercices:[
				{
					name: "Corrida",
					image: require("../img/running.png"),
					calories: 400,
					time: 30,
					weight: 52,
					when: ""
				},
				{
					name: "Bicicleta",
					image: require("../img/cycling.png"),
					calories: 630,
					time: 40,
					weight: 52,
					when: "today"
				},
				{
					name: "Musculação",
					image: require("../img/gym2.png"),
					calories: 950,
					time: 60,
					weight: 52,
					when: ""
				},
				{
					name: "Yoga",
					image: require("../img/yoga.png"),
					calories: 200,
					time: 80,
					weight: 52,
					when: "yesterday"
				}
			]
		}
		component = this;
	}

	render() {
		return (
			<View style={styles.content}>
				<Status backgroundColor="#262F38"/>
				<View style={styles.header}>
					<TouchableOpacity>
						{iconMenu}
					</TouchableOpacity>
					<Text style={[styles.whiteText, styles.title]}>MEU PERFIL</Text>
					<TouchableOpacity>
						{iconConfig}
					</TouchableOpacity>
					<View style={styles.linha}></View>
					<View style={styles.corrosel}>
						{
							this.state.filters.map((item,index)=>{
								return(
									<TouchableOpacity activeOpacity={0.8} onPress={()=>{

											aux = this.state.filters;
											aux[index].check = item.check?false:true;

											this.setState({filters:aux});
										}}>
										<View style={[styles.contentCheck,item.check?{opacity:1}:{opacity:0}]}>
											<Image source={require("../img/correct.png")} style={styles.check}/>
										</View>
										<LinearGradient  start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#7F38F4','#7F38F4','#F22B48']} style={styles.filter}>

											<Image style={styles.filterImage} source={item.image}/>
										</LinearGradient>
									</TouchableOpacity>
								)
							})
						}
					</View>
				</View>
				<ScrollView style={styles.scrollView}>

					{
						this.state.exercices.map((item,index)=>{
							return(
								<View style={styles.contentCard}>
									<View style={[styles.imageCardContent,item.name != "Yoga"?{paddingBottom:10}:{}]}>
										<Image style={styles.imageCard} source={item.image}/>
									</View>
									<View style={styles.card}>
										<View style={styles.circleContent}>
											<View style={styles.circle}></View>
										</View>
										<View style={styles.cardInfo}>
											<Text style={[styles.titleCard, styles.whiteText]}>{item.name.toUpperCase()}</Text>
											<View style={styles.shortInfoContent}>
												<View style={[styles.shortInfo,{paddingRight:3, borderRightWidth:1, borderRightColor:"rgba(255,255,255,0.1)"}]}>
													<Image source={require('../img/ic_bike.png')} style={styles.iconInfo}/>
													<Text style={[styles.whiteText, styles.shortInfoValue]}>{item.calories} kcal</Text>
												</View>
												<View style={[styles.shortInfo,{paddingRight:3, borderRightWidth:1, borderRightColor:"rgba(255,255,255,0.1)"}]}>
													<Image source={require('../img/ic_time.png')} style={styles.iconInfo}/>
													<Text style={[styles.whiteText, styles.shortInfoValue]}>{item.time%60 ==0?(item.time/60)+" h":item.time+" m"} </Text>
												</View>
												<View style={[styles.shortInfo,{marginRight:0}]}>
													<Image source={require('../img/ic_balance.png')} style={styles.iconInfo}/>
													<Text style={[styles.whiteText, styles.shortInfoValue]}>{item.weight} kg</Text>
												</View>
											</View>
											<View style={styles.buttonContent}>
												<TouchableOpacity style={[styles.buttonCard,item.when == "today"?{backgroundColor:"#FD3C29", borderColor:"transparent"}:{borderWidth:1, borderStyle:"solid", borderColor:"rgba(255,255,255,0.6)"}]}>
													<Text style={[styles.whiteText, styles.buttonText]}>HOJE</Text>
												</TouchableOpacity>
												<TouchableOpacity style={[styles.buttonCard, item.when == "yesterday"?{backgroundColor:"#19B996", borderColor:"transparent"}:{borderWidth:1, borderStyle:"solid", borderColor:"rgba(255,255,255,0.6)"}]}>
													<Text style={[styles.whiteText, styles.buttonText]}>ONTEM</Text>
												</TouchableOpacity>
											</View>
										</View>
									</View>
								</View>
							)
						})
					}
				</ScrollView>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	content: {
		height:heightScreen,
		backgroundColor:"#262F38",
		paddingBottom:20
	},
	header:{
		width:"100%",
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between",
		marginBottom:10,
		flexWrap:"wrap",
		paddingTop:18,
		paddingLeft:25,
		paddingRight:25
	},
	title:{
		fontFamily:"Montserrat Light",
		fontSize:25

	},
	linha:{
		backgroundColor:"#3D454D",
		height:2,
		width:"100%",
		marginTop:20
	},
	corrosel:{
		height:70,
		width:"100%",
		flexDirection:"row",
		backgroundColor:"#3D454D",
		alignItems:"center",
		justifyContent:"space-around",
		borderRadius:8,
		paddingLeft:10,
		paddingRight:10,
		marginBottom:25
	},
	scrollView:{
		flex:1,
		paddingLeft:25,
		paddingRight:25,
	},
	contentCard:{
		width:"100%",
		flexDirection:"column",
		justifyContent:"center",
		height:135,
		marginTop:10
	},
	card:{
		flexDirection:"row",
		alignItems:"center",
		width:"100%",
		borderRadius:8,
		backgroundColor:"#3D454D",
		height:115
	},
	imageCardContent:{
		width:(widthScreen-50)*0.41,
		height:135,
		position:"absolute",
		zIndex:2
	},
	imageCard:{
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'contain'
	},
	circleContent:{
		width:"41%",
		height:"100%",
		alignItems:"center",
		justifyContent:"center"
	},
	circle:{
		width:100,
		height:100,
		borderRadius:50,
		backgroundColor:"#2B343E"
	},
	cardInfo:{
		flexDirection:"column",
		justifyContent:"center"
	},
	titleCard:{
		fontSize:18,
		fontFamily:"Montserrat Medium"
	},
	whiteText:{
		color:"#FEFFFF"
	},
	shortInfoContent:{
		flexDirection:"row",
		justifyContent:"flex-start",
		alignItems:"center",
		marginTop:5,
		marginBottom:10,
		width:widthScreen-50-((widthScreen-50)*0.41)

	},
	shortInfo:{
		flexDirection:"row",
		alignItems:"center",
		marginRight:10
	},
	shortInfoValue:{
		fontSize:10,
		fontFamily:"Montserrat Medium"
	},
	iconInfo:{
		marginRight:5
	},
	buttonContent:{
		flexDirection:"row"
	},
	buttonCard:{
		paddingBottom:1,
		paddingTop:1,
		paddingBottom:0,
		paddingLeft:10,
		paddingRight:10,
		borderRadius:15,
		marginRight:5
	},
	buttonText:{
		fontSize:9,
		color:"rgba(255,255,255,0.6)",
		fontFamily:"Montserrat Medium"
	},
	filter:{
		width:50,
		height:50,
		borderRadius:25,
		alignItems:"center",
		justifyContent:"center",
		transform:[{rotate:"-75deg"}]
	},
	filterImage:{
		transform:[{rotate:"75deg"}]
	},
	check:{
		width:null,
		height:null,
		resizeMode:"cover",
		flex:1,
		borderWidth:1,
		borderColor:"#FFF",
		borderRadius:8
	},
	contentCheck:{
		width:16,
		height:16,
		position:"absolute",
		zIndex:2,
		left:38

	}

});
