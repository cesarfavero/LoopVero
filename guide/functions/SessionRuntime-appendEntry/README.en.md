# `SessionRuntime.appendEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:737907–737944](../../../reference/runtime/host-main.cjs#L737907-L737944).

**Component:** [transcripts](../../components/transcripts/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Contract

Accepts a raw entry and options, producing `{outcome, entry}`. Normalizes the timestamp and uses the active session. This is a local persistence flow, distinct from receiving server frames.

## Order

1. Normalize the entry with `withTimestampMs`.
2. Attempt `session.db.appendTranscriptEntry`.
3. If there is no session or the outcome is not `inserted`, log a warning and return.
4. On duplication, log the stored IDs for diagnostics.
5. Insert into the in-memory transcript copy.
6. Emit the `appended` event unless `deferEmit` is set.
7. For entries that count as user activity, update activity and unread state according to the rules and focus.

## Visible guarantee

The event is not published before the DB accepts a local insertion. A duplicate entry is not added again to the in-memory copy through this path. The concrete definition of durability and constraints depends on the store; it cannot be inferred solely from the `inserted` return value.

## Focus and unread state

`markActiveSessionArrival` marks activity. When any surface is focused, it marks the session as seen while preserving a manual unread setting. Without focus, it requests a roster update. Focus is tracked per surface; it cannot be reduced to a global flag without an origin.

## Limits

The function does not run inference, close tasks, or extract semantic memory. A transcript record demonstrates a write event, not successful execution of every action described in its content.
