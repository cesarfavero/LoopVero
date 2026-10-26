# `createServerAgentActionCore`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:710798–710832](../../../reference/runtime/host-main.cjs#L710798-L710832).

**Component:** [gateway](../../components/gateway/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Execute actions through RPC and specially handle a send whose first attempt may have been accepted even though the response never arrived.

## Input and output

Receives a `GrokBotService` client and an optional timezone getter. Returns an asynchronous function that accepts a typed request and returns a normalized outcome. The detailed translation is in `perform`, including `sendGrokBotUserMessage` and `getGrokBotSendStatus`.

## Replay algorithm

1. Execute `perform` once.
2. On an error for an action other than send, only classify it.
3. For a send, check `isNonceDedupedSendReplayable`.
4. Query status with the same agent, `clientNonce`, and optional session.
5. If the status is not `not-found`, return the original failure. This includes `found` and `unknown-durability`.
6. Only with `not-found`, repeat `perform` with the same request.
7. Classify a failure of the query or repeated attempt.

This core has no unlimited recursive retry. There are at most the original attempt and one repeated attempt after the appropriate probe.

## Why the nonce matters

`perform` transforms `clientNonce` into `messageId`. The server recognizes results such as `DUPLICATE`, but the backend deduplication implementation is not in this function. The locally confirmed behavior is preserving identity and querying the server before retrying.

## Eligible errors

For `ConnectError`, the predicate accepts `Unavailable` without a `retry-after` header; errors outside that class have a separate permissive rule. This is not a universal classification of all distributed failures. Predicate source: [host-main.cjs:709961–709964](../../../reference/runtime/host-main.cjs#L709961-L709964).
