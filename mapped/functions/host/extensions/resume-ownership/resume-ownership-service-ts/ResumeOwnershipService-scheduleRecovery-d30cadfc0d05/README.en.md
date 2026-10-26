# `ResumeOwnershipService.scheduleRecovery`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708686-708689](../../../../../../../reference/runtime/host-main.cjs#L708686-L708689) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708686-708689](../../../../../../../reference/runtime/host-main.cjs#L708686-L708689) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:708686

Calls written directly in this body: `this.startRecovery`.

Assignment or increment targets: `this.recoveryRequestedGeneration`.

SHA-256 of the source span: `04d4836db1c67b730c72f13602c838a45b830d72ca50dce0f1cb0836855fb23a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
