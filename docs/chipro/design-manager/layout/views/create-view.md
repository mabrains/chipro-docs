---
title: Create a View
sidebar_label: Create a View
---

You can add a new view to a cell using:

### Option A — From the Cell Actions Menu

1. Select a cell
2. Click **…** on the cell
3. Choose a view type (Schematic, Symbol, Layout, Netlist, Verilog, LibreLane)

![Create From Cell Menu](@site/static/img/chipro/designManager/view/CreateFromCellMenu.png)

---

### Option B — From the Views Panel

1. Select your cell
2. Click the **+** button in the Views panel
3. Choose a view type (Schematic, Symbol, Layout, Netlist, Verilog, LibreLane)

![Create From Plus Button](@site/static/img/chipro/designManager/view/CreateFromPlus.png)

---

## View Dialogs

When you choose a view type, a **Create \<View Type\>** dialog opens.

### Netlist Views — Choose Netlist Type

For **Netlist** views you must:

1. Enter a **View Name**
2. Choose a **Netlist Type**:
   - **SPICE** – for circuit simulation
   - **LVS** – for layout-vs-schematic verification

![Create Netlist View](@site/static/img/chipro/designManager/view/CreateNetlistView.png)

### Other View Types — Just Name the View

For all other view types (Schematic, Symbol, Layout, Verilog, LibreLane) you only need to enter a **View Name**.  

![Create Schematic View](@site/static/img/chipro/designManager/view/CreateSchematicView.png)

---

## Available View Types

| View Type     | Purpose                             | Editor Tool |
| ------------- | ----------------------------------- | ----------- |
| **Schematic** | Draw circuit schematics             | Xschem      |
| **Symbol**    | Create symbols for hierarchy        | Xschem      |
| **Layout**    | Physical design (GDS, layers, etc.) | KLayout     |
| **Netlist**   | Generate SPICE/LVS netlists         | VSCode UI   |
| **Verilog**   | HDL / SystemVerilog coding          | VSCode UI   |
| **LibreLane** | Launch OpenLane/LibreLane workflows | VSCode UI   |

---
:::info
Some view types depend on your project configuration:

- The **LibreLane** view becomes available only after a **PDK** is installed.
:::
