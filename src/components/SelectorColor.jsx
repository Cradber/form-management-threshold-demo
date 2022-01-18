import {Field} from "react-final-form";
import PropTypes from "prop-types";

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

SelectorColor.propTypes = {
    name: PropTypes.string.isRequired,
    color: (props, propName) => {
        if (typeof props[propName] !== 'string' || !props[propName].toString().match(/#[0-9a-fA-F]{6}/)) {
            return new Error(`The specified value ${props[propName]} does not conform to the required format. The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.`)
        }
    }
}
