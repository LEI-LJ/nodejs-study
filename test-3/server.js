const fs = require('fs').promises;

const axios = require('axios');

const xlxs = require("xlsx");

async function fetchUrls(strings) {
    for (let i = 0; i < strings.length; i++) {
        const str = strings[i];
        if (str.t.includes('http')) {
            try {
                const response = await axios.get(str.t);
                console.log(response.data, 'response');
            } catch (error) {
                console.error(`Error fetching URL ${str.t}:`, error.message);
            }
        }
    }
}

(async function () {
    // 获取数据
    const excelBuffer = await fs.readFile('./cf全部.xlsx');

    // 解析数据
    const result = xlxs.read(excelBuffer, {
        type: 'buffer',
        cellHTML: false,
    });
    fetchUrls(result.Strings)
    // result.Strings.forEach((str, i) => {
    //     // console.log(str.t.includes('http'))
    //     if (str.t.includes('http')) {
    //         const url = str.t
    //         axios({
    //             method: 'get',
    //             url: str.t,
    //         })
    //             .then(function (response) {
    //                 console.log(response.data, 'response')
    //             });
    //
    //     }
    // })


})();


// fs.readFile('./无法打开的网站.txt', 'utf-8', (err, data) => {
//     console.log(err)
//     if (!err) {
//         const lines = data.split(/\r?\n/);
//         lines.forEach(item => {
//             console.log(item.split(' ')[0], 'item.split(\' \')[0]')
//
//         })
//     }
// })
