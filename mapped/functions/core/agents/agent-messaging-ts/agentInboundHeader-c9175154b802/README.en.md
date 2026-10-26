# `agentInboundHeader`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-messaging.ts` · [Module README](../../../../../modules/core/agents/agent-messaging-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:479544-479578](../../../../../../reference/runtime/sand-eval-runner.cjs#L479544-L479578) | `FunctionDeclaration` | no | `line` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479544-479578](../../../../../../reference/runtime/sand-eval-runner.cjs#L479544-L479578) | 6 | 0 | 0 | 6 | 0 | 0 |

### evaluation:479544

Calls written directly in this body: `.startsWith`, `/^(.*) \(id: ([^)]*)\)\.$/.exec`, `/^(.*?) \(id: ([^)]*)\), /.exec`, `/^\d+/.exec`, `batchClosingLine`, `inboxClosingLine`, `legacyBatchClosingLine`, `legacyInboxClosingLine`, `legacyWakeClosingLine`, `line.slice`, `line.startsWith`, `rest.slice`, `rest.startsWith`, `slackCallerReplyWakeClosingLine`, `wakeClosingLine`.

SHA-256 of the source span: `8d8dd479f9fecb8d92dd7728b24330f45bfdd1255320d54a467e614fabde4b58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
