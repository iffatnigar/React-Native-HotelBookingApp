import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;
  // console.log(item);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: COLORS.white,
        paddingBottom: 20,
        // backgroundColor: 'yellow',
      }}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      <ImageBackground style={style.headerImage} source={item.image}>
        <View style={style.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="bookmark-border" size={28} />
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <Icon name="place" size={28} color={COLORS.white} />
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          paddingHorizontal: 20,
          // backgroundColor: 'green',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
        <Text style={{fontSize: 12, fontWeight: 400, color: COLORS.grey}}>
          {item.location}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            // backgroundColor: 'yellow',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row'}}>
              <Icon name="star" size={20} color={COLORS.orange} />
              <Icon name="star" size={20} color={COLORS.orange} />
              <Icon name="star" size={20} color={COLORS.orange} />
              <Icon name="star" size={20} color={COLORS.orange} />
              <Icon name="star" size={20} color={COLORS.grey} />
            </View>
            <Text style={{fontSize: 18, marginLeft: 5, fontWeight: 'bold'}}>
              4.0
            </Text>
          </View>
          <Text style={{fontSize: 13, color: COLORS.grey}}>365reviews</Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{lineHeight: 20, color: COLORS.grey}}>
            {item.details}
          </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingLeft: 20,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Price per night</Text>
        <View style={style.priceTag}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: COLORS.grey}}>
            ${item.price}
          </Text>
          <Text style={{fontSize: 12, fontWeight: 'bold', color: COLORS.grey}}>
            +breakfast
          </Text>
        </View>
      </View>
      <View style={style.btn}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: COLORS.white,
          }}>
          {' '}
          Buy Now
        </Text>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  headerImage: {
    height: 400,
    // width: '100%',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
    // backgroundColor: 'yellow',
  },
  header: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: COLORS.primary,
    Top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default DetailsScreen;
