import {Form} from "react-final-form";
import arrayMutators from 'final-form-arrays'
import {onSubmit} from "./helpers";
import {Button, Stack} from "@mui/material";
import {InputTextField} from "./InputTextField";
import {OptionSelector, SelectorField} from "./SelectorField";
import {TriggerThresholdList} from "./TriggerThresholdList";

export const ManagementForm = () => (
    <Form onSubmit={onSubmit}
          mutators={{...arrayMutators}}
          subscription={{submitted: true}}
    >
        {
            ({
                handleSubmit,
                form,
                form: {mutators: {push}},
                submitting,
                pristine
             }) => (
                <form onSubmit={handleSubmit}>

                    <InputTextField name={'objectTrack'} placeholder={'Object Type'} />

                    <SelectorField name={'operationType'} placeholder={'Operation Type'} >
                        <OptionSelector value={'option1'}>Option 1</OptionSelector>
                        <OptionSelector value={'option2'}>Option 2</OptionSelector>
                        <OptionSelector value={'option3'}>Option 3</OptionSelector>
                        <OptionSelector value={'option4'}>Option 4</OptionSelector>
                        <OptionSelector value={'option5'}>Option 5</OptionSelector>
                    </SelectorField>

                    <TriggerThresholdList name={'triggerThreshold'}
                                          add={() => push('triggerThreshold')}
                    />


                    <Stack direction={'row'}
                           spacing={2}
                           justifyContent={'flex-end'}
                    >
                        <Button color={'secondary'}
                                size={'large'}
                                type={'reset'}
                                onClick={form.reset}
                                disabled={submitting || pristine}
                        >
                            Cancel
                        </Button>
                        <Button variant={'contained'}
                                color={'secondary'}
                                size={'large'}
                                type={'submit'}
                                disabled={submitting || pristine}
                                disableElevation
                        >
                            Confirm
                        </Button>
                    </Stack>

                </form>
            )
        }
    </Form>
)
