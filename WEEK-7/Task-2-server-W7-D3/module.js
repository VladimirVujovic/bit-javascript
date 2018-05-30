var lorem = require ('lorem-ipsum');

const getBlogs = function () {
  const blogs = [];
  for (var i = 0; i < 20; i++) {
    var a = {
      title: lorem ({
        count: 3,
        units: 'words',
      }),
      intro: lorem ({
        count: 2,
        units: 'sentences',
      }),
    };
    blogs.push (a);
  }
  return blogs;
};
module.exports = getBlogs;
