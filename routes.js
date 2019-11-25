const routes = (req, res) => {
  const users = [{ name: 'josh' }, { name: 'john' }, { name: 'max' }];
  const { url, method } = req;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Hello world</title></head>');
    res.write('<body>');
    res.write('<h1>Hello world!</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Hello world</title></head>');
    res.write('<body>');
    res.write('<ul>');
    users.forEach(user => res.write(`<li>${user.name}</li>`));
    res.write('</ul>');
    res.write('<form method="POST" action="/create-user">');
    res.write('<input type="text" name="username" />');
    res.write('<button type="submit">Create</button>');
    res.write('</form>');

    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if(method === 'POST' && url === '/create-user') {
    let data = [];
    req.on('data', chunk => data.push(chunk));
    req.on('end', () => console.log(data.join().split('=')));
    return res.end();
  }
};

module.exports = routes;
