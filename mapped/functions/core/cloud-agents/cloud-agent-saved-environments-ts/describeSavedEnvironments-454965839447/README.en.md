# `describeSavedEnvironments`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-saved-environments.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-saved-environments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567100-567111](../../../../../../reference/runtime/sand-eval-runner.cjs#L567100-L567111) | `FunctionDeclaration` | no | `environments` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567100-567111](../../../../../../reference/runtime/sand-eval-runner.cjs#L567100-L567111) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:567100

Calls written directly in this body: `.join`, `environments.slice`, `listed.map`.

SHA-256 of the source span: `9bbe58fffe14c3462fced8763d39404c3ac1eb71cfbb6eb8ba4ac8bd178489e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
