import fs from 'fs';
export async function POST(request) {
  const user = { test: 'Filip' };
  if (!fs.existsSync('./tmp')) {
    fs.mkdirSync('./tmp');
  }
  fs.writeFileSync(`./tmp/user.txt`, JSON.stringify(user));
  return Response.json(user);
}

export async function GET(request) {
  const text = fs.readFileSync('./tmp/user.txt', 'utf8');
  return Response.json(JSON.parse(text));
}
