---
title: "HVAC Fleet Route Optimization with Private AI — 38% Fuel Reduction"
description: "A regional HVAC fleet deployed on-premise AI for route optimization and dispatch scheduling, cutting fuel costs by 38% and idle time by 2.1 hours daily per technician — with zero cloud API calls."
clientName: "Mid-Atlantic Climate Systems"
metrics:
  - "38% reduction in fuel costs across 22-vehicle fleet"
  - "2.1 fewer idle hours per technician per day"
  - "Zero cloud dependency — all inference runs on a single on-premise workstation"
  - "Dispatch re-optimization latency: 90 seconds (down from 4 hours manual)"
  - "Full ROI achieved in month 3"
pubDate: 2026-04-15
heroImage: "/images/case-studies/hvac-fleet.jpg"
author: "Darren"
tags:
  - "route optimization"
  - "fleet management"
  - "on-premise AI"
  - "cost reduction"
featured: true
---

## The Problem

Mid-Atlantic Climate Systems runs a 22-vehicle HVAC fleet across three counties. Every morning, a dispatcher spent four hours manually assigning service calls to technicians based on geography, urgency, and parts inventory — a brittle process that broke down the moment a single truck got delayed or a job ran long. Fuel costs were $14,200/month and climbing. Idle time averaged 3.4 hours per technician per day.

The company evaluated cloud-based route optimization SaaS products. Three problems surfaced: (1) every provider required uploading customer addresses and service histories to their cloud, (2) per-vehicle pricing would cost $900/month at their fleet size, and (3) no provider could integrate with their legacy on-premise inventory system without a custom API build that nobody wanted to quote.

## The Deployment

StarBloom Consulting deployed a private AI cluster on a single Dell Precision workstation the company already owned — a machine previously used for CAD that had been sitting idle. The stack:

- **Ollama** running **Qwen 2.5 Coder 7B** (Q4_K_M quantized) for the optimization engine
- **n8n** for workflow orchestration — ingesting the morning dispatch CSV, technician GPS pings, and inventory levels from the on-prem SQL Server
- **Open WebUI** as the dispatcher's interface — a chat-style prompt where they describe exceptions ("Truck 14 is delayed 90 minutes, redistribute his route")
- **A custom Python agent** that runs a constraint-satisfaction solver every 15 minutes, re-optimizing all active routes against real-time technician positions and parts availability

The entire stack runs air-gapped. No API keys. No cloud billing. The workstation's RTX A2000 GPU handles inference comfortably at 4K context — the optimization payloads are structured JSON, not long-form text.

## Results

| Metric | Before | After | Delta |
|---|---|---|---|
| Morning dispatch time | 4 hours (manual) | 90 seconds (automated) | −99.4% |
| Monthly fuel cost | $14,200 | $8,804 | −38% |
| Idle time per technician | 3.4 hrs/day | 1.3 hrs/day | −2.1 hrs |
| Missed appointment windows | 12–15/week | 2–3/week | −80% |
| Dispatcher overtime | 18 hrs/month | 0 hrs/month | −100% |

The $950 deployment fee was recovered in the first two weeks of fuel savings alone. The company now runs the same stack for HVAC load calculations and parts inventory forecasting — both on the same hardware, at zero additional cost.

## What Made This Work

1. **The hardware already existed.** The CAD workstation was idle. No CapEx required.
2. **The data never left the building.** Customer addresses, service histories, and inventory data stayed on the SQL Server they'd been running for years.
3. **The interface is a chat box.** The dispatcher doesn't know what a constraint solver is. She types "Truck 14 delayed, fix the afternoon" and the system redistributes routes in 90 seconds.
4. **No recurring costs.** The models are open-source. The orchestration is open-source. The only cost was deployment.

This is the pattern we repeat across every engagement: find the idle hardware, deploy the open-source stack, build the bridge between the terminal and the shop floor.
