import {useState} from "react";
import {Field} from "react-final-form";
import {TextField} from "@mui/material";
import PropTypes from 'prop-types';

export const InputNumberField = ({name, placeholder}) => {
    const [validityField, setValidityField] = useState(false)
    const [value, ] = useState(0)

    return (
        <Field name={name}
               initialValue={'0'}
               validate={() => value < 0 ? setValidityField(!validityField) : undefined}
               subscription={{value: true}}
        >
            {
                ({input}) => (
                    <TextField label={placeholder}
                               color={'secondary'}
                               type={'number'}
                               variant={'standard'}
                               style={{marginTop: '1rem'}}
                               id={name}
                               error={validityField || parseInt(input.value) < 0 }
                               fullWidth
                               required
                               {...input}
                    />
                )
            }
        </Field>
    )
}

InputNumberField.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
}
