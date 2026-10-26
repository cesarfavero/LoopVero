# `start/onStatusChanged`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/extension.ts` · [Module README](../../../../../../modules/host/extensions/session/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728484-728488](../../../../../../../reference/runtime/host-main.cjs#L728484-L728488) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728484-728488](../../../../../../../reference/runtime/host-main.cjs#L728484-L728488) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:728484

Calls written directly in this body: `context2.host.events.emit`.

SHA-256 of the source span: `6d08d4e62fa9e57108a319b6c9b64b8e9dec5efb7288d9eb90697d223b4f4464`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
