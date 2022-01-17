import {Box, Typography} from "@mui/material";

const Style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    height: '97.7vh',
    margin: 0,
    borderRadius: '5px'
}
const BoxStyle = {
    width: '60%',
    padding: '1.5rem 2rem',
    borderRadius: '5px',
    background: 'white'
}

const ManagementThresholdApp = () => (
    <div style={Style}>
        <Box style={BoxStyle}>
            <Typography variant={'h6'} color={'secondary'}>
                Management Threshold
            </Typography>
        </Box>
    </div>
)

export default ManagementThresholdApp
