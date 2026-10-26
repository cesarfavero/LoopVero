# `describeListener`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `shared/automations/automations.ts` · [Module README](../../../../../modules/shared/automations/automations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485615-485639](../../../../../../reference/runtime/host-main.cjs#L485615-L485639) | `FunctionDeclaration` | no | `listener` |
| [evaluation:475345-475369](../../../../../../reference/runtime/sand-eval-runner.cjs#L475345-L475369) | `FunctionDeclaration` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485615-485639](../../../../../../reference/runtime/host-main.cjs#L485615-L485639) | 12 | 0 | 0 | 9 | 0 | 0 |
| [evaluation:475345-475369](../../../../../../reference/runtime/sand-eval-runner.cjs#L475345-L475369) | 12 | 0 | 0 | 9 | 0 | 0 |

### host:485615

Calls written directly in this body: `describeGithubListener`, `describeOriginListener`, `describeSlackListener`, `emailTriggerRequiresAuthPass`, `joinWithOr`.

SHA-256 of the source span: `8cf709b752dff08e5f98acbb8a15399b07998bc220aad5a6636b7115ac12e28e`.

### evaluation:475345

Calls written directly in this body: `describeGithubListener`, `describeOriginListener`, `describeSlackListener`, `emailTriggerRequiresAuthPass`, `joinWithOr`.

SHA-256 of the source span: `8cf709b752dff08e5f98acbb8a15399b07998bc220aad5a6636b7115ac12e28e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
