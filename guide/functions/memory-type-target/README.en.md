# `memoryTypeTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

[Component: memory](../../components/memory/README.en.md) · [Index](../../README.en.md)

**Primary source:** [host-main.cjs:771533-771595](../../../reference/runtime/host-main.cjs#L771533-L771595). Static analysis of the original snapshot; names preserved from the bundle.

## Contract

`memoryTypeTarget(args)` decides where a fact may be stored. The output is a structured resolution, `{ok:true,...}` or `{ok:false,reason}`. It does not write the fact.

## Format v1

`shardTarget` maps profile/shared_profile to the profile tier and journal/shared_journal to log. A type without a known tier is rejected. A user owner uses user scope. For a bot owner, an omitted/team audience uses agent scope. A private audience prefers user_bot when available, then conversation; without a private destination, it rejects the request.

## Format v2

`folderTarget` validates metadata and computes the path. User-owned types never accept a team audience; they use the user/speaker folder. A team audience for a bot type requires a team bot or shared story. In a shared bot, private memory requires `userBotScope`. The destination includes owner, audience, path, and validated meta.

## Properties

The distinction between owner and audience avoids confusing personal memory shared between assistants with team memory. The schema may allow a type even when that conversation cannot write it. The function centralizes destination selection, but final authorization/persistence remains in the layer that applies the update.

## Cases to preserve

A reproduction must retain refusals for a type without storage, invalid metadata, missing private scope, and attempts to place user memory in the team. Do not replace all these refusals with a fallback to the bot's file.
