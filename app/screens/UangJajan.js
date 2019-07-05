import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class UangJajan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor='#9EA9F0' />
                <View style={{ backgroundColor: '#9EA9F0', height: hp('25%'), alignItems: 'flex-start', paddingTop: hp('5%') }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name='ios-menu' size={hp('4%')} color='white' onPress={() => alert('Fansa')} style={{ paddingLeft: wp('5.5%') }} />
                        <View style={{ paddingLeft: wp('25%') }}>
                            <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: 'white' }}>UANG JAJAN</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: hp('3%') }}>
                        <View style={{ paddingLeft: wp('20%') }}>
                            <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: 'white' }}>Saldo                    : </Text>
                        </View>
                        <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: 'white' }}>RP 1.000.000</Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: hp('1%') }}>
                        <View style={{ paddingLeft: wp('20%') }}>
                            <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: 'white' }}>Jumlah User       : </Text>
                        </View>
                        <Text style={{ fontSize: wp('4%'), fontWeight: 'bold', color: 'white' }}>25</Text>
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
                <View style={{ marginTop: hp('8%'), flexDirection: 'row' }}>
                    <View style={{ height: hp('17%'), width: wp('25%'), marginLeft: wp('6.2%') }}>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../images/lainnya.png')} style={{ height: hp('10%'), width: wp('22%') }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Sampah</Text>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Sekolah</Text>
                        </View>
                    </View>
                    <View style={{ height: hp('17%'), width: wp('25%'), marginLeft: wp('6.2%') }}>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../images/lainnya.png')} style={{ height: hp('10%'), width: wp('22%') }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Susu</Text>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Buah</Text>
                        </View>
                    </View>
                    <View style={{ height: hp('17%'), width: wp('25%'), marginLeft: wp('6.2%') }}>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../images/lainnya.png')} style={{ height: hp('10%'), width: wp('22%') }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Buku</Text>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Jualan</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: hp('8%'), flexDirection: 'row' }}>
                    <View style={{ height: hp('17%'), width: wp('25%'), marginLeft: wp('6.2%') }}>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../images/lainnya.png')} style={{ height: hp('10%'), width: wp('22%') }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Pulsa</Text>
                        </View>
                    </View>
                    <View style={{ height: hp('17%'), width: wp('25%'), marginLeft: wp('6.2%') }}>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../images/lainnya.png')} style={{ height: hp('10%'), width: wp('22%') }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Arisan</Text>
                        </View>
                    </View>
                    <View style={{ height: hp('17%'), width: wp('25%'), marginLeft: wp('6.2%') }}>
                        <View style={{ flex: 2, alignItems: 'center' }}>
                            <Image source={require('../images/lainnya.png')} style={{ height: hp('10%'), width: wp('22%') }} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: '#553C8B' }}>Lainnya</Text>
                        </View>
                    </View>
                </View>
                {/* 
                Footer
                <View style={{ marginTop: hp('13%') }}>
                    <View style={{ backgroundColor: 'white', height: 130 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 5 }}>
                                
                            </View>
                        </View>
                    </View>
                </View>
                */}
            </View>
        );
    }
}
