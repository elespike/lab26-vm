#! /bin/bash

# To avoid warnings during provisioning; for more information, see:
# https://www.debian.org/releases/stable/amd64/ch05s03.html.en#installer-args
export DEBIAN_FRONTEND=noninteractive

cp /vagrant/.lab26/sources.list /etc/apt/sources.list
apt-get update
apt-get upgrade -qq
apt-get install -qq -- $(egrep -v "^#" /vagrant/.lab26/packages.txt)

which locate && updatedb

_user="tux"
_home="/home/${_user}"
   groupadd ${_user} && mkdir ${_home} \
&& useradd -s /bin/bash -g ${_user} -G sudo ${_user} \
&& printf "${_user}:password" | chpasswd


wget -q https://downloads.sourceforge.net/project/bwapp/bWAPP/bWAPP_latest.zip -O /tmp/bwapp.zip
unzip /tmp/bwapp.zip -d /var/www/html

wget -q https://github.com/webpwnized/mutillidae/zipball/master -O /tmp/mutillidae.zip
unzip /tmp/mutillidae.zip -d /var/www/html
mv /var/www/html/*mutillidae* /var/www/html/mutillidae

wget -q https://github.com/digininja/DVWA/zipball/master -O /tmp/dvwa.zip
unzip /tmp/dvwa.zip -d /var/www/html
mv /var/www/html/*DVWA* /var/www/html/DVWA
cp /var/www/html/DVWA/config/config.inc.php.dist /var/www/html/DVWA/config/config.inc.php

wget -q https://google-gruyere.appspot.com/gruyere-code.zip -O /tmp/gruyere.zip
unzip /tmp/gruyere.zip -d ${_home}/gruyere

wget -q https://github.com/nVisium/django.nV/zipball/master -O /tmp/django.nV.zip
unzip /tmp/django.nV.zip -d ${_home}
mv ${_home}/*django.nV* ${_home}/django.nV
python3 -m pip install -r ${_home}/django.nV/requirements.txt
python3 ${_home}/django.nV/manage.py migrate

wget -q https://github.com/bkimminich/juice-shop/zipball/master -O /tmp/juice-shop.zip
unzip /tmp/juice-shop.zip -d ${_home}
mv ${_home}/*juice-shop* ${_home}/juice-shop

wget -q https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application/zipball/master -O /tmp/DVGA.zip
unzip /tmp/DVGA.zip -d ${_home}
mv ${_home}/*Damn-Vulnerable-GraphQL-Application* ${_home}/DVGA
python3 -m pip install -r ${_home}/DVGA/requirements.txt

# Web for Pentester I
cp -R /vagrant/.lab26/html/ /var/www/

python3 /vagrant/.lab26/initial_setup.py
mysql -uroot -ppassword <<EOF
update mysql.user set plugin='mysql_native_password' where user='root' and plugin='unix_socket';
flush privileges;
EOF

which vim && cp /usr/share/vim/vim*/defaults.vim ${_home}/.vimrc

for item in $(ls -AC1 /vagrant/.lab26/dotfiles)
do
    # Copy or append the contents of each file in /vagrant/.lab26/dotfiles
    # into the corresponding file at ${_home}
    [[ -f /vagrant/.lab26/dotfiles/${item} ]] \
        && touch ${_home}/${item}      \
        && cat /vagrant/.lab26/dotfiles/${item} >> ${_home}/${item}
    # Recursively copy the contents of each directory in /vagrant/.lab26/dotfiles
    # into ${_home}
    [[ -d /vagrant/.lab26/dotfiles/${item} ]] \
        && cp -a /vagrant/.lab26/dotfiles/${item} ${_home}
done

mkdir -p ${_home}/.local/share/applications/
cp /vagrant/.lab26/start*desktop ${_home}/.local/share/applications/
cp /vagrant/.lab26/start*sh /opt/

pushd /vagrant/.lab26
pandoc -f markdown_github+header_attributes+pandoc_title_block -t html -o /var/www/html/index.html --section-divs -H header.html index.md
pandoc -f markdown_github+header_attributes -t html -o /var/www/html/Exercises.html --section-divs --toc --toc-depth=1 -H header.html Exercises.md
pandoc -f markdown_github+header_attributes -t html -o /var/www/html/Resources.html --section-divs --toc --toc-depth=1 -H header.html Resources.md
popd
apt-get purge -qq pandoc

chmod -R 777 /var/www/html

python3 -m pip install mitmproxy sqlmap

# If not already present, write an export call to ${_home}/.bashrc
# that will add /usr/sbin and ${_home}/.local/bin to ${PATH}
append_to_path=":/usr/sbin:${_home}/.local/bin"
grep ${append_to_path} ${_home}/.bashrc \
    || echo "export PATH=${PATH}${append_to_path}" >> ${_home}/.bashrc


chown -R ${_user}:${_user} ${_home}
apt-get -qq autoremove
apt-get -qq autoclean
reboot

