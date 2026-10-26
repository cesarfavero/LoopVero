# `runSandAutomationNowInSession`

[English](README.en.md) · [Português (Brasil)](README.md)

## Responsibility and source

Asks the automation service to execute a routine in a session context. This is the identified remote path for that request; it does not call the retired BOX loop. [Implementation](../../../reference/runtime/host-main.cjs#L505720-L505746).

## Interface

| Input | Use |
| --- | --- |
| `deps.listAutomations()` | Find the definition by agent and local ID |
| `deps.client.testAutomation()` | Manual execution RPC |
| `args.agentId`, `args.localId` | Routine identity |
| `args.sessionId` | Destination remote session |

The function is asynchronous and does not return an inference result. RPC completion does not mean the work or its delivery to the user has finished.

## Step by step

1. Finds the entry with the same `agentId` and `automation.id`.
2. If the entry exists and does not have a schedule-only trigger, throws `SandAutomationRunNowRefusedError`.
3. Computes `stableAutomationId` for the agent/routine pair.
4. Assembles `TestAutomationRequest` with `samplePayload.case = "cron"`, `CronSamplePayload`, and `grokBotSessionId`.
5. Awaits `client.testAutomation`.
6. Converts recognized Connect refusals into the domain error, preserving `rawMessage`; propagates other errors.

`isScheduleOnlyTrigger` requires at least one cron schedule and no event trigger. A group mixing cron and an event is refused on this path, even if it contains a valid schedule.

## Edge cases

| Case | Local result |
| --- | --- |
| Definition found, schedule only | Attempts the RPC |
| Definition found, listener | Refuses before the RPC |
| Definition found, mixed group | Refuses before the RPC |
| Definition not found in the local snapshot | Still attempts the RPC with a derived ID |
| Recognized remote refusal | Domain error with the remote message |
| Network failure or another exception | Propagated |

The missing-definition case matters: the function does not implement a mandatory local “not found” result. Authorization, final existence, and execution admission belong to the service being called.

## Connection to the extension

`automationsExtension` injects the client and the reading of definitions from the transcript into the `runNowInSession` method. Its suspend method affects reconciliation polling. In contrast, `AutomationRuntime.runAgentAutomationNow` calls `refuseBoxTurn` and throws; the similar names must not be confused. [Remote wiring](../../../reference/runtime/host-main.cjs#L505990-L506026), [local refusal](../../../reference/runtime/host-main.cjs#L734296-L734298).

[Automations](../../components/automations/README.en.md) · [Stable ID](../stableAutomationId/README.en.md).
