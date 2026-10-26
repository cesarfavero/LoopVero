# `ResumeOwnershipService.reportFailure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708772-708778](../../../../../../../reference/runtime/host-main.cjs#L708772-L708778) | `method` | no | `trigger2, startedAt` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708772-708778](../../../../../../../reference/runtime/host-main.cjs#L708772-L708778) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:708772

Calls written directly in this body: `Math.max`, `this.deps.now`, `this.deps.report`.

SHA-256 of the source span: `ae5f59fc2f143772ee50d0a27c324f79ec9ea9624f8bf63a2d982619f63bd55f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
