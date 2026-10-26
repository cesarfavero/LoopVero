# `startAgentIdentity/subscribeTemporalMirrorsDropped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496932-496935](../../../../../../../reference/runtime/host-main.cjs#L496932-L496935) | `ArrowFunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496932-496935](../../../../../../../reference/runtime/host-main.cjs#L496932-L496935) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496932

Calls written directly in this body: `droppedMirrorListeners.add`.

SHA-256 of the source span: `fa1550eeba948e395c90c84e31aff339aea25c4cce4d6b927d10f7bf4c1a9140`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
