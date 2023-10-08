import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FindFood = () => {
  return (
    <View style={styles.findFood}>
      <View style={styles.div}>
        <Image
          source={require('../assets/BulletedList.png')}
          style={styles.bulletedList}
        />
        <Image
          source={require('../assets/Account.png')}
          style={styles.account}
        />
        <View style={styles.overlap}>
          <View style={styles.overlapGroup}>
            <Image
              source={require('../assets/Nature.png')}
              style={styles.nature}
            />
            <Image
              source={require('../assets/scooter.png')}
              style={styles.deliveryBoyOn}
            />
            <View style={styles.rectangle} />
            <View style={styles.rectangle2} />
            <Text style={styles.textWrapper}>Fries</Text>
            <View style={styles.rectangle3} />
            <Text style={styles.textWrapper2}>Order Now</Text>
            <Text style={styles.theFastestInFood}>
              The fastest in
              {'\n'}
              food delivery.
            </Text>
            <Text style={styles.textWrapper3}>Drinks</Text>
          </View>
          <View style={styles.divWrapper}>
            <Text style={styles.textWrapper4}>Burger</Text>
          </View>
          <Text style={styles.textWrapper5}>Categories</Text>
        </View>
        <Text style={styles.textWrapper6}>Popular Burger</Text>
        <View style={styles.overlap2}>
          <View style={styles.rectangle4} />
          <Text style={styles.textWrapper7}>Royal Burger</Text>
          <View style={styles.rectangle5} />
          <Text style={styles.textWrapper8}>Chicken Burger</Text>
          <Image
            source={require('../assets/hamburger2.png')}
            style={styles.burgerSlant}
          />
          <Image
            source={require('../assets/hamburger1.png')}
            style={styles.hamburgerWithCheese}
          />
          <Image source={require('../assets/Add.png')} style={styles.add} />
          <Image source={require('../assets/Add2.png')} style={styles.img} />
          <Text style={styles.textWrapper9}>Spicy Withgarlle</Text>
          <Text style={styles.textWrapper10}>Spicy Withgarlle</Text>
          <Text style={styles.textWrapper11}>R79.99</Text>
          <Text style={styles.textWrapper12}>R65.00</Text>
        </View>
        <View style={styles.overlapGroup2}>
          <View style={styles.rectangle6} />
          <View style={styles.rectangle7} />
          <Text style={styles.textWrapper13}>Patty Burger</Text>
          <Image
            source={require('../assets/hamburger.png')}
            style={styles.hamburgerWithA}
          />
          <Image
            source={require('../assets/hamburger.png')}
            style={styles.hamburger}
          />
          <Image
            source={require('../assets/image-1.png')}
            style={styles.add2}
          />
          <Image source={require('../assets/Add.png')} style={styles.add3} />
          <Text style={styles.textWrapper14}>Spicy Withgarlle</Text>
          <Text style={styles.textWrapper15}>Spicy Withgarlle</Text>
          <Text style={styles.textWrapper16}>R49.99</Text>
          <Text style={styles.textWrapper17}>R69.99</Text>
          <Text style={styles.textWrapper18}>Beef Burger</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  findFood: {
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  div: {
    backgroundColor: '#d9d9d9',
    height: 932,
    position: 'relative',
    width: 430,
  },
  bulletedList: {
    height: 40,
    left: 13,
    position: 'absolute',
    top: 26,
    width: 40,
  },
  account: {
    height: 40,
    left: 377,
    position: 'absolute',
    top: 26,
    width: 40,
  },
  overlap: {
    height: 406,
    left: 1,
    position: 'absolute',
    top: 89,
    width: 429,
  },
  overlapGroup: {
    height: 406,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 429,
  },
  nature: {
    height: 286,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 429,
  },
  deliveryBoyOn: {
    height: 338,
    left: 248,
    position: 'absolute',
    top: 52,
    width: 181,
  },
  rectangle: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 59,
    left: 28,
    position: 'absolute',
    top: 203,
    width: 186,
  },
  rectangle2: {
    backgroundColor: '#80808080',
    borderRadius: 50,
    height: 59,
    left: 149,
    position: 'absolute',
    top: 347,
    width: 129,
  },
  textWrapper: {
    color: '#ffffff',
    fontFamily: 'Inter-Black',
    fontSize: 20,
    fontWeight: '900',
    left: 189,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 364,
    whiteSpace: 'nowrap',
  },
  rectangle3: {
    backgroundColor: '#80808080',
    borderRadius: 50,
    height: 59,
    left: 295,
    position: 'absolute',
    top: 347,
    width: 129,
  },
  textWrapper2: {
    color: '#ff0000',
    fontFamily: 'Inter-Bold',
    fontSize: 25,
    fontWeight: '700',
    left: 47,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 217,
    whiteSpace: 'nowrap',
  },
  theFastestInFood: {
    color: '#ff0000',
    fontFamily: 'Inter-Light',
    fontSize: 30,
    fontWeight: '300',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 106,
  },
  textWrapper3: {
    color: '#ffffff',
    fontFamily: 'Inter-Black',
    fontSize: 20,
    fontWeight: '900',
    left: 331,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 364,
    whiteSpace: 'nowrap',
  },
  divWrapper: {
    backgroundColor: '#ff000080',
    borderRadius: 50,
    height: 59,
    left: 0,
    position: 'absolute',
    top: 347,
    width: 129,
  },
  textWrapper4: {
    color: '#ffffff',
    fontFamily: 'Inter-Black',
    fontSize: 20,
    fontWeight: '900',
    left: 32,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 17,
    whiteSpace: 'nowrap',
  },
  textWrapper5: {
    color: '#000000',
    fontFamily: 'Inter-Black',
    fontSize: 20,
    fontWeight: '900',
    left: 10,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 304,
    whiteSpace: 'nowrap',
  },
  textWrapper6: {
    color: '#000000',
    fontFamily: 'Inter-Black',
    fontSize: 20,
    fontWeight: '900',
    left: 11,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 497,
    whiteSpace: 'nowrap',
  },
  overlap2: {
    height: 368,
    left: 13,
    position: 'absolute',
    top: 533,
    width: 177,
  },
  rectangle4: {
    backgroundColor: '#ffffff',
    borderRadius: 17,
    height: 150,
    left: 0,
    position: 'absolute',
    top: 38,
    width: 177,
  },
  textWrapper7: {
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 121,
    whiteSpace: 'nowrap',
  },
  rectangle5: {
    backgroundColor: '#ffffff',
    borderRadius: 17,
    height: 150,
    left: 0,
    position: 'absolute',
    top: 218,
    width: 177,
  },
  textWrapper8: {
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 292,
    whiteSpace: 'nowrap',
  },
  burgerSlant: {
    height: 124,
    left: 14,
    position: 'absolute',
    top: 0,
    width: 149,
  },
  hamburgerWithCheese: {
    height: 134,
    left: 14,
    position: 'absolute',
    top: 181,
    width: 149,
  },
  add: {
    height: 40,
    left: 128,
    position: 'absolute',
    top: 148,
    width: 40,
  },
  img: {
    height: 40,
    left: 128,
    position: 'absolute',
    top: 323,
    width: 40,
  },
  textWrapper9: {
    color: '#000000',
    fontFamily: 'Inter-ExtraLight',
    fontSize: 15,
    fontWeight: '200',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 145,
    whiteSpace: 'nowrap',
  },
  textWrapper10: {
    color: '#000000',
    fontFamily: 'Inter-ExtraLight',
    fontSize: 15,
    fontWeight: '200',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 316,
    whiteSpace: 'nowrap',
  },
  textWrapper11: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    fontWeight: '700',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 166,
    whiteSpace: 'nowrap',
  },
  textWrapper12: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    fontWeight: '700',
    left: 9,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 342,
    whiteSpace: 'nowrap',
  },
  overlapGroup2: {
    height: 380,
    left: 231,
    position: 'absolute',
    top: 521,
    width: 199,
  },
  rectangle6: {
    backgroundColor: '#ffffff',
    borderRadius: 17,
    height: 150,
    left: 9,
    position: 'absolute',
    top: 50,
    width: 177,
  },
  rectangle7: {
    backgroundColor: '#ffffff',
    borderRadius: 17,
    height: 150,
    left: 9,
    position: 'absolute',
    top: 230,
    width: 177,
  },
  textWrapper13: {
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    left: 17,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 299,
    whiteSpace: 'nowrap',
  },
  hamburgerWithA: {
    height: 153,
    left: 22,
    position: 'absolute',
    top: 180,
    width: 151,
  },
  hamburger: {
    height: 148,
    left: 0,
    position: 'absolute',
    top: 0,
    width: 199,
  },
  add2: {
    height: 40,
    left: 146,
    position: 'absolute',
    top: 160,
    width: 40,
  },
  add3: {
    height: 40,
    left: 146,
    position: 'absolute',
    top: 335,
    width: 40,
  },
  textWrapper14: {
    color: '#000000',
    fontFamily: 'Inter-ExtraLight',
    fontSize: 15,
    fontWeight: '200',
    left: 17,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 324,
    whiteSpace: 'nowrap',
  },
  textWrapper15: {
    color: '#000000',
    fontFamily: 'Inter-ExtraLight',
    fontSize: 15,
    fontWeight: '200',
    left: 17,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 156,
    whiteSpace: 'nowrap',
  },
  textWrapper16: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    fontWeight: '700',
    left: 17,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 354,
    whiteSpace: 'nowrap',
  },
  textWrapper17: {
    color: '#000000',
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    fontWeight: '700',
    left: 17,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 178,
    whiteSpace: 'nowrap',
  },
  textWrapper18: {
    color: '#000000',
    fontFamily: 'Inter-SemiBold',
    fontSize: 20,
    fontWeight: '600',
    left: 17,
    letterSpacing: 0,
    lineHeight: 'normal',
    position: 'absolute',
    top: 133,
    whiteSpace: 'nowrap',
  },
});

export default FindFood;
