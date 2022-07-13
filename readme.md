# Accelerometer Test Suite 🔄

## Introduction

This repo started as an investigation into cross-platform implementation of accelerometer controls.

It now contains demos of accelerometer controls. These are intended for use on mobile devices running Android or iOS.

## Use

These desos are hosted in GitHub Pages.

[Go to this location](https://devarrowsmith.github.io/accelerometer-test/) on a device with an accelerometer (eg. a mobile phone) to try the demos.

## Demos & Support

| Demo | Description                                                                                                           | Hardware Support:                 | OS Support:  | Browser Support:              |
| ---- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ------------ | ----------------------------- |
| Dot  | Tilt controls move a dot around the screen. The dot accelerates/decelerates as if it were a rolling ball.             | Mobile devices with accelerometer | Android, iOS | Chrome, Safari, Firefox, Edge |
| Tilt | Tilt controls move a block horizontally within a frame. The block snaps to specific positions: left, right or center. | Mobile devices with accelerometer | Android, iOS | Chrome, Safari, Firefox, Edge |

## On Environments

Implementation of accelerometer controls differs between Android and iOS.

Android permits direct access of accelerometer controls using a simple event listener:

```
window.addEventListener('deviceorientation', functionToHandleMotionData);
```

iOS restricts accelerometer acces in a variety of ways:

- Accelerometer data can not be accessed via an iFrame or cross-origin source (restricting use of motion data in codepen demos - which is where this project began)
- Accelerometer data must be requested by a user interaction, in one of a small number of specific formats chosen by Apple. One such format is the use of an `onclick` event listener in a `button` element. This user interaction must directly invoke the method `DeviceMotionEvent.requestPermission`. The response from this interaction must be handled to set up the event listener that provides motion data. See the demos in this repo for a detailed example of the implementation.

## Next Steps

- Improve Tilt demo: Position `block` better (currently off-center)
- Only render Permissions buttons in iOS (not in Android)
