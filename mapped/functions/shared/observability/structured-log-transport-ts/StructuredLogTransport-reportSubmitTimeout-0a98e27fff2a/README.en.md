# `StructuredLogTransport.reportSubmitTimeout`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/structured-log-transport.ts` · [Module README](../../../../../modules/shared/observability/structured-log-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453336-453348](../../../../../../reference/runtime/host-main.cjs#L453336-L453348) | `method` | no | `error64, batchEntries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453336-453348](../../../../../../reference/runtime/host-main.cjs#L453336-L453348) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:453336

Calls written directly in this body: `SandError.logShipTimeout`, `isDeadlineExpiry`, `sandErrorTags`, `this.enqueue`.

Assignment or increment targets: `this.submitTimeoutStreakActive`.

SHA-256 of the source span: `c2269fd6232671a12ba07a38807b4bc811dd1e4e84adbd7fc28c17409a9f9513`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
