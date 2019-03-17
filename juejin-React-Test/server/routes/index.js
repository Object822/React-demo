var express = require('express');
var router = express.Router();
let index = require('../controller/index.js')

/* GET home page. */
router.get('/listBlog', index.listBlog);

module.exports = router;

// var express = require('express');
// var router = express.Router();

// let projects = require('../controller/projects.js')
// let issues = require('../controller/issues.js')
// let issueItem = require('../controller/issue-item.js')

// router.get('/', projects.listProjects);
// router.post('/', projects.addOneProject);
// router.patch('/:project_id', projects.updateOneProject);
// router.delete('/:project_id', projects.deleteOneProject);
// router.get('/oneProject/:project_id', projects.listOneProject);

// router.get('/:project_id', issues.listIssues)
// router.post('/:project_id', issues.addOneIssue);
// router.patch('/project/:issue_id', issues.updateOneIssue);
// router.delete('/project/:issue_id', issues.deleteOneIssue);
// router.get('/oneIssue/:issue_id', issues.listOneIssue);

// router.get('/issues/:issue_id', issueItem.listIssueItem)
// router.post('/issues/:issue_id', issueItem.addOneIssueItem);
// router.patch('/issues/:issue_id/:issue_item_id', issueItem.updateOneIssueItem);
// router.delete('/issues/:issue_id/:issue_item_id', issueItem.deleteOneIssueItem);

// module.exports = router;