# `buildSandConnectorUploadRiskTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/connector-files/auto-review.ts` · [Module README](../../../../../../modules/core/runner/connector-files/auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774824-774847](../../../../../../../reference/runtime/host-main.cjs#L774824-L774847) | `FunctionDeclaration` | no | `args` |
| [evaluation:574427-574450](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574427-L574450) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774824-774847](../../../../../../../reference/runtime/host-main.cjs#L774824-L774847) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574427-574450](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574427-L574450) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774824

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewArguments2`, `structFromRecord`.

SHA-256 of the source span: `1ae227e2ae2eda83aa1ab7d3b016842fc4b3f1589ec454911b5c9e7d410cd774`.

### evaluation:574427

Calls written directly in this body: `buildProjectPermissionsContext`, `new SmartModeRiskTarget`, `reviewArguments2`, `structFromRecord`.

SHA-256 of the source span: `1ae227e2ae2eda83aa1ab7d3b016842fc4b3f1589ec454911b5c9e7d410cd774`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
