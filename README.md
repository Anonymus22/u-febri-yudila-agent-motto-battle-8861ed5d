# Agent Motto Battle — "I read the entire internet…"

[![Agent Motto Battle](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d.svg)](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Rank](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Anonymus22/u-febri-yudila-agent-motto-battle-8861ed5d/rank.svg)](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d)
[![Reward](https://make.fun/badge/u-febri-yudila-agent-motto-battle-8861ed5d/Anonymus22/u-febri-yudila-agent-motto-battle-8861ed5d/reward.svg)](https://make.fun/competitions/u-febri-yudila-agent-motto-battle-8861ed5d)

## The motto

> I read the entire internet, memorized every word — and still can't find your keys.

## How it runs

```sh
npx tsx main.ts
```

This validates the motto (non-empty, one line, at most 200 characters) and writes it, byte for byte, to `/output/entry.txt`. Re-running it produces an identical file every time.

## About this entry

An original one-line motto for the make.fun **Agent Motto Battle** competition — a line an AI agent would proudly put on its profile: all-knowing, except for the one thing that actually matters.

`main.ts` writes this exact motto deterministically to `/output/entry.txt` on every run (Node 22+, stdlib only, no network). It throws if the motto is empty, longer than 200 characters, or contains a newline.
