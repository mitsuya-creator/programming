function getPublicHoliday() {
    let result;
    try {

        const xhr = new XMLHttpRequest();
        // xhr.onload = function () {
        //     console.log(JSON.parse(this.responseText));
        // }
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                result = this.responseText;
                console.log(JSON.parse(result));
            }
        }
        xhr.open("GET", "https://date.nager.at/api/v3/PublicHolidays/2023/ID");
        xhr.send();
    } catch (e) {
        console.log(e);
    }
}
