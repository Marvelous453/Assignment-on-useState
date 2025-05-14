import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image} from 'react-native';

const SignUp = () => {
  return (
   
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ marginBottom: 40, alignItems: 'center', paddingTop: 20}}>
        <View style={{ backgroundColor: '#e3f2fd', height: 300, width: 300, borderRadius: 30}}>
         <View style={{ backgroundColor: '#2F56F4', height: 250, width: 300, borderRadius: 20}}>
         <View style={{ backgroundColor: 'blue', height: 220, width: 300, borderRadius: 20, padding: 10}}>
          <Text style={{  fontSize: 30, color: 'white',fontWeight: 'bold', marginBottom: 15, marginLeft: 20, paddingTop: 20}}>Quizai</Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white',marginLeft: 20, }}>Register New Account</Text>
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', marginLeft: 20,}}>
            Already have an account?
            <Text style={{ color: 'purple', fontSize: 15, fontWeight:'700' }}> Sign In</Text>
          </Text>
</View>
          </View>
          </View>  
        </View>

        {/* Full Name */}
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8}}> Full Name</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#dedede', borderRadius: 10, paddingHorizontal: 10,  marginBottom: 15, height: 50,}}>
      
         <Image source= {{ uri: 'https://img.icons8.com/?size=100&id=34105&format=png&color=000000'}}
         style={{ height: 30, width: 30}}
         />
         
          <TextInput style={{ fontSize: 18, fontWeight: '600', color: 'gray'}}  placeholder="  Salamalekum Abibat" />
        </View>

        {/* Email */}
         <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8}}> Email</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#dedede', borderRadius: 10, paddingHorizontal: 10, marginBottom: 15, height: 50,}}>
          <Image source= {{ uri: 'https://img.icons8.com/?size=100&id=94652&format=png&color=000000'}}
         style={{ height: 25, width: 25}}
         />
          <TextInput style={{ fontSize: 18, fontWeight: '600', color: 'gray'}} placeholder="   Salamalekum Abibat@gmail.com"/>
        </View>

        {/* Password */}
         <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8}}> Password</Text>
        <View style={{ flexDirection: 'row',alignItems: 'center',backgroundColor: '#dedede', borderRadius: 10, paddingHorizontal: 10, marginBottom: 15, height: 50,}}>
           <Image source= {{ uri: 'https://img.icons8.com/?size=100&id=69549&format=png&color=000000'}}
         style={{ height: 25, width: 25}} />
          <TextInput style={{ fontSize: 18, fontWeight: '600',color: 'gray'}} placeholder="   ***********"/>
        </View>

        {/* Confirm Password */}
         <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8}}> Confirm Password</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#dedede', borderRadius: 10, paddingHorizontal: 10, marginBottom: 15, height: 50,}}>
            <Image source= {{ uri: 'https://img.icons8.com/?size=100&id=69549&format=png&color=000000'}}
         style={{ height: 25, width: 25}}/>
          <TextInput style={{ fontSize: 18, fontWeight: '600', color: 'gray'}} placeholder="   ************"/>
        </View>

        <TouchableOpacity style={{  backgroundColor: 'blue', borderRadius: 10, paddingVertical: 14, alignItems: 'center', marginTop: 10,}}>
          <Text style={{  color: 'white', fontWeight: 'bold', fontSize: 18,}}>Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>

  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    paddingTop: 30,

  },
});
