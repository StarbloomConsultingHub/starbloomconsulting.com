---
title: "How I Built a Private AI System That Runs My Entire Operation"
description: "An operator with no coding background built a multi agent AI system that automates lead intake, legacy data sync, and daily decision support for under $300 a month. No cloud. No vendor lock. Here is exactly how we did it."
pubDate: 2026-06-07
author: "Darren Kelly"
tags:
  - "private AI"
  - "operational automation"
  - "n8n"
  - "edge AI"
  - "sovereign hardware"
  - "blue collar tech"
readingTime: "8 min"
featured: true
---

## I Am Not a Technologist

Let me get that out of the way first. I run operations. I managed erosion control crews in the field before I touched a line of code. I built a 21 room operation from a single room blueprint with no formal engineering training. My background is construction schedules, crew management, and watching margins tighter than most software founders watch their burn rate.

So when I say I built a private AI system that runs my entire operation, I mean I built it the same way I built every other system I have ever designed: by identifying the bottleneck, prototyping a fix, and iterating until the fix cost less than the problem.

This is the story of the Apex Core platform.

## The Problem That Started It

I was losing leads. Voicemails never returned. Form fills from the website went to an inbox nobody checked after 5 PM. My legacy desktop software for tracking inventory, orders, and compliance would not talk to anything built after 2015. I had a team member whose entire job was copying and pasting data from one screen to another. That is not a job. That is a tax on attention.

I looked at every SaaS solution on the market. They all wanted my data in their cloud. They all wanted a monthly subscription that increased every year. And none of them solved the core problem: my operational data was trapped inside software that would not talk to modern tools.

The conventional advice was to replace the legacy system. That would cost six figures and take 12 months. I did not have six figures or 12 months.

So I decided to build around it.

## Why I Chose Local AI Over Cloud

Every vendor I talked to pitched the same architecture: send your data to us, we process it, we send results back. That architecture has three fatal flaws for any real operation:

**Flaw one: uptime.** When the internet goes down, cloud AI goes dark. My operation runs on a schedule. I cannot afford a system that stops working because of a fiber cut three towns over.

**Flaw two: latency.** Cloud inference adds 200 to 800 milliseconds per call per API round trip. When you need to qualify a voice call in real time, that is an eternity. Sub 100 millisecond response is not a nice to have. It is the difference between a caller hanging up and a caller being booked.

**Flaw three: data ownership.** Every API call is a handshake with a third party. My operational data tells a story about throughput, margins, bottlenecks, and growth trajectory. I am not interested in that story being used to train somebody else's product.

The answer was local. Everything on hardware I owned. No data leaving the building.

## The Stack

Here is exactly what we run. Every piece is open source or fair code. No proprietary black boxes.

| Component | What It Does | Cost |
|---|---|---|
| n8n (workflow automation) | Orchestration engine that connects every tool and agent | Free (self-hosted) |
| Docker | Container runtime for all services | Free |
| Ollama + Qwen 7B | Local LLM for inference, classification, routing | Free (runs on existing GPU) |
| Cloudflare Tunnel | Outbound only secure connectivity | Free tier |
| Vapi | Voice AI agent platform (API only calls out) | Usage based (~$50/mo) |
| Twilio | SMS gateway for inbound texts | Usage based (~$20/mo) |
| Google BigQuery + Looker Studio | Analytics pipeline and dashboards | Included at Founders Circle |

**Hardware:** A single desktop workstation with an NVIDIA RTX 5060 Ti (16GB VRAM). Total cost: $1,200. That is the entire infrastructure investment. Everything else is subscription at roughly $70/month combined.

## What It Does

The system has three core capabilities that run 24/7:

### 1. The Intake Engine

When a lead calls after hours, Vapi answers. It sounds like a real human. It qualifies the caller against our criteria. It checks availability in our scheduling system. It books the appointment. It sends a confirmation via SMS. It logs everything into our CRM.

This alone recovered an estimated $4,000 to $6,000 per month in missed calls in the first 60 days.

### 2. The Legacy Data Bridge

My desktop ERP software does not have an API. It was written in a language that predates REST. It runs on a single machine in the back office and it has every scrap of operational data I care about going back years.

We deployed a vision based RPA agent that watches the ERP screen, reads the data visually, and streams it into BigQuery. The agent runs locally on the same machine. No cloud touch. No API integration required. Just a camera on the screen that never sleeps.

Now I have Looker Studio dashboards showing real time inventory flow, order velocity, and staffing efficiency. The ERP has not changed. The data is just no longer trapped.

### 3. The Daily Reflection

Every morning at 5:30 AM, the system reads the previous day's logs. It cross references them against historical trends. It surfaces anomalies, bottlenecks, and decisions I need to make before my first cup of coffee.

I did not design this to be impressive. I designed it because I was tired of spending the first hour of every day reconstructing what happened yesterday.

## What It Costs

This is the part that surprises most operators. Here is the actual monthly spend:

| Expense | Amount |
|---|---|
| Vapi voice minutes | $50 |
| Twilio SMS | $20 |
| Cloudflare Tunnel | $0 |
| Google BigQuery | $5 |
| Domain + email | $10 |
| **Total monthly** | **$85** |

The hardware was a one time $1,200 purchase. Compared to $400 to $800/month in cloud API costs for the same workload, the math was clear by month three.

## What I Learned

Building this changed how I think about operations and technology. Some lessons:

**Start with the bottleneck, not the stack.** I did not start by choosing a platform. I started by asking: what is the most expensive repetitive task in my operation? For us it was missed leads and manual data entry. Everything else was built around those two problems.

**Local is not slower. It is faster.** When your inference runs on the same network as your data, latency disappears. Sub 100 millisecond voice response is not possible over the public internet. It is easy on a local GPU.

**Your team does not need to learn anything new.** The whole point of automation is that it works without training. If your system requires your crew to change their workflow, you have not automated anything. You have added complexity.

**Expensive integrations are a trap.** The legacy data bridge proved that you do not need an API to integrate with old software. You need a different approach. Vision based RPA cost us zero in vendor negotiation and delivered in days, not months.

## What Comes Next

I built Apex Core for my own operation because nothing on the market fit. I run it on hardware I already owned, with tools that cost me less than my monthly internet bill.

If you run a real operation with real data, the same architecture is available. It runs on your hardware, under your control, at a fraction of the cost of cloud dependent alternatives.

I wrote this to show that it is possible. Not theoretical. Not requiring a team of engineers. Just a clear problem, the right tools, and a willingness to build around the system instead of replacing it.

---

*I published a longer version of this thinking on Medium: [I Gave My AI a Second Brain That Reads Its Own Dreams](https://medium.com/@darrenkelly_90696/i-gave-my-ai-a-second-brain-that-reads-its-own-dreams-e698149c7b23) which covers the dream cycle architecture we built into the system.*

*Want to see if your operation is a fit for the same approach? [Book a 60 minute call](/contact). No pitch. Just an honest assessment.*
