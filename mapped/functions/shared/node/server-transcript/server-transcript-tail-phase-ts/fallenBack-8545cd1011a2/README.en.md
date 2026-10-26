# `fallenBack`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/node/server-transcript/server-transcript-tail-phase.ts` · [Module README](../../../../../../modules/shared/node/server-transcript/server-transcript-tail-phase-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712800-712814](../../../../../../../reference/runtime/host-main.cjs#L712800-L712814) | `FunctionDeclaration` | no | `phase, legacy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712800-712814](../../../../../../../reference/runtime/host-main.cjs#L712800-L712814) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:712800

Calls written directly in this body: `canFallBack`, `invariant`.

SHA-256 of the source span: `4a2b3d1740a00bdfca505dab1b5d670a67747bfb92921718338ba999a2359af8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
