import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import Button from '../../components/Button/button';

import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { registerEvent } from '../../redux/actions/registerAction';
import { getRegisterData } from '../../redux/slice/registerSlice';

const RegisterScreen = ({ route }) => {
  const registerData = useSelector(getRegisterData);
  const { params } = route;
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm({
    defaultValues: registerData,
  });

  const onSubmit = async (data) => {

    // const response = await axios.post(ENDPOINTS.register, data);
    dispatch(registerEvent(data));
  };
  console.log({ registerData });
  return (
    <>

      <ScrollView style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>User Name</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="username"
            rules={{ required: true }}
          />

          {params?.isNew &&
            <>



              <Text style={styles.label}>Password</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    cursorColor={'#616163'}
                    onBlur={onBlur}
                    onChangeText={textValue => onChange(textValue)}
                    value={value}
                  />
                )}
                name="name"
                rules={{ required: true }}
              />
            </>

          }


          <Text style={styles.label}>Contact</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                keyboardType="numeric"
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="contactNumber"
            rules={{ required: true }}
          />
          <Text style={styles.label}>brand performance</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="brandPerformance"
            rules={{ required: true }}
          />

          <Text style={styles.label}>category</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="category"
            rules={{ required: true }}
          />


          <Text style={styles.label}>location</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="location"
            rules={{ required: true }}
          />

          <Text style={styles.label}>sponsor</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                cursorColor={'#616163'}
                onBlur={onBlur}
                onChangeText={textValue => onChange(textValue)}
                value={value}
              />
            )}
            name="sponsor"
            rules={{ required: true }}
          />


          <Button
            style={styles.button}
            textStyle={styles.buttonText}
            title={params?.isNew ? 'Register' : 'Update'}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 40,
  },

  label: {
    color: '#616163',
    marginHorizontal: 10,
    marginLeft: 0,
    fontWeight: 'semibold',
  },
  button: {
    height: 40,
    marginTop: 20,
    backgroundColor: '#6e3cd3',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    paddingTop: 10,
    gap: 10,
    padding: 8,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1.8,
    borderColor: '#cccccc',
    height: 40,
    padding: 10,
    borderRadius: 8,
  },
  newUser: {
    textAlign: 'center',
  },
  createUser: {
    color: '#6e3cd3',
  },
});
