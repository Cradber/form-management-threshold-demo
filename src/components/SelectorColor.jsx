import {Field} from "react-final-form";


export const SelectorColor = ({name, color = '#000000'}) => (
    <Field name={name}
           initialValue={color}
           subscription={{value: true}}
    >
        {
            ({input}) => (
                <input name={name}
                       type={'color'}
                       style={{width: '10rem', backgroundColor: 'white', borderRadius: '3px'}}
                       {...input} />
            )
        }
    </Field>
)
