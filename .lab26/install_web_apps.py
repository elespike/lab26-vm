import logging

from re import search
from requests import Session
from sys import exit, stdout

logging.basicConfig(
    level=logging.INFO,
    format='\r\n%(asctime)s:%(msecs)03d %(levelname)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    stream=stdout)

s = Session()
responses = list()

responses.append(s.get('http://127.0.0.1/bWAPP/install.php?install=yes'))
responses.append(s.get('http://127.0.0.1/mutillidae/set-up-database.php'))

r = s.get('http://127.0.0.1/DVWA/setup.php')
m = search('name=.user_token. value=.([a-f0-9]{32}).', r.text)
responses.append(r)
if m is None or not m.groups:
    logging.error('Error setting up DVWA!')
    exit(1)

dvwa_data = {'user_token': m.group(1), 'create_db': 'Create / Reset Database'}
responses.append(s.post('http://127.0.0.1/DVWA/setup.php', data=dvwa_data))

exit_code = 0
for r in responses:
    if r.status_code != 200:
        logging.error('{} received from {}'.format(r.status_code, r.request.url))
        exit_code = 1
exit(exit_code)
