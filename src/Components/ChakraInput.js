import React, {useState} from 'react'
import { Input, Textarea, Select, Radio, RadioGroup, Checkbox, CheckboxGroup, Stack, FormErrorMessage, FormLabel, FormControl } from "@chakra-ui/core"; 
import {Field} from 'formik'
import TextError from './TextError'
function ChakraInput(props) {
    const{label, name, ...rest} = props
    
    // const [value, setValue] = React.useState("3");
    
    return (
        <Field name={name}>
            {
                ({field, form}) =>{
                    return(
                    <FormControl isInvalid={form.errors[name] && form.touched[name]} size="sm" position="relative" m="auto">
                    <FormLabel htmlFor={name} left="0px">{label}</FormLabel>
                    <Input id={name} name={name} {...rest} {...field}/>
                    <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
                    </FormControl>)
                }
            }
        </Field>
            

            /* <Stack />
            <Input />
            <Textarea />
            <Select />
            <RadioGroup >
            <Radio />
            </RadioGroup>
            <CheckboxGroup />
            <Checkbox /> */
    )
}

export default ChakraInput
