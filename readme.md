# Lab 26: a collection of vulnerable web applications packaged into a virtual machine

## Download
Coming soon...

## Credentials
| Username | Password |
|----------|----------|
|      tux | password |

## Release process
This VM is built using [Vagrant](https://blog.lab26.net/vagrant-first-steps-debian-buster-install/)

1. Assuming Vagrant is already installed, clone the repository and issue `vagrant up`
0. Log in to the VM and verify that `mitmweb` is starting automatically
0. Open a terminal session and issue `cd ~/juice-shop && npm install`
0. Open the web browser to install bWAPP, DVWA, and Mutillidae by visiting their respective setup pages
0. Verify that every site starts up and works properly
0. In the terminal, issue `npm cache clean --force`
0. Clear browser, terminal and clipboard history for all applicable users
0. Close all applications and log out of the graphical session
0. In the host's terminal, issue the following commands:
   ```
   vagrant ssh
   sudo -i
   ```
0. Now within the VM's SSH session, as `root`, issue the following commands:
   ```
   rm -rf /home/*/.cache
   rm -rf /root/.cache
   rm -rf /vagrant/.lab26
   printf "u" > /proc/sysrq-trigger  # remounts / as read-only
   zerofree -v /dev/sda1
   shutdown now
   ```
0. Clone the existing `.vmdk` disk into a new `.vdi` disk for better compression
0. Replace the original `.vmdk` disk with the cloned `.vdi` disk
0. Reduce memory to 2048 MB and CPU count to 1
0. Ensure that unnecessary interfaces, such as audio and USB, are disabled
0. Take a snapshot, naming it "Initial State"
0. Zip it and ship it!
