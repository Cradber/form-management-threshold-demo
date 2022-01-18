
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const handleValidation = (values) => {
    if (values['triggerThreshold'] === undefined)
        window.alert('You must specify any trigger threshold')
    else {
        let maxPrev = 0
        values['triggerThreshold'].forEach(({min, max}, index) => {
            if (index === 0) maxPrev = max
            if (parseInt(max) < 0 || parseInt(min) < 0)
                window.alert('Threshold values must to be non-negative numbers')
            if (parseInt(max) < parseInt(min))
                window.alert('Maximum threshold value must to be greater than the minimum threshold value')
            if (index !== 0) {
                if (parseInt(min) < maxPrev)
                    window.alert('Minimum threshold value must to be greater than the maximum threshold value of the previous item')
                maxPrev = parseInt(max)
            }
        })
    }
}

export const onSubmit = (values) => {
    // ev.preventDefault()
    handleValidation(values)

    // await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

export const required = value => (value ? undefined : 'Required')
