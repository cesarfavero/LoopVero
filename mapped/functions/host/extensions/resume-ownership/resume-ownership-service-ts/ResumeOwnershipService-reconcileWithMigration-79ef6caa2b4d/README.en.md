# `ResumeOwnershipService.reconcileWithMigration`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/resume-ownership-service.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/resume-ownership-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708741-708760](../../../../../../../reference/runtime/host-main.cjs#L708741-L708760) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708741-708760](../../../../../../../reference/runtime/host-main.cjs#L708741-L708760) | 6 | 0 | 3 | 5 | 0 | 0 |

### host:708741

Calls written directly in this body: `Math.max`, `args.canRunMigration`, `args.reconcile`, `this.deps.migrationBarrier.run`, `this.deps.now`, `this.deps.reconcile`, `this.deps.report`.

SHA-256 of the source span: `3c1d2826111497faafb2074e901d2f01d279311e30b78a7abdabd10d65658f46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
