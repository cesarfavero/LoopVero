# `SandSessionMaterialization.mintAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721429-721433](../../../../../../../reference/runtime/host-main.cjs#L721429-L721433) | `method` | yes | `mint2, providedId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721429-721433](../../../../../../../reference/runtime/host-main.cjs#L721429-L721433) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:721429

Calls written directly in this body: `this.enqueueMint`.

SHA-256 of the source span: `40e96e4ecd758b5d389e05c305f98b646f022b7c2acb3f1fb17c67f3b91ff4e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
