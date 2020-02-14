---
date: 2020-02-12T22:13:14.000+00:00
title: JAMStack Denver Audio and Video Setup - How we record and stream our Meetup
author: Zach Brooks
hero_image: "/uploads/avsetup.jpg"

---
I am an co-organizer of the JAMStack Denver meetup and also the A/V guru for streaming and recording all of the talks at our meetup. After our February 2020 meetup, we got a lot of other groups and people interested in how we have things setup for recording and live streaming everything. So I thought it would be best to explain everything in a post here for others interested in recording/streaming their own meetups, and what I use to do everything at JAMStack Denver.

I will be breaking everything down in the following sections:

-**Hardware**  
-**Software**  
-**Stream Settings**  
-**Creating Thumbnails**  
-**Uploading to Youtube**

**Hardware**

I'll start with the hardware I use for my setup, the reasoning for why I picked what I did, and then go into the recommended set of hardware you'll need to get started.

**My Setup**

- [2019 Macbook Pro 16 inch](https://www.apple.com/us-hed/shop/buy-mac/macbook-pro/16-inch-space-gray-2.3ghz-8-core-processor-1tb)
- [Camera: Fujifilm X-T3 w/XF18-55mm Lens Kit](https://www.amazon.com/gp/product/B07H3PLXZ3/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Mactrem Camera Tripod](https://www.amazon.com/gp/product/B01MZAD5CU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Camera Capture Card: Elgato Cam Link 4K](https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_2?keywords=elgato+cam+link&qid=1581549237&sr=8-2)
- [Capture Card: Magewell USB Capture HDMI Plus](https://www.amazon.com/gp/product/B01N16ZM2M/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
- [Microphones: Shure BLX1288/CVL Dual Channel Combo Wireless System](https://www.amazon.com/gp/product/B016APL6UG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Mixer: Behringer Xenyx 1204USB Premium 12-Input 2/2-Bus](https://www.amazon.com/Behringer-Xenyx-1204USB-Premium-12-Input/dp/B00871VO5Y/ref=sr_1_1?keywords=behringer+1204&qid=1581548595&s=musical-instruments&sr=1-1)
- [Mixer Output Cables: 2x GLS Audio 25 foot Mic Cable Patch Cords](https://www.amazon.com/gp/product/B003JJQMD8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
- [Wireless Mics Input Cables: 2x Hosa XLR Cables](https://www.amazon.com/gp/product/B004TVJL1U/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)
- [Headphones for Mixer: Sennheiser HD 559](https://www.amazon.com/Sennheiser-HD-559-Open-Headphone/dp/B01L1IIEKM/ref=sr_1_28?crid=1YBC7OT44WEHB&keywords=sennheiser+headphones&qid=1581631453&s=electronics&sprefix=sennheiser%2Celectronics%2C201&sr=1-28)
- [Elgato Stream Deck Mini](https://www.amazon.com/gp/product/B07DYRS1WH/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
- [Anker USB C Hub Adapter, 5-in-1](https://www.amazon.com/Anker-Adapter-Ethernet-MacBook-ChromeBook/dp/B071G83L1J/ref=sr_1_3?keywords=anker+usb+c+hub&qid=1581549203&sr=8-3)
- [Syntech USB C to USB Adapter](https://www.amazon.com/gp/product/B07CVX3516/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
- [Atevon 4K HDMI Cable 10 ft](https://www.amazon.com/gp/product/B01N22LFPL/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
- [UGREEN Micro HDMI to HDMI Cable Adapter 4K 3 ft](https://www.amazon.com/gp/product/B06WWQ7KLV/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

Here's a diagram of how I have everything connected as well:  
//Diagram of setup

At first glance this is quite a bit of hardware. Some of it is a bit overkill for creating a simple live stream and recording but you'd be surprised at some of the hardware requirements for streaming and recording. The 8 core Macbook Pro I have isn't necessary, but a decent pc/mac is nessecary for streaming and recording. I would recommend at least a computer with 4 CPU cores if not 6 due to the video encoding being CPU bound. I'll link a recommended build if you're pc building savvy and want to put together a small form factor build, otherwise the specs listed on the build are something I would aim for. The Fujifilm XT-3 is a mirrorless camera, which I use for photography as well and it doubles as a great live streaming camera. Mirrorless and DSLR cameras are great for video recording and streaming, and provide a little bit of extra quality if you want to take your stream to the next level which is why I recommend them but they're nessecary to get started. You will need something like the Elgato Cam Link if you decide to use a DSLR or mirrorless camera which allows you to capture the cameras hdmi output. The Magewell Capture card is what's needed to capture a presenters screen and display it out to your live audience. You'll need a capture card with loop through capability, as this is what allows you to display out to an external screen and capture the input at the same time. This is one part that I wouldn't go cheap on, because I've used cheaper capture cards in the past and they aren't nearly as reliable. Then we get into audio, which I would argue is more important that video, so if you're on a tight budget I'd spend a bit more on better audio. I just started using a Shure wireless microphone system with a lavalier mic for the presenter and a handheld mic for our MC and for the audience to ask questions, and it really improved our overall quality. Wireless mics aren't nessecary to get started but they can make things feel a bit more professional. I run the wireless mic system into a Behringer Xenyx 1204USB Mixer so I can manually monitor and adjust audio based on the speaker, and the usb output is routed into my computer to capture the audio. I also have cables from the mixers main output channel routed to venue speakers so the audience can hear better. Finally, I have an Elgato Stream Deck mini to control things in OBS, which i'll get into later, but this is just an extra I like to have. With all of that said, this is what I would recommend for an ideal setup to get yourself started with a couple of high end options thrown in as well.

**Recommended Setup**

- [4-6 core CPU Computer Recommended Specs](https://pcpartpicker.com/user/Zacann0n/saved/#view=dWQ68d)
- [High End Camera: Panasonic Lumix G7 w/14-42mm Lens Kit](https://www.amazon.com/PANASONIC-Digital-Megapixel-Mirrorless-DMC-G7KK/dp/B00X409PQS/ref=sr_1_3?crid=2PDNE0BCWG7CQ&keywords=panasonic%2Blumix%2Bg7&qid=1581629508&s=electronics&sprefix=panasoni%2Celectronics%2C219&sr=1-3&th=1)
  or
- [Budget Camera: Logitech C922x Webcam](https://www.amazon.com/Logitech-C922x-Pro-Stream-Webcam/dp/B01LXCDPPK/ref=sr_1_2?keywords=Logitech+C922+Pro&qid=1581629912&s=electronics&sr=1-2)
- Tripod of choice for Camera, doesn't matter to much
- [High End Camera Capture Card: Elgato Cam Link 4K](https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_2?keywords=elgato+cam+link&qid=1581549237&sr=8-2)
- [Capture Card: Elgato HD60S](https://www.amazon.com/Elgato-Game-Capture-HD60-PlayStation/dp/B01DRWCOGA/ref=sr_1_3?keywords=elgato+hd60s&qid=1581630531&sr=8-3)
- [Non-Wireless Microphones: Audio Technica ATR2100](https://www.amazon.com/Audio-Technica-ATR2100-USB-Cardioid-Dynamic-Microphone/dp/B004QJOZS4/ref=sr_1_5?crid=24B6QEH8EBILE&keywords=audio+technica+dynamic+microphone&qid=1581630659&sprefix=audio+technica+dynamic%2Caps%2C186&sr=8-5)
  or
- [Wireless Microphones: innopow Dual Wireless Microphone System](https://www.amazon.com/innopow-80-Channel-Microphone-Interference-Continuous/dp/B0749L15PF?tag=musiccritic-search-20)
- [2 XLR Input Channel Mixer: Behringer Xenyx Q802USB](https://www.amazon.com/Behringer-Q802USB-Premium-8-Input-Interface/dp/B008O517IC/ref=sr_1_4?keywords=usb+audio+mixer&qid=1581634566&sr=8-4)
  or
- [4 XLR Input Channel Mixer: Behringer Xenyx X1204USB](https://www.amazon.com/Behringer-X1204USB-Premium-12-Input-Interface/dp/B0039PPW60/ref=sr_1_7?keywords=usb+audio+mixer&qid=1581634566&sr=8-7)
- [Headphones of Mixer: Sennheiser HD 559](https://www.amazon.com/Sennheiser-HD-559-Open-Headphone/dp/B01L1IIEKM/ref=sr_1_28?crid=1YBC7OT44WEHB&keywords=sennheiser+headphones&qid=1581631453&s=electronics&sprefix=sennheiser%2Celectronics%2C201&sr=1-28)
- Appropriate cables for speakers if needed, either 1/4" to 1/4" or XLR Male to XLR Female, depends on your venue setup
- [Wireless Mics System Input Cables: 2x Hosa XLR Cables](https://www.amazon.com/gp/product/B004TVJL1U/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)
- USB Hub of choice, you'll need at least 3 inputs
- Micro HDMI to HDMI Cable if using a DSLR/Mirrorless Camera

**Software**

Now this is where things can get a little tricky, and where a lot of trial and error usually occurs. If you're planning to stream and record, or even capture your own desktop image and audio, Windows based computer make this part a lot easier to setup. You can get the exact same results with Mac OS, but you may have a couple of extra steps and things to know about. If you plan to just stream, you can get away with just letting the service handle your recordings. Twitch and YouTube will save VOD's of your streams, however Twitch deletes them after 14 days, while YouTube will upload your streams directly to your channel. I personally like to record while I stream so I can cut each presenter into its own seperate video and always have a copy of it. It's a good practice in general to save your content locally and not rely on a service alone.
Here is what I use to stream and record.

**My Setup**

- [Streaming/Recording: Open Broadcaster Software (OBS)](https://obsproject.com/)
- [Desktop Audio Capture: iShowU Audio Capture](https://support.shinywhitebox.com/hc/en-us/articles/204161459-Installing-iShowU-Audio-Capture-Mojave-and-earlier-)
- [Editing: DaVinci Resolve 16](https://www.blackmagicdesign.com/products/davinciresolve/)
- [Image Editing for Thumbnails: Affinity Photo](https://affinity.serif.com/en-us/photo/)

OBS is one of the best an easiest programs to get you started with live streaming. Its free, open source, and available for Windows, Mac, and Linux. There is also an alternative version called Streamlabs OBS which is a bit more user friendly, and operates more or less the same way as OBS. Since I am using a Mac OS Catalina, there are couple things to note with OBS. It requires extra permissions to record audio that you'll need to give OBS, and you'll need iShowU Audio, which allows you to capture your Mac desktops audio, so if you're playing music during intermissions or something like that you'll need this program. I'll go over how you set it up with OBS later. There is currently a bug at the time of writing this if you type in a password on Mac it'll crash OBS. As far as I am aware, Windows does not have these issues. As I stated above, I like to edit the recordings of the stream to fix any audio issues that may have occurred, and cut down the talks to just the content instead of any intermissions or technical difficulties. Finally, I also like create consistent thumbnails for the videos so that viewers know exactly what the talks are about and I use Affinity Photo to do this. Its a cheaper alternative to Photoshop but has all of the same features.