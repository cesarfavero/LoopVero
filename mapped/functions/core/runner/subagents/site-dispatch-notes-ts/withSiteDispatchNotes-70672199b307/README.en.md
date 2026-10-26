# `withSiteDispatchNotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/site-dispatch-notes.ts` · [Module README](../../../../../../modules/core/runner/subagents/site-dispatch-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490382-490387](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490382-L490387) | `FunctionDeclaration` | no | `task` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490382-490387](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490382-L490387) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490382

Calls written directly in this body: `.join`, `.map`, `SITE_DISPATCH_NOTES.filter`.

SHA-256 of the source span: `82dbad9de13bc3cf6a0917111f9fb88f904394b32f5d513c68d0654e2a3ba82d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
