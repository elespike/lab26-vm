sleep 1
pgrep -f "/usr/local/bin/mitmweb" || /usr/local/bin/mitmweb --mode transparent \
    --web-host 0.0.0.0 --listen-host 0.0.0.0 --listen-port 8888 \
    --set confdir=/opt/.mitmproxy --showhost --no-web-open-browser &> /opt/mitmproxy.log
sleep 2
chmod 644 /opt/.mitmproxy/*
sleep 1
pgrep -f "/opt/juice-shop" || npm start --prefix /opt/juice-shop &> /opt/juice-shop.log
sleep 1
pgrep -f "/opt/django.nV" || python3 /opt/django.nV/manage.py runserver 0.0.0.0:8000 &> /opt/django.log
sleep 1
pgrep -f "/opt/DVGA" || env WEB_HOST="0.0.0.0" python3 /opt/DVGA/app.py &> /opt/DVGA.log
sleep 1
pgrep -f "/opt/gruyere" || python2 /opt/gruyere/gruyere.py &> /opt/gruyere.log
