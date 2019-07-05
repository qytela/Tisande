import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#9EA9F0' />
                <View style={{ backgroundColor: '#9EA9F0', height: hp('20%'), justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='ios-menu' size={hp('4%')} color='white' onPress={() => alert('Fansa')} />
                        <View style={{ marginLeft: wp('58%') }}>
                            <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: 'white' }}>RP 1.000.000</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: wp('90%'), height: hp('6%'), alignSelf: 'center', marginVertical: hp('-3%') }}>
                    <View style={{ flexDirection: 'row', elevation: 1, borderRadius: 6, backgroundColor: 'white', paddingLeft: wp('3%'), }}>
                        <TextInput
                            style={{ flex: 1, color: '#9EA9F0' }}
                            placeholder='Search'
                            placeholderTextColor='#9EA9F0'
                            underlineColorAndroid='transparent'
                        />
                        <Icon name='ios-search' size={hp('3%')} color='#9EA9F0' style={{ marginTop: hp('1.5%'), marginRight: wp('3%') }} />
                    </View>
                </View>
                <ScrollView>
                    <View style={{ height: hp('30%') }}>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={{ width: null, height: null, flex: 1, resizeMode: 'cover' }}
                        >
                            <View style={{ paddingLeft: wp('3.6%'), marginTop: hp('4%') }}>
                                <View style={{ flex: 2 }}>
                                    <Image source={require('../images/bg-book-detail.png')} />
                                </View>
                            </View>
                            <View style={{ paddingLeft: wp('3.6%'), marginTop: hp('4%') }}>
                                <View style={{ flex: 2 }}>
                                    <Image source={require('../images/bg-book-detail.png')} />
                                </View>
                            </View>
                            <View style={{ paddingLeft: wp('3.6%'), marginTop: hp('4%') }}>
                                <View style={{ flex: 2 }}>
                                    <Image source={require('../images/bg-book-detail.png')} />
                                </View>
                            </View>
                            <View style={{ paddingLeft: wp('3.6%'), marginTop: hp('4%') }}>
                                <View style={{ flex: 2 }}>
                                    <Image source={require('../images/bg-book-detail.png')} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: hp('2%') }}>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>18 Karakter Anak Bangsa</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>E Book</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>E Students</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>E School</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>E Learning</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>Home Work</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>Schedule School</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('UangJajan')} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#553C8B', borderRadius: 6, width: wp('90%'), height: hp('7%'), marginTop: hp('2%') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: wp('3.6%'), color: 'white' }}>Uang Jajan</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
