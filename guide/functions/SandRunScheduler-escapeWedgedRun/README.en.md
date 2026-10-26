# `SandRunScheduler.escapeWedgedRun`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:739879–739903](../../../reference/runtime/host-main.cjs#L739879-L739903).

**Component:** [scheduling](../../components/scheduling/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Release the logical slot after a task remains stuck beyond the watchdog grace period, without losing the reference needed to wait for its actual completion.

## Preconditions

Returns if disposed or if the active generation is no longer the same. This prevents an old timer from removing the new active item.

## Steps

1. Record the watchdog `escape` event, lane, origin, run duration, and how long the user has been waiting.
2. Resolve the active item's public Promise.
3. Add `active.settled` to the `zombies` set.
4. Remove the Promise from the set when it actually finishes.
5. Clear `queue.active` and call `pump`.

## What this function does not confirm

There is no `AbortController.abort`, worker termination, or rollback here. Resolving the public Promise does not mean the work has stopped. The observed guarantee is queue progress and protection against `late_settle` overwriting the next active item.

## Design consequence

`drain` includes the zombies in its snapshot, so it also waits for escaped tasks that are already present. A reconstruction that omitted zombies could close resources still used by an old task. Treating escape as proven cancellation would erase the distinction between queue control and actual effects.
