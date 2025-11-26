---
title: Full Digital Design From Chat
description: Use Mohet to build a complete digital design—project, hierarchy, HDL, and LibreLane—directly from chat.
---

# Build a Complete Digital Design Using Mohet

Mohet allows you to create full digital projects, generate HDL, run LibreLane, and inspect results **entirely from chat**—no manual file edits or Design Manager navigation required.

This tutorial shows the full flow using the **Basic Digital** mode.

---

# Before You Start

Mohet supports many AI models, but **not all of them can reliably execute multi-step chip design workflows**.

### Model Performance for Digital Flow

| Provider   | Model                          | Successful first time demo digital flow | Issues                                | Speed    | Comments                                                                                                                                                                                                                                                    |
| :--------- | :----------------------------- | :-------------------------------------- | :------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OpenAI** | GPT-5.1/GPT-5                  | **True**                                | No Known Issues                       | Medium   | Smartest model provides the best results from the first try, yielding excellent performance metrics.                                                                                                                                                        |
| **OpenAI** | GPT-5/5.1-Mini                 | **True**                                | No Known Issues                       | Slow     | Decent performance but a bit slow.                                                                                                                                                                                                                          |
| **OpenAI** | GPT-5/5.1-Nano                 | False                                   | May commit minor logical issues       | Slow     | Slower than the other models with weaker performance may require iterations.                                                                                                                                                                                |
| **OpenAI** | GPT-4                          | False                                   | May commit minor logical issues       | Slow     | Slow model with okay performance. I prefer the GPT-5-Mini to this one even though they are comparable.                                                                                                                                                      |
| **OpenAI** | GPT-4-Mini                     | False                                   | May commit minor logical issues       | Slow     | Slow model requires iterations but will get the job done, i don't recommend it.                                                                                                                                                                             |
| **OpenAI** | GPT-4-Nano                     | False                                   | Commits major logical issues          | Slow     | Very slow not worth using.                                                                                                                                                                                                                                  |
| **Groq**   | Moonshot/Kimi-K2-Instruct-0905 | **True**                                | Hallucinates tool call execution      | Medium   | Very large context window & works well but there's a major issue that it may hallucinate tool call execution without executing them.                                                                                                                        |
| **Groq**   | GPT-OSS-120B                   | False                                   | Limited Context Window                | **Fast** | The fastest model with decent performance and excellent presentability using tables and markup but the context window is really the issue where it may fail mid execution and not be able to complete the response causing an incomplete end of json error. |
| **Groq**   | qwen3-32b                      | False                                   | May commit minor logical issues       | Medium   | Just a mediocre model in every category.                                                                                                                                                                                                                    |
| **Local**  | GPT-OSS-20B                    | False                                   | Limited Context Window / Minor Issues | Medium   | The edge for this model is the cost, good for basic testing.                                                                                                                                                                                                |
| **Local**  | qwen3-coder-30b-a3b-instruct   | False                                   | Infinite Loop & Hallucinations        | Medium   | Faces the infinite loop issue and repeats tool calls.                                                                                                                                                                                                       |

**Recommendation:**  
Use **GPT-5**, **GPT-5.1**, **Moonshot**, or **GPT-OSS-120B** for the smoothest experience.

---

# 1. Start With the General Flow (Optional)

Before using the digital flow, you can test the **Default / General Flow**:

> “List the top 3 largest lakes in the world and include links.”

Mohet will perform live web search, summarize sources, and present clickable results.

This validates your provider + model setup.

---

# 2. Switch to a Strong Model

Open the **Model Selector** and choose a high-quality model  
(e.g., _GPT-5_, _GPT-OSS-120B_, _Moonshot_).

Low-tier models will often:

- forget the hierarchy
- produce invalid HDL
- break during LibreLane execution

---

# 3. Start the **Digital Designer** Flow

Switch the flow to **Basic Digital**.  
This flow is optimized for:

- Verilog generation
- PDK-aware hierarchy creation
- LibreLane config & runs

---

# 4. Create the Full Project Automatically

Send:

> **“Create a counter project under the GF180MCU D PDK with a library named `counter_lib` and a single cell. Build the entire hierarchy.”**

Mohet will:

- confirm the PDK
- create the project
- create the library
- create the cell

All appear instantly in the Design Manager.

---

# 5. Generate the HDL and Views

Next:

> **“Create a Verilog view and a LibreLane view under the cell.”**

Then:

> **“Write Verilog for a 4-bit counter using the top cell name as the module name and save it.”**

Mohet will:

- generate the HDL
- save it to the Verilog view
- validate the config

---

# 6. Run LibreLane From Chat

Ask:

> **“Run LibreLane for this design.”**

Mohet will:

- launch the run
- stream logs
- notify on completion

You can verify in:

**Design Manager → LibreLane → Runs**

---

# 7. Summarize and Inspect the Results

After the run:

> **“Summarize the LibreLane run results.”**

Mohet will provide:

- DRC/LVS status
- Area + metrics
- Warnings and violations
- Layout status

You can open the layout viewer to inspect the final GDS.

---

# 8. Extend the Design

Try asking Mohet to:

- add testbenches
- generate timing constraints
- build multi-cell hierarchies
- modify counter width
- generate higher-level digital subsystems

High-end models excel at this; small models will struggle.

---

# Final Notes

Using Mohet’s Digital Designer flow, you can build a complete GF180 digital project:

- **Hierarchy → HDL → LibreLane → Results**
- All inside chat
- With zero manual file work

Experiment with different models and flows to find the configuration that works best for your design style.
