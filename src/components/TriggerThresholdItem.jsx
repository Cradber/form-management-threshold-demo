import {InputTextField} from "./InputTextField";
import {IconButton, Stack} from "@mui/material";
import {SelectorColor} from "./SelectorColor";
import {InputNumberField} from "./InputNumberField";
import {Delete} from "@mui/icons-material";
import {OptionSelector, SelectorField} from "./SelectorField";

export const TriggerThresholdItem = ({name, index, handleDelete}) => (
    <Stack direction={'row'}
           justifyContent={'space-between'}
           alignItems={'end'}
           spacing={2}
    >
        <InputTextField name={`${name}.name`}
                        placeholder={'Threshold Name'}
        />
        <SelectorColor name={`${name}.color`} color={'#000000'} />
        <InputNumberField name={`${name}.min`}
                          placeholder={'Min Trigger Value'}
        />
        <InputNumberField name={`${name}.max`}
                          placeholder={'Max Trigger Value'}
        />

        <SelectorField name={`${name}.days`} placeholder={'Days'} >
            <OptionSelector value={'day1'}>Day 1</OptionSelector>
            <OptionSelector value={'day2'}>Day 2</OptionSelector>
            <OptionSelector value={'day3'}>Day 3</OptionSelector>
            <OptionSelector value={'day4'}>Day 4</OptionSelector>
            <OptionSelector value={'day5'}>Day 5</OptionSelector>
        </SelectorField>

        <IconButton color={'secondary'}
                    onClick={() => handleDelete(index)}
        >
            <Delete />
        </IconButton>
    </Stack>
)