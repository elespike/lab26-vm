# Lab 26: a collection of vulnerable web applications packaged into a virtual machine

## Getting Started
1. Visit https://github.com/elespike/lab26-vm/releases/latest and download the provided `.ova` file.
1. Import the `.ova` file into your preferred virtualization platform; e.g., [VirtualBox](https://www.virtualbox.org/)
1. Start the VM
1. Wait ~10 seconds for things to spin up
1. Visit http://127.0.0.1:1313 on your browser (your own, host machine browser)

## Credentials
When you need to use the terminal (and don't feel like uploading a web shell), you can log in to the VM using the following credentials:

| Username | Password |
|----------|----------|
| tux      | password |

## Tips and Troubleshooting
- Once you import and start the VM, create a snapshot so you can always revert to this initial state
- If certain applications cease to work for more than a couple minutes, try rebooting the VM.
- Some of the web applications (e.g., bWAPP, Mutillidae, DVWA) have their own reset page to restore their respective databases to its defaults.
- If all else fails, either revert to the initial snapshot (if you created one) or re-import the VM altogether (then remember to take a snapshot).

## Release Process
This VM is built using [Vagrant](https://blog.lab26.net/vagrant-first-steps-debian-buster-install/)

1. Assuming Vagrant is already installed, clone this repository and run the supplied `build.sh` script
1. After the barebones VM is created and shut down, clone the existing `.vmdk` disk into a new `.vdi` disk for better compression
1. Replace the original `.vmdk` disk with the cloned `.vdi` disk
1. Re-run `build.sh` with an environment variable named `VDI` that points to the `.vdi` file you created
   e.g., `env VDI=/path/to/copy.vdi ./build.sh`
1. Wait until the script is finished, and review `vagrant.log` to ensure there were no errors
1. Visit http://127.0.0.1:1313, verify all links and sites
1. Shut down the VM with `vagrant halt`
1. Using the VirtualBox interface:
    1. Reduce memory to 2048 MB and CPU count to 1
    1. Change the graphics controller to `VMSVGA`
    1. Export to `.ova` and ship it!
