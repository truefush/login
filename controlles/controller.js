const form = (req, res) => {
	res.render('form', { name: req.session.name });
};

const home = (req, res) => {
	const { name } = req.body;
	req.session.name = name; e
	res.redirect('/');
}

const destroy = (req, res) => {
	try {
		req.session.destroy();
		res.redirect('/');
	} catch (err) {
		res.status(500).send('Error: ', err);
	}
}

module.exports = { form, home, destroy };