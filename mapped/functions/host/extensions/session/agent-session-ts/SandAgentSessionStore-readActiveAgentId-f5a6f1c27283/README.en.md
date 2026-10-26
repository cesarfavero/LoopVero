# `SandAgentSessionStore.readActiveAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/agent-session.ts` · [Module README](../../../../../../modules/host/extensions/session/agent-session-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:723234-723251](../../../../../../../reference/runtime/host-main.cjs#L723234-L723251) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:723234-723251](../../../../../../../reference/runtime/host-main.cjs#L723234-L723251) | 1 | 0 | 0 | 4 | 0 | 2 |

### host:723234

Calls written directly in this body: `JSON.parse`, `parseAgentId`, `readSandDataFileIfPresentSync`, `reportFallbackUnlessAbsent`, `this.activeAgentPointerPath`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `a5db6b18656a6c6b953e08adae09cdea946ac1578f034a508cefbb3708b1bfbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
