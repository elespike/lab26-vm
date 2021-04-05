pgrep -f "/usr/local/bin/mitmdump" || /usr/local/bin/mitmdump -q --mode regular \
    --listen-host 0.0.0.0 --listen-port 8080 \
    --set confdir=/opt/.mitmproxy --set ssl_insecure &> /opt/mitmdump.log
