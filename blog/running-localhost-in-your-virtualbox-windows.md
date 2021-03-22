---
date: 2019-03-25
tags: tips, help, localhost, virtualbox, window, valet
---

# Running localhost in your Virtualbox windows

When testing your website on Windows can be a bitch sometimes running services like Valet to do your serving for you. In other projects, we use webpack to take care of this but in a current Magento Project we use Valet Plus to run this. The only problem is, we couldnt get the project to run on mobile phones or the windows Virtual box.
The problem with the phone we didn't fix yet, but for Virtual box we have a solution!

1. Start your windows in VirtualBox.
2. Run `ifconfig` in terminal on your local machine.
3. Get the IP-address from the vboxnet0, this is 192.168.33.1 in my case.
4. Go to your Virtual box running windows.
5. Navigate in your explorer to: `c:\Windows\System32\drivers\etc`
6. Copy the `hosts` file to and paste it on your desktop.
7. Open de hosts file with something, like notepad.`
8. Add the your local domain to the bottom with your local IP address (from step 3) example: `192.168.33.1 myproject.test`
9. Save the hosts file.`
10. Drag (yes drag!! not copy/paste) the file back in to the folder where it came from.`c:\Windows\System32\drivers\etc`
11. You will get the question if you want to replace the file, yes you do! (if you copy/paste you don't get this question).
12. You don't have to do anything new, it should just work. :)
