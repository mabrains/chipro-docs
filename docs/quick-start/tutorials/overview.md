# Building a Full Digital Design From Chat

Learn how to use Mohet to create projects, generate HDL, run simulations, and inspect results—all without touching the Design Manager.

---

##  Important Notes Before You Start

### **1. Use a high-quality model**

Mohet gives you complete control over the provider and model.
However:

* **Low-tier models → will fail frequently**
* **Limited-context models → will forget instructions**
* **Cheap models → may not generate valid Verilog, configs, or workflow steps**

For the *best* results, we strongly recommend:

* **GPT-5 / GPT-4.1 / GPT-5-mini**
* **Moonshot**
* **Groq + QwQ / Llama 3.1 405B**
* **OpenAI GPT-OSS 120B**
---

# Tutorial Overview

In this tutorial, we will:

1. Start a new chat using the **Digital Design Flow**
2. Create a full GF180 MCU project from scratch
3. Auto-generate the hierarchy (library, cell, views)
4. Generate Verilog code for a 4-bit counter
5. Run LibreLane directly from chat
6. Inspect layout, logs, and results—all generated automatically

Everything is done **inside the Mohet chat window**.
You will **not** manually create files, open sidebars, or modify the Design Manager.

---

# 1. Using the General Flow

Before focusing on the Digital Designer Flow, let’s quickly see what the **Default / General Flow** can do.

This flow is ideal for:

* General questions
* Research
* Web search tasks
* Summaries and reports

Example:

> **“List the top 3 largest lakes in the world and give me the links.”**

Mohet will:

* Perform a live web search
* Retrieve sources
* Summarize results
* Present links you can click
* Produce a structured report

This demonstrates how Mohet behaves in non-engineering tasks.

---

# 2. Switch to a High-Tier Model

Before starting the digital workflow, select a capable model:

* Open the **model selector** in the header
* Choose **GPT-5**, **GPT-OSS 120B**, **Moonshot**, **QwQ-XL**, etc.

This ensures Mohet can correctly reason about hierarchy creation, HDL syntax, LibreLane configuration, and PDK flows.

---

# 3. Start the Digital Designer Flow

Switch to the **Basic Digital** flow from the sidebar or header flow selector.
This flow is optimized for:

* Verilog/VHDL
* Hierarchy generation
* Project + PDK setup
* LibreLane interactions
* Simulation workflows

---

# 4. Create the Project Automatically

In a new chat, send:

> **“Create a counter project under the GF180MCU D PDK with a library named `NSL` and a single cell. Build the entire hierarchy.”**

Mohet will:

* Verify the PDK exists
* Create the project
* Add the library
* Add the cell

You can verify everything in the **Design Manager panel**—it will appear instantly.

---

# 5. Create Verilog & LibreLane Views

Next, ask:

> **“Create a Verilog view and a LibreLane view under that cell.”**

Mohet checks:

* Project folder
* Library folder
* Cell folder

Then it auto-creates:

* `verilog/` view → with placeholder module
* `liberate/` or `liblane/` config

These appear immediately inside the Design Manager.

---

# 6. Generate the Verilog Code

Now ask:

> **“Write Verilog code for a 4-bit counter using the top cell name as the module name. Save it into the Verilog view file.”**

Mohet will:

* Generate clean Verilog code
* Use the correct top module name
* Write the content to the file
* Display the code in the chat for review

You can confirm by opening it in VSCode or the inline editor.

---

# 7. Run LibreLane From the Chat

Ask:

> **“Run LibreLane for this design.”**

Mohet will:

1. Prepare a LibreLane run
2. Trigger the flow server
3. Post status updates
4. Stream logs into the chat
5. Confirm when the run completes

You can also monitor in:

* `Design Manager → LibreLane → Runs`
* Open the log panel
* Inspect the checker output

---

# 8. Summarize the Run Results

Once the run completes, ask:

> **“Present the results of the LibreLane run.”**

Mohet will:

* Parse the run directory
* Extract DRC, LVS, STA, layout status, area, warnings
* Produce a summary
* Provide insights (timing, violations, routing issues)

This works even if the run created multiple subfolders.

---

# 9. Visualize the Layout

Go to:

**Design Manager → LibreLane → Layout Viewer**

You can:

* Inspect GDS
* Zoom on the final routed layout
* Compare runs
* Validate if everything matches the generated Verilog logic

All of this was achieved **without manually editing any file or opening the hierarchy**.

---

# 10. Try Other Variations

You can extend the tutorial by asking Mohet to:

* Add testbenches
* Run NGSpice for mixed-signal blocks
* Generate multi-cell combinational designs
* Build SoC-level hierarchies
* Modify parameters and regenerate layouts

High-tier models excel here.
Low-tier models may misinterpret the hierarchy or generate invalid HDL.

---

# Recommended Models for Mohet Tutorials

To avoid errors, hallucinations, and partial outputs:

### **Top Tier (Best)**

* GPT-5 (OpenAI)
* Moonshot (Kimi AI)
* QwQ-XL / QwQ-Pro
* GPT-OSS-120B
* Groq + Llama 3.1 405B

### **Acceptable**

* GPT-4.1
* Mistral Large
* Llama 3.1 70B (cloud or LMStudio local)

### **Not Recommended**

* Nomic embed models
* Ultra-small 1B–8B models
* Basic LMStudio local models

They cannot reliably:

* Maintain hierarchy reasoning
* Generate HDL without syntax errors
* Understand LibreLane configs
* Follow multi-step tasks
* Produce consistent simulation flows

---

# Final Notes

Mohet is fully capable of building entire chip design flows end-to-end with **zero manual file editing**.
You can:

* Generate HDL
* Build hierarchy
* Run LibreLane
* Inspect results
* Debug runs
* Iterate with AI

Try different models and flows to see which performs best for your workflow.