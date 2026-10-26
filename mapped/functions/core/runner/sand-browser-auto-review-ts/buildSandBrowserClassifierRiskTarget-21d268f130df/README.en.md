# `buildSandBrowserClassifierRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/sand-browser-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-browser-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699749-699794](../../../../../../reference/runtime/host-main.cjs#L699749-L699794) | `FunctionDeclaration` | no | `args` |
| [evaluation:513505-513550](../../../../../../reference/runtime/sand-eval-runner.cjs#L513505-L513550) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699749-699794](../../../../../../reference/runtime/host-main.cjs#L699749-L699794) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513505-513550](../../../../../../reference/runtime/sand-eval-runner.cjs#L513505-L513550) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:699749

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `744e605e4fc20127e75b1ec33f36b46625afc66d95aeffa778f638ebae389643`.

### evaluation:513505

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `structFromRecord`.

SHA-256 of the source span: `744e605e4fc20127e75b1ec33f36b46625afc66d95aeffa778f638ebae389643`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
