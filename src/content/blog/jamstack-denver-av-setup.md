---
date: 2020-02-12T22:13:14Z
title: JAMStack Denver Audio and Video Setup - How we record and stream our Meetup
author: Zach Brooks
hero_image: ''
content: ''

---
I am an co-organizer of the JAMStack Denver meetup and also the A/V guru for streaming and recording all of the talks at our meetup. After our February 2020 meetup, we got a lot of other groups and people interested in how we have things setup for recording and live streaming everything. So I thought it would be best to explain everything in a post here for others interested in recording/streaming their own meetups, and what I use to do everything at JAMStack Denver.

I will be breaking everything down in the following sections:

**Hardware**  
**Software  
Software Settings  
Twitch Settings  
Creating Thumbnails  
Uploading to Youtube**

**Hardware**

I'll start with the hardware I use for my setup, some cheaper alternatives I recommend, and the minimum set of hardware you'll need to get started.

**My Setup**

* [2019 Macbook Pro 16 inch 2.3GHz 8‑core](https://www.apple.com/us-hed/shop/buy-mac/macbook-pro/16-inch-space-gray-2.3ghz-8-core-processor-1tb)
* [Camera: Fujifilm X-T3 w/XF18-55mm Lens Kit](https://www.amazon.com/gp/product/B07H3PLXZ3/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
* [Mactrem Camera Tripod](https://www.amazon.com/gp/product/B01MZAD5CU/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
* [Camera Capture Card: Elgato Cam Link 4K](https://www.amazon.com/Elgato-Cam-Link-Broadcast-Camcorder/dp/B07K3FN5MR/ref=sr_1_2?keywords=elgato+cam+link&qid=1581549237&sr=8-2)
* [Capture Card: Magewell USB Capture HDMI Plus](https://www.amazon.com/gp/product/B01N16ZM2M/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
* [Microphones: Shure BLX1288/CVL Dual Channel Combo Wireless System](https://www.amazon.com/gp/product/B016APL6UG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
* [Mixer: Behringer Xenyx 1204USB Premium 12-Input 2/2-Bus](https://www.amazon.com/Behringer-Xenyx-1204USB-Premium-12-Input/dp/B00871VO5Y/ref=sr_1_1?keywords=behringer+1204&qid=1581548595&s=musical-instruments&sr=1-1)
* [Mixer Output Cables: 2x GLS Audio 25 foot Mic Cable Patch Cords](https://www.amazon.com/gp/product/B003JJQMD8/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
* [Wireless Mics Input Cables: 2x Hosa HMIC-003 REAN XLR3F](https://www.amazon.com/gp/product/B004TVJL1U/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1)
* [Elgato Stream Deck Mini](https://www.amazon.com/gp/product/B07DYRS1WH/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)
* [Anker USB C Hub Adapter, 5-in-1](https://www.amazon.com/Anker-Adapter-Ethernet-MacBook-ChromeBook/dp/B071G83L1J/ref=sr_1_3?keywords=anker+usb+c+hub&qid=1581549203&sr=8-3)
* [Syntech USB C to USB Adapter](https://www.amazon.com/gp/product/B07CVX3516/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
* [Atevon 4K HDMI Cable 10 ft](https://www.amazon.com/gp/product/B01N22LFPL/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)
* [UGREEN Micro HDMI to HDMI Cable Adapter 4K 3 ft](https://www.amazon.com/gp/product/B06WWQ7KLV/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1)

Here's a diagram of how I have everything connected as well for reference:  
//Diagram of setup

At first glance this is quite a bit of hardware. Some of it is a bit overkill for creating a simple live stream, like the Mirrorless DSLR I use, but I use the camera for photography as well and it doubles as a great live streaming camera. The 8 core Macbook Pro I have isn't necessary either, but for streaming and recording I would recommend at least a computer with 4 CPU cores if not 6 due to the video encoding being CPU bound. With that said, this is what I would recommend for an ideal setup.

**Recommended Setup**

* 4-6 core CPU Computer
* 