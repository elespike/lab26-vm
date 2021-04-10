#! /bin/bash

# To avoid warnings during provisioning; for more information, see:
# https://www.debian.org/releases/stable/amd64/ch05s03.html.en#installer-args
export DEBIAN_FRONTEND=noninteractive

cp /vagrant/.lab26/sources.list /etc/apt/sources.list
apt-get update
apt-get upgrade -qq
apt-get install -qq -- $(egrep -v "^#" /vagrant/.lab26/packages.txt)

_user="tux"
_home="/home/${_user}"
id ${_user} || \
    (groupadd ${_user} && mkdir ${_home} \
    && useradd -s /bin/bash -g ${_user} -G sudo ${_user} \
    && printf "${_user}:password" | chpasswd)


[[ -d /var/www/html/bWAPP ]] || \
    (wget -q https://downloads.sourceforge.net/project/bwapp/bWAPP/bWAPP_latest.zip \
    -O /tmp/bwapp.zip && unzip /tmp/bwapp.zip -d /var/www/html)

[[ -d /var/www/html/mutillidae ]] || \
    (wget -q https://github.com/webpwnized/mutillidae/zipball/master \
    -O /tmp/mutillidae.zip && unzip /tmp/mutillidae.zip -d /var/www/html \
    && mv /var/www/html/*mutillidae* /var/www/html/mutillidae)

[[ -d /var/www/html/DVWA ]] || \
    (wget -q https://github.com/digininja/DVWA/zipball/master \
    -O /tmp/dvwa.zip && unzip /tmp/dvwa.zip -d /var/www/html \
    && mv /var/www/html/*DVWA* /var/www/html/DVWA \
    && cp /var/www/html/DVWA/config/config.inc.php.dist /var/www/html/DVWA/config/config.inc.php)

[[ -d /opt/gruyere ]] || \
    (wget -q https://google-gruyere.appspot.com/gruyere-code.zip \
    -O /tmp/gruyere.zip && unzip /tmp/gruyere.zip -d /opt/gruyere)

[[ -d /opt/django.nV ]] || \
    (wget -q https://github.com/nVisium/django.nV/zipball/master \
    -O /tmp/django.nV.zip && unzip /tmp/django.nV.zip -d /opt \
    && mv /opt/*django.nV* /opt/django.nV \
    && python3 -m pip install --no-cache-dir -r /opt/django.nV/requirements.txt \
    && python3 /opt/django.nV/manage.py migrate)

[[ -d /opt/juice-shop ]] || \
    (wget -q https://github.com/bkimminich/juice-shop/zipball/master \
    -O /tmp/juice-shop.zip && unzip /tmp/juice-shop.zip -d /opt \
    && mv /opt/*juice-shop* /opt/juice-shop)

[[ -d /opt/DVGA ]] || \
    (wget -q https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application/zipball/master \
    -O /tmp/DVGA.zip && unzip /tmp/DVGA.zip -d /opt \
    && mv /opt/*Damn-Vulnerable-GraphQL-Application* /opt/DVGA \
    && python3 -m pip install --no-cache-dir -r /opt/DVGA/requirements.txt)

# Web for Pentester I
cp -R /vagrant/.lab26/html/ /var/www/

python3 -m pip install --no-cache-dir mitmproxy sqlmap

python3 /vagrant/.lab26/initial_setup.py
mysql -uroot -ppassword <<EOF
update mysql.user set plugin='mysql_native_password' where user='root' and plugin='unix_socket';
flush privileges;
EOF

python3 /vagrant/.lab26/install_web_apps.py

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

pushd /vagrant/.lab26
pandoc -f markdown_github+header_attributes+pandoc_title_block -t html -o /var/www/html/index.html --section-divs -H header.html index.md
pandoc -f markdown_github+header_attributes -t html -o /var/www/html/Exercises.html --section-divs -H header.html Exercises.md
pandoc -f markdown_github+header_attributes -t html -o /var/www/html/Resources.html --section-divs -H header.html Resources.md
popd
apt-get purge -qq pandoc

cp /vagrant/.lab26/run_*.sh /opt/
chmod -R 777 /var/www/html
chmod -R 777 /opt

cat | crontab -u ${_user} - <<EOF
@reboot /opt/run_apps.sh
EOF
cat | crontab -u proxy - <<EOF
@reboot sleep 10 && /opt/run_mitmdump.sh
EOF

# If not already present, write an export call to ${_home}/.bashrc
# that will add /usr/sbin and ${_home}/.local/bin to ${PATH}
append_to_path=":/usr/sbin:${_home}/.local/bin"
grep ${append_to_path} ${_home}/.bashrc \
|| echo "export PATH=${PATH}${append_to_path}" >> ${_home}/.bashrc

iptables -t nat -F
iptables -t nat -A PREROUTING -i eth0 -p tcp -m multiport ! --dports 22,8080,8081 -j REDIRECT --to-ports 8888
iptables -t nat -A OUTPUT -p tcp -m owner --uid-owner proxy -j REDIRECT --to-ports 8888
iptables-save > /etc/iptables/rules.v4

cat > /etc/sysctl.d/mitmproxy.conf <<EOF
net.ipv4.ip_forward=1
net.ipv4.conf.all.send_redirects=0
EOF

cat > /etc/issue <<EOF

+++ Welcome to Lab 26!
>>> Visit http://localhost:1313 to get started
+++ If you need to log in, username is "${_user}", password is "password"

EOF

chown -R ${_user}:${_user} ${_home}
[[ -f /opt/juice-shop/.installed ]] || (sudo -u ${_user} \
    env NG_CLI_ANALYTICS=false npm install --prefix /opt/juice-shop \
    && touch /opt/juice-shop/.installed)
sudo -u ${_user} env HOME=${_home} npm cache clean --force

which locate && updatedb

apt-get -qq autoremove
apt-get -qq clean

rm -rf /home/*/.cache
rm -rf /root/.cache
rm -rf /vagrant/.lab26
rm -rf /vagrant/*
rm -rf /var/lib/apt/lists/*
history -c
reboot

