import {Form} from "react-final-form";
import arrayMutators from 'final-form-arrays'
import {onSubmit} from "./helpers";
import {Button, Stack} from "@mui/material";
import {InputTextField} from "./InputTextField";

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
