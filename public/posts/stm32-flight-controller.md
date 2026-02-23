# Building a Custom STM32 Flight Controller

*This is a placeholder article.*

In this post, I will discuss the architecture of my custom flight controller based on the STM32F4 series microcontroller.

## RTOS Scheduling
Using FreeRTOS allowed me to decouple the high-frequency control loop from lower-priority tasks like telemetry and logging.

## Sensor Fusion
I implemented a robust Kalman filter to fuse data from the MPU6050 accelerometer and gyroscope, providing stable attitude estimation even under high vibration.
