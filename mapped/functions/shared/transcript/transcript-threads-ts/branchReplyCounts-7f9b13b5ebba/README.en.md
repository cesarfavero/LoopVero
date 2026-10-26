# `branchReplyCounts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript-threads.ts` · [Module README](../../../../../modules/shared/transcript/transcript-threads-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490390-490399](../../../../../../reference/runtime/host-main.cjs#L490390-L490399) | `FunctionDeclaration` | no | `branched` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490390-490399](../../../../../../reference/runtime/host-main.cjs#L490390-L490399) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:490390

Calls written directly in this body: `branched.map`, `counts.get`, `counts.set`, `new Map`, `resolveBranchRoot2`.

SHA-256 of the source span: `1e92d35afd0f3e920d1bc018e3505c1eb571fef195c9a6ff9c396e31c83d0683`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
