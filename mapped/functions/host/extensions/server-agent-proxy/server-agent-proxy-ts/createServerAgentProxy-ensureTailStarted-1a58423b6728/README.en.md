# `createServerAgentProxy/ensureTailStarted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714777-714787](../../../../../../../reference/runtime/host-main.cjs#L714777-L714787) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714777-714787](../../../../../../../reference/runtime/host-main.cjs#L714777-L714787) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:714777

Calls written directly in this body: `cancelLinger`, `indexer.start`, `refreshRoster`, `stopTailAfterLinger`, `tail.start`.

Assignment or increment targets: `tailStarted`.

SHA-256 of the source span: `2e3ea071a0a14185ad8ce50485294f52d26be9271d3a6f6759b72a69dc832bf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
