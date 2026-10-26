# `ResumeOwnershipService.resumeAtStartup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708594-708628](../../../../../../../reference/runtime/host-main.cjs#L708594-L708628) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708594-708628](../../../../../../../reference/runtime/host-main.cjs#L708594-L708628) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:708594

Calls written directly in this body: `Math.max`, `this.cancelRecovery`, `this.deps.setLocalWorkAllowed`, `this.scheduleRecovery`, `this.serialize`.

Assignment or increment targets: `this.recoveryCompletedGeneration`.

SHA-256 of the source span: `ee0fec67ca4cdd5d2e54abad04c51df850a2a4e16f69f747a2da8efd5bd91c5a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
