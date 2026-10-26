# `createSetPrimaryBotTool`

[English](README.en.md) · [Português (Brasil)](README.md)

## Role and source

Creates the tool that asks the host to change the primary agent. It is a capability and message adapter, with no selection algorithm of its own. [Source](../../../reference/runtime/host-main.cjs#L757504-L757522).

## Interface

The factory accepts the `setPrimaryBot` function. The tool schema requires `{ agent_id: string }`, applies `trim`, and requires at least one character. Execute calls `setPrimaryBot(args.agent_id)`, awaits an object with a name and ID, and constructs a textual confirmation. The wrapper does not catch callback errors.

| Aspect | Implementation |
| --- | --- |
| Internal identifier | `PLATFORM_ACTION` |
| Offered name | `SetPrimaryBot` |
| Described activity | Target equal to the selected ID |
| Own persistence | None |
| Roster query in execute | None |
| Confirmation through local state | None; uses the callback response |

## Policy described to the model

The description instructs the model to act only when the user has asked to change the primary bot; present existing options; ask for a choice; wait for the answer; then confirm in one sentence. Passing its own ID keeps the current agent as primary. This sequence belongs to the tool instruction. The schema alone does not establish that consent was collected.

The builder includes the factory only if `agentManagement.setPrimaryBot` exists. A host without that capability does not receive the tool through this path. [Builder](../../../reference/runtime/host-main.cjs#L772016-L772025).

## Relationship to the RPC

The `SetGrokBotMainAgent` descriptor states that the target must be a live agent belonging to the user and that it replaces the previous selection. `EnsureGrokBotDefaultMainAgent` has a contract for idempotent creation/selection of the default. The injected callback may encapsulate this integration, but the wrapper does not contain the RPC call, and the concrete connection must not be invented. [Contracts](../../../reference/runtime/host-main.cjs#L212218-L212250).

## Functional limit

Changing the primary bot does not automatically change the parent/child relationship of existing runs. `WakeParent` uses the execution parent. This function contains no opportunity search, scheduling, context reading, ranking, or work redistribution.

[Primary bot](../../components/primary-bot/README.en.md) · [Proactivity](../../components/proactivity/README.en.md).
