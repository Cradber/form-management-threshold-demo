import {Field} from "react-final-form";
import {TextField} from "@mui/material";
import {required} from "./helpers";
import PropTypes from 'prop-types';

export const InputTextField = ({name, placeholder}) => {
    return (
        <Field name={name}
               initialValue={''}
               validate={required}
               subscription={{
                   error: true,
                   touched: true,
                   value: true
               }}
        >
            {
                ({input, meta}) => (
                    <>
                        <TextField label={placeholder}
                                   color={'secondary'}
                                   variant={'standard'}
                                   style={{marginTop: '1rem'}}
                                   id={name}
                                   error={!!(meta.touched && meta.error)}
                                   // helperText={meta.touched && meta.error ? 'Required': ''}
                                   fullWidth
                                   required
                                   {...input}
                        />
                    </>
                )
            }
        </Field>
    )
}

InputTextField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}
