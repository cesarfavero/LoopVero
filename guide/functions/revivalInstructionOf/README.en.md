# `revivalInstructionOf` and revival assembly

[English](README.en.md) · [Português (Brasil)](README.md)

## Role and source

Selects the instruction that accompanies a batch of background results. This is a deterministic policy for **revival type**. Semantic assessment of usefulness remains in the instructions given to the model. [Implementation](../../../reference/runtime/sand-eval-runner.cjs#L583937-L583948).

## Input and output

Accepts `completions` and `context`, which contains `canvasCursorAgentIds`. Returns one of the strings `automation_parent_wake`, `quiet`, `canvas`, or `generic`.

| Order | Condition | Return value |
| --- | --- | --- |
| 1 | Any completion requests the parent | `automation_parent_wake` |
| 2 | All have `quietOrigin` | `quiet` |
| 3 | Exactly one valid canvas completion | `canvas` |
| 4 | All other cases | `generic` |

Canvas validity requires `status: "completed"`, type `cursor-agent`, an ID recognized by the context, and a result containing a canvas path in the user store. An explicit handoff takes precedence over quiet origin and canvas. [Helpers](../../../reference/runtime/sand-eval-runner.cjs#L583887-L583902).

## How the result is used

`buildSubagentRevival` assembles the prompt, computes settled delegations, and adds `namesResultDelivery` when there is a handoff or room origin. It adds `quiet: true` or `canvas: true` only in the respective case. [Implementation](../../../reference/runtime/sand-eval-runner.cjs#L583924-L583936).

`buildSubagentRevivalPrompt` produces one block per completion, with a title, result, quiet origin, room, and delay when present. It chooses a specialized instruction for held handoffs if every handoff in the batch is delayed. It adds a staleness note if any result was held, except on the canvas path; on the generic path, computer-use results receive a redispatch restriction. [Implementation](../../../reference/runtime/sand-eval-runner.cjs#L583957-L584007).

## Silence and delay policy

The quiet prompt asks for a single communication for a concrete change, a new actionable result, or a relevant blocker; when there is nothing new, it asks for silent completion. The generic prompt allows an irrelevant, duplicate, or already resolved result to be ignored when the user was not waiting for it. The held prompt requires reassessing current relevance and avoiding mixing a delayed result with another topic. [Instructions](../../../reference/runtime/sand-eval-runner.cjs#L583872-L583885), [generic](../../../reference/runtime/sand-eval-runner.cjs#L583950-L583956).

These are behavioral instructions. This function does not read content to compute “novelty,” consult preferences, or use a score or threshold. The `heldForMs` field is evidence supplied to the prompt, not automatic expiration.

## Interpretation cases

| Batch | Selection |
| --- | --- |
| Quiet result with `parentWakeRequested: true` | Explicit handoff wins |
| Two quiet results without a request to the parent | Quiet |
| One canvas and one normal result | Generic, because canvas requires a size of 1 |
| Awaited result without quiet or room origin | Generic; the helper `owesSubagentRevivalReply` may record that a reply is owed |
| Empty batch | `every` is true, so it returns quiet; the helper does not reject an empty batch |

The final case describes the function's literal semantics, without claiming that a caller produces empty batches in production. `revivalRunLength` separates awaited and unawaited sequences before composing batches; cursor-agents do not change that transition. [Helpers](../../../reference/runtime/sand-eval-runner.cjs#L583898-L583923).

[Proactivity](../../components/proactivity/README.en.md) · [Background wakes](../../components/background-wakes/README.en.md).
