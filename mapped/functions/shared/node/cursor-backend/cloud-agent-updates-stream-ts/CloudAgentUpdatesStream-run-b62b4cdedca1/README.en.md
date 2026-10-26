# `CloudAgentUpdatesStream.run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537629-537647](../../../../../../../reference/runtime/host-main.cjs#L537629-L537647) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537629-537647](../../../../../../../reference/runtime/host-main.cjs#L537629-L537647) | 4 | 1 | 3 | 1 | 0 | 0 |

### host:537629

Calls written directly in this body: `Math.max`, `this.connectOnce`, `this.options.isEnabled`, `this.options.onFirstFailure`, `this.wait`, `this.waitForGate`.

Assignment or increment targets: `failures2`.

SHA-256 of the source span: `b29b599f2d3e9e2b49b46031b03b983f373361059fb64506e436d26339cb524e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
