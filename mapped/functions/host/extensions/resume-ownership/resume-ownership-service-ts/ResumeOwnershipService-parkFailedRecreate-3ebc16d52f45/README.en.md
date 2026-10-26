# `ResumeOwnershipService.parkFailedRecreate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708761-708767](../../../../../../../reference/runtime/host-main.cjs#L708761-L708767) | `method` | no | `startedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708761-708767](../../../../../../../reference/runtime/host-main.cjs#L708761-L708767) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:708761

Calls written directly in this body: `this.deps.park`, `this.deps.setLocalWorkAllowed`, `this.reportFailure`.

Assignment or increment targets: `this.recreateRecoveryPending`.

SHA-256 of the source span: `16b887af23e574ea18ab404c1d6a00e5033bd5dc2ceec8c916654902df14f8d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
