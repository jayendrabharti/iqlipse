const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export const formatTimestamp = (timestamp) => {
    let ts = new Date(timestamp);

    // Convert to IST by adding 5 hours and 30 minutes
    ts.setMinutes(ts.getMinutes() + ts.getTimezoneOffset() + 330);

    let date = ts.getDate();
    let month = months[ts.getMonth()];
    let year = ts.getFullYear();
    let hours = ts.getHours();
    let minutes = ts.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return `${date} ${month} ${year} • ${hours}:${minutes} ${ampm}`;
}
