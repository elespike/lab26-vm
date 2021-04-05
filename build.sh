#! /bin/bash


# This script assumes VirtualBox on Linux.

if [[ ! -f ${VDI} ]]
then
    vagrant up --no-provision
    sleep 1
    vagrant halt
    echo "Before continuing, convert the disk into VDI,"
    echo "then re-run this script with an env var named VDI"
    echo "that is set to the path of the new disk."
    exit 1
fi

if (vagrant up --provision | tee -p vagrant.log)
then
    echo "[+] Provisioned!"
else
    echo "[-] Error provisioning!"
    exit 1
fi

echo "[i] Waiting for reboot..."
sleep 10
echo "[i] Freeing up disk space..."
if vagrant ssh -c "sudo /bin/bash -c 'zerofree -v /dev/sda1 && mount -o remount,rw /dev/sda1 && sed -ie \"s/ro,/rw,/\" /etc/fstab;'"
then
    echo "[+] Freed up disk space!"
else
    echo "[-] Failed to free up disk space!"
    exit 1
fi

while [[ $(vagrant status | grep -o poweroff) != "poweroff" ]]
do
    sleep 2
    vagrant halt
done
echo "[+] VM is powered off!"
echo "[i] Compressing disk..."
if vboxmanage modifymedium disk "${VDI}" --compact
then
    echo "[+] Done! Review vagrant.log to ensure there were no errors."
else
    echo "[-] Error compressing disk ${VDI}!"
    exit 1
fi
