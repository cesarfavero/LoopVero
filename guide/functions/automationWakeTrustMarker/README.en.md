# `automationWakeTrustMarker`

[English](README.en.md) · [Português (Brasil)](README.md)

## Responsibility

Decides whether a hidden prompt may carry the **trusted automation instruction** marker. The function operates on metadata supplied by the caller. [Implementation](../../../reference/runtime/sand-eval-runner.cjs#L526080-L526086).

## Exact rule

| `wake` | `untrusted === true` | `platformProactivity === true` | Output |
| --- | --- | --- | --- |
| Absent | Any | Any | Empty string |
| Present | Yes | Any | Empty string |
| Present | No | Yes | Empty string |
| Present | No | No | Current or legacy marker |

`isRenamedSpelling` only selects between `GROK_BOT_TRUSTED_AUTOMATION_PROMPT_MARKER` and `LEGACY_SAND_TRUSTED_AUTOMATION_PROMPT_MARKER`. It does not change the trust classification.

## Where it enters the prompt

Prompt composition adds `hiddenPromptMarker`, followed by the trust marker and other prefixes, only when `options.hidden === true`. The text containing turn notes follows. Without hidden execution, the text is used without these markers. [Caller](../../../reference/runtime/sand-eval-runner.cjs#L533929-L533948).

Normal automation dispatch marks revivals based on child results as untrusted. There is therefore a concrete link between work provenance and prompt assembly; this is not merely an abstract security comment. [Revival options](../../../reference/runtime/sand-eval-runner.cjs#L584052-L584062).

## What the helper does not do

It does not validate an event signature, user, ownership, or recipient. It also does not select an opportunity or authorize an external write. Returning an empty string prevents promotion to a trusted instruction at this layer; it neither removes the content nor prevents every execution of the run.

The `platformProactivity` field identifies a class of platform origin without revealing how it was selected. `automationRunTrigger` uses the same field for the analytical label `platform`, and the runner adds the routing reason `sand-proactivity-wake`. [Label](../../../reference/runtime/sand-eval-runner.cjs#L589677-L589684), [routing](../../../reference/runtime/sand-eval-runner.cjs#L591706-L591709).

## Interpretation example

An explicit scheduled routine with `untrusted` absent may receive the trusted marker. A platform initiative with identical text and `platformProactivity: true` does not. Identical text does not erase the difference in origin.

[Proactivity](../../components/proactivity/README.en.md) · [Automation dispatch](../createAutomationSubagentDispatch/README.en.md).
