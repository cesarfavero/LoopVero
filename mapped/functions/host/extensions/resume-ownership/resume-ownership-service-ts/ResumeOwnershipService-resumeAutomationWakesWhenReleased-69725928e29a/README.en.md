# `ResumeOwnershipService.resumeAutomationWakesWhenReleased`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708734-708740](../../../../../../../reference/runtime/host-main.cjs#L708734-L708740) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708734-708740](../../../../../../../reference/runtime/host-main.cjs#L708734-L708740) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:708734

Calls written directly in this body: `this.deps.getPauseOwner`, `this.deps.resumeAutomationWakes`, `this.deps.resumeDeferredLocalWork`, `this.deps.setLocalWorkAllowed`.

SHA-256 of the source span: `48d7dcda598c0b28499ec517e61f731392a413a1d7deed0391912b9341c389a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
