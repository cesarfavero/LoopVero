# `withoutSiteDispatchNotes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/subagents/site-dispatch-notes.ts` · [Module README](../../../../../../modules/core/runner/subagents/site-dispatch-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:490388-490390](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490388-L490390) | `FunctionDeclaration` | no | `task` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490388-490390](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490388-L490390) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490388

Calls written directly in this body: `SITE_DISPATCH_NOTES.reduce`.

SHA-256 of the source span: `aebdffd957a2c79906b705a4da2c8b33a766159b715a87a04d4ce14a6e910eb9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
