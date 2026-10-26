# `createTurnRunShell`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [sand-eval-runner.cjs:591314–592546](../../../reference/runtime/sand-eval-runner.cjs#L591314-L592546).

**Component:** [turns](../../components/turns/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Compose turn execution with origin, policy, inference session, tools, checkpointing, interruption, and completion. This detailed implementation was found in the evaluation bundle.

## Captured API

The factory receives the runner's host object and retains model/metric trackers, a steering inbox, the current cancellation callback, dispatch/pause state, origin, and automation metadata. It exposes operations such as `run`, `interrupt`, `interruptAll`, `steer`, and pausing for an upgrade.

## The `run` path

Sets up observation, measures setup, and calls the internal `runTurn` function. That function:

1. Resolves origin, authorship, automation, and the approval epoch.
2. Distinguishes a normal prompt from revival and an action without a prompt.
3. Validates non-empty input when required.
4. Creates a request ID, cancelable context, stop callbacks, and budget policy.
5. Creates the main session and summarization session.
6. Resolves the box and MCP discovery.
7. Builds the turn agent and calls `createStreamAttempt`.
8. Runs the stream and writes chained checkpoints with generation guards.
9. Drains effects and handles completion, pause, cancellation, and error.

## Decisions that change behavior

`prewarm`, `hidden`, `resumeTurn`, `idleCompaction`, `requestSource`, `continuesTurn`, `autoReviewEpoch`, and subagent origin are more than metadata. They influence tool execution, authorship, labeling, recap, retry policy, and stopping. The [turns](../../components/turns/README.en.md) README connects each to the relevant sections.

## Checkpoints

The persistence callback serializes writes and checks whether the generation still belongs to the run. A resumed stream starts from the last checkpoint. Completion/wait markers and the absence of pending calls can end a repeated attempt without re-executing work.

## Limit on the conclusion

The code allows the loop used by eval to be mapped; it does not demonstrate that `host-main.cjs` instantiates it on the BOX path. The recovered regular host refuses those sends and uses a proxy for Temporal agents.
