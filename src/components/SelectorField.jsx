import {Field} from "react-final-form";
import {FormControl, InputLabel, NativeSelect} from "@mui/material";
import PropTypes from "prop-types";

export const OptionSelector = ({value, children}) => (
    <option value={value}>{children}</option>
)

OptionSelector.propType = {
    value: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
}


export const SelectorField = ({name, placeholder, children}) => {

    return (
        <Field name={name}
               initialValue={children[0].props.value}
               subscription={{
                   active: true,
                   error: true,
                   touched: true,
                   value: true
               }}
        >
            {({input}) => (
                <FormControl fullWidth
                             style={{marginTop: '1rem'}}
                >
                    <InputLabel variant={'standard'}
                                color={'secondary'}
                                htmlFor={`${name}-uncontrolled-native`}
                                required
                    >
                        {placeholder}
                    </InputLabel>
                    <NativeSelect color={'secondary'}
                                  inputProps={{
                                      name: `${name}`,
                                      id: `${name}-uncontrolled-native`,
                                  }}
                                  {...input}
                    >
                        {children}
                    </NativeSelect>
                </FormControl>
            )}
        </Field>
    )
}
