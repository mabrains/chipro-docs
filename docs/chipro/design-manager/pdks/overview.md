---
title: PDK Manager
sidebar_label: Overview
---

The **Process Design Kit (PDK) Manager** allows you to browse, install, update, and remove PDKs for your Chipro projects.  
Each project can use **one PDK**, and views such as **schematic, layout, netlist, librelane and symbol** depend entirely on the PDK environment.

The PDK Manager interface lists:

- **Installed PDKs** – available immediately for use  
- **Available PDKs** – ready to download and install  
- **Total PDKs** – all PDKs supported by your Chipro installation  

![PDK Manager](/img/chipro/designManager/pdk/PDKs.png)

You can search by **PDK name, technology, or tags**, and install PDKs with a single click.

:::info
A valid **PDK is required** for many core Chipro features:

- A project **cannot operate** without an installed PDK.  
- Views such as **Layout**, **LibreLane**, and **Schematic** rely on the PDK to load correctly.  
- If a PDK is removed while still in use, the affected views will **stop functioning** until the PDK is reinstalled.  
:::