Howto setup a 3G Router and Access-Point
========================================

Introduction
------------

This project describes the setup of a Raspberry Pi as a 3G router and
Wifi access-point. You will find a number of instructions on the internet
and this description is nothing new. It just ties all ends together and
provides all necessary configuration files. It does not mean that you don't
have to edit some files though.

The description is based on a fresh installation of Raspbian Wheezy. You
should first try to replicate every step exactly (**exactly!**) 
as described here before you start your own experiments.

You should have some experience with Linux and the commandline and know
how to find and read documentation (man pages, Google, forums). **This is
definitely no guide for absolute beginners.**

Structure of the Project
------------------------

Besides this README, all details are in the file
[Instruction.md](./Instruction.md "Instruction.md"). All
directories below **files** contain (sample) configuration files and utilities.
One of the steps during installation will be that you copy the contents
of **files** to the root-directory of your Raspbian installation.

Some scripts in the **bin** directory are one-time helper-scripts useful
during setup. They are not necessary for productive use of the router/ap.

