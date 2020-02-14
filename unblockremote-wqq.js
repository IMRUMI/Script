var body = $response.body;
body = '\/*\n@supported 1FAEBFF2A995\n*\/\n' + body;

$done(body);
