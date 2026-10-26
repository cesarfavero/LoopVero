# `withoutWaitForReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750694-750697](../../../../../../../reference/runtime/host-main.cjs#L750694-L750697) | `FunctionDeclaration` | no | `result` |
| [evaluation:523545-523548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523545-L523548) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750694-750697](../../../../../../../reference/runtime/host-main.cjs#L750694-L750697) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523545-523548](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523545-L523548) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750694

Calls written directly in this body: `reportedWaitForSchema.safeParse`, `withoutStructuredField`.

SHA-256 of the source span: `040fb41b8750f61230dca1b4e03c59c6aca78fa4498225d40760948ae74a30c0`.

### evaluation:523545

Calls written directly in this body: `reportedWaitForSchema.safeParse`, `withoutStructuredField`.

SHA-256 of the source span: `040fb41b8750f61230dca1b4e03c59c6aca78fa4498225d40760948ae74a30c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
