const http = require("https");
const fs = require('fs');
var movieJSON;

const options = {
	"method": "GET",
	"hostname": "imdb8.p.rapidapi.com",
	"port": null,
	"path": "/auto-complete?q=avengers",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "b78e2e8022mshaa7e851f96b0f8ap1785f7jsne383649c9402",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
    

});

router.route('/user')
    .get((req, res) => {
        MyService.get().then((result) => {
            res.attachment('users.csv');
            /*or you can use 
              res.setHeader('Content-disposition', 'attachment; filename=users.csv');
              res.set('Content-Type', 'text/csv');*/
            res.status(200).send(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json({
                status: 500,
                data: err
            });
        });
    });


req.end();