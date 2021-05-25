# Mining Cardano with a MacBook

Yes, you can mine on your MacBook, is it a good idea? Probably not, because it goes slow and will take you ages to get anything, which will probably cost you more in electricty than it will bring you in ADA. But yeah, why not do it anyway?! :)

That was my thought, so I did figure out how I could do it. You need the following things;

1. A Cardano Wallet
2. A mining platform
3. Mining tools

### 1. The Wallet; Yoroi

To mine Cardano you can choose two wallets, either Yoroi or Daedelus, since I already have a Yoroi one, I will show it using that, but it's quite similar.
Download the [Yoroi app](https://yoroi-wallet.com), Register and create a wallet. 

Once you are in the wallet, you can click on "Receive" where you will be prompted a screen with a ![yoroi wallet screenshot](https://user-images.githubusercontent.com/5363051/119467007-7055db00-bd45-11eb-9738-322baa6b4979.png) copy the address from the fresh addresses.


### 2. Mining tools; XMRig

In order to mine we download [XMRig](https://xmrig.com/) from [Github](https://github.com/xmrig/xmrig/releases), go to "assets" and download the version you need. (MacOS-arm64 for Apple Silicon Macs, or MacOs-x64 for Intel macs). Once downloaded, unpack the folder and drag the whole Xmrig folder to your Applications.

Open the folder, here you will find a `config.json` file. In the file you alter the following points;

Under `"pool"` you find `"user"`. Here you add the address you copied from your wallet in step 1. `"ADA:[YOURADDRESS].[SOMENAME]"`. So, in front you add ADA, because thats what we will be mining, a dot, your address, another dot and at last you add a reference to which computer you ar emining on. In this way the tools can distinguish between multiple computers if you would do so. I for instance added `.MBP` because I will mine this on my MacBook Pro.

Just above the user there is `"url"`. Here you add the url which you take from your mining platform (`rx.unmineable.com:3333`).


### 3. A mining platform; Unmineable

Go to [Unminable: ADA](https://unmineable.com/?ref=o9mk-762e), click on 'RandomX' and copy the "global server". Which is; `rx.unmineable.com:3333`. 

Then you take your copied wallet address and paste in the "Your ADA address" search field. 

![image](https://user-images.githubusercontent.com/5363051/119468778-0f2f0700-bd47-11eb-9254-e0df383b845a.png)


## Let's mine!

You now setup your wallet, your mining tools and your platform. All you have got to do is just open the `xmrig` in your Applications `Applications > XMRig > xmrig`. 

![image](https://user-images.githubusercontent.com/5363051/119469289-7fd62380-bd47-11eb-8a0e-661a56ae7b8c.png)


After about 15 minutes you will see your first mined ADA showing up in the platform. Once you mined 8 ADA you can pay it out to your wallet, which will probably take ages, but yeah.. who cares?
