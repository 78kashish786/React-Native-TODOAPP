import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
  return (
    <View style={styles.Items}>
      <View style={styles.ItemLeft}>
        <View style={styles.square}></View>
        <Text style ={styles.ItemText}>{props.text}</Text>
      </View>
      <View style = {styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  Items: {
    backgroundColor :"#fff",
    padding :15,
    borderRadius :12,
    flexDirection :"row",
    alignItems :"center",
    justifyContent :"space-between",
    marginBottom :20,
    
  },
  ItemLeft :{
    flexDirection :"row",
    alignItems :"center",
    flexWrap :"wrap",
  },
  square :{width:24,
    height:24,
    backgroundColor :"#55BCF6",
    opacity :0.4,
    borderRadius : 5,
    marginRight :15,

    
  },
  circular :{
    width:12,
    height :12,
    borderColor:  "blue",
    borderWidth :2,
    borderRadius :5,
  },
  ItemText : {
    maxWidth :80,
      },


});

export default Task;
