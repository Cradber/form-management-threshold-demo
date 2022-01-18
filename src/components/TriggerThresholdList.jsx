import {Button, List, ListItem, Typography} from "@mui/material";
import {FieldArray} from "react-final-form-arrays";
import {TriggerThresholdItem} from "./TriggerThresholdItem";
import {Add} from "@mui/icons-material";
import PropTypes from "prop-types";


export const TriggerThresholdList = ({name, add}) => {

    return (
        <>
            <Typography variant={'body2'} style={{marginTop: '1rem'}}>
                Define trigger threshold from the last date of the selected event
            </Typography>

            <List sx={{
                width: '100%',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 200
            }}
            >
                <FieldArray name={name} >
                    {({ fields }) =>
                        fields.map((name, index) => (
                            <ListItem key={name}>
                                <TriggerThresholdItem name={name}
                                                      index={index}
                                                      handleDelete={index => fields.remove(index)}
                                />
                            </ListItem>
                        ))
                    }
                </FieldArray>
            </List>

            <Button variant={'outlined'}
                    color={'secondary'}
                    size={'large'}
                    endIcon={<Add/>}
                    style={{marginTop: '1rem'}}
                    onClick={add}>
                Add threshold
            </Button>
        </>
    )
}

TriggerThresholdList.propTypes = {
    name: PropTypes.string.isRequired,
    add: PropTypes.func.isRequired
}
