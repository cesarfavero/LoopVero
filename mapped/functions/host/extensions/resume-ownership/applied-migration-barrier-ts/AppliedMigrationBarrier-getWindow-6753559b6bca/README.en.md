# `AppliedMigrationBarrier.getWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/applied-migration-barrier.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/applied-migration-barrier-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708539-708550](../../../../../../../reference/runtime/host-main.cjs#L708539-L708550) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708539-708550](../../../../../../../reference/runtime/host-main.cjs#L708539-L708550) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:708539

Calls written directly in this body: `this.deps.isLocalWorkAllowed`, `this.deps.isQuiescent`.

SHA-256 of the source span: `f1c86b0c1a36864d344bfd54f387e58885026d8c10c18d9707fa2b3b43bbc5b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
