# `SandSessionMaterialization.listAgentRecordIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721406-721415](../../../../../../../reference/runtime/host-main.cjs#L721406-L721415) | `method` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721406-721415](../../../../../../../reference/runtime/host-main.cjs#L721406-L721415) | 1 | 0 | 1 | 2 | 1 | 1 |

### host:721406

Calls written directly in this body: `keepAgentDirs`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `c8ae996c974848a734bf3385e747e880e1269f7bc5bd45741cde241850a085f2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
