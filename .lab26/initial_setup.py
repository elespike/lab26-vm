from logging import basicConfig, INFO, info, exception, error
from pathlib import Path
from re import subn
from subprocess import check_call, CalledProcessError
from sys import stdout

basicConfig(
    level=INFO,
    format='\r\n%(asctime)s:%(msecs)03d %(levelname)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S',
    stream=stdout)

info('Setting up...')

modifications = {
    '/var/www/html/bWAPP/admin/settings.php':
        ['(\$db_password = ").*?(";)|\g<1>password\g<2>|1'],
    '/var/www/html/mutillidae/includes/database-config.inc':
        ["('DB_PASSWORD', ').*?'|\g<1>password'|1"],
    '/var/www/html/DVWA/config/config.inc.php':
        ["(\$_DVWA\[ 'db_user' \] +?= ').*?(';)|\g<1>root\g<2>|1",
         "(\$_DVWA\[ 'db_password' \] = ').*?(';)|\g<1>password\g<2>|1"],
    '/etc/php/7.3/apache2/php.ini':
        ['(allow_url_.+? = )Off|\g<1>On|2', '(display_errors = )Off|\g<1>On|1'],
}

for filename, replacements in modifications.items():
    for replacement in replacements:
        match, replace, count = replacement.split('|')
        filedata = ''
        try:
            with open(filename, 'r') as f:
                filedata = f.read()
            info('Read "{}".'.format(filename))
        except IOError:
            exception('Error reading "{}":'.format(filename))
            continue

        result = subn(match, replace, filedata, int(count))
        if result[1] > 0:
            filedata = result[0]
            info('Replacement successful.')
        else:
            error('Expression "{}" not found in "{}"!'.format(match, filename))
            continue

        try:
            with open(filename, 'w') as f:
                f.write(filedata)
            info('Wrote "{}".'.format(filename))
        except IOError:
            exception('Error writing "{}":'.format(filename))

commands = [
    ['mysqladmin', '-u', 'root', 'password', 'password']
]

for c in commands:
    c_str = ' '.join(c)
    try:
        check_call(c)
        info('Executed "{}".'.format(c_str))
    except CalledProcessError:
        exception('Error calling command "{}":'.format(c_str))
