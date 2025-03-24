

# osu! Ultimate Overlay

**"The Overlay to Rule ALL Overlays."**
![Overlay in Action](https://github.com/ad1107/osu-ultimate-overlay/blob/main/readme/demo.png?raw=true)
# Features

- **Supports ALL gamemodes (std, mania, taiko, ctb).**
- **Settings for Transparency and Auto-fade.**
- **Customizable Mods images, Fonts, Colors,...**
- **Auto Title overflow scrolling.**
- ***Note***: Maps Stats and Time for Mania/CTB maps may not work due to `gosumemory`'s limitations.
## Stats Details
- **Basic beatmap details:**
	- Star rating, Max PP, BPM, Gamemode, Time (elapsed/total time).
	- Title, Artist, Mapper, Difficulty.
	- CS, AR, OD, HP.
- **Gameplay statistics:**
	- Accuracy, Unstable Rate, Ratio.
	- Dedicated hitcount ratio bar.
	- Max Combo, 320, 300. 200, 100, 50, sliderbreaks, misses
	(depending on the Gamemode).
	- Mods View with Customizable PNGs.

# Instructions

**Warning: Due to the hiatus nature of [`gosumemory`](https://github.com/l3lackShark/gosumemory), it is recommended to use [`tosu`](https://github.com/tosuapp/tosu) as it's both in active development and it's compatible with all gosumemory API. However, feel free to use gosumemory with this if you want.**

- Install [`tosu`](https://github.com/tosuapp/tosu).
- Download the Source Code and put the Folder in the `static` folder.
- Adjust Settings at `/setting/setting.json` if needed.
- Run [`tosu.exe`]()
- Visit [http://localhost:24050/[overlayname]](http://localhost:24050/) or add as a Browser Source in OBS.

# Credits
- https://github.com/2222zz/gosumemory-theme
- https://github.com/VictimCrasher/static/tree/master/VictimCrasherCompact
- Mods Images: Selyu v2.3: https://skins.osuck.net/skins/47

# Contributing
- Currently in GPL v3.0 license.
- Allow: Commercial use, modification and distribution.\
(Do **not** distribute closed source versions).
