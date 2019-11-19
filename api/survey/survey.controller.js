var DB = require('../../database');

exports.create = async function (req, res) {
  try {
    var conn = new DB();
    var submissions = req.body.submissions || [];

    conn.query(`INSERT INTO surveys (info, created) VALUES ('${req.body.info}', NOW())`, async function (err, survey) {
      if (err) res.status(500).json(err);
      console.log('survey', survey.insertId);
      var values = submissions.map(function (subm) {
        return [survey.insertId, subm.answer, subm.answer];
      });
      try {

        var result = await conn.query('INSERT INTO survey_submission (survey_id, answer, question) VALUES ?', [values]);

        res.status(201).json({ message: 'Success Saving Submission' });
      } catch (err) {
        console.log('err', err);
        res.status(500).json(err);
      }
    });
  } catch (err) {
    console.log('err', err);
    res.status(500).json(err);
  }
};