# `createOrbitDaemonSessionController/updateConfiguration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/daemon-session-controller.ts` · [Module README](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706007-706022](../../../../../../../reference/runtime/host-main.cjs#L706007-L706022) | `FunctionDeclaration` | yes | `openSession2, configuration, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706007-706022](../../../../../../../reference/runtime/host-main.cjs#L706007-L706022) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:706007

Calls written directly in this body: `BigInt`, `assertAcknowledgedRevision`, `openSession2.session.updateConfiguration`, `sameConfiguration`, `toDaemonConfiguration`.

Assignment or increment targets: `configurationState.lastConfirmed`, `configurationState.needsReconciliation`, `configurationState.revision`.

SHA-256 of the source span: `72723e46950a9786b609595fada095ef84dd37a5f01f604dbe776b5438346700`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
