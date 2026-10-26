# `createUpdateAgentTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757487-757501](../../../../../../../reference/runtime/host-main.cjs#L757487-L757501) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |
| [evaluation:543510-543524](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543510-L543524) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757487-757501](../../../../../../../reference/runtime/host-main.cjs#L757487-L757501) | 4 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:543510-543524](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543510-L543524) | 4 | 0 | 1 | 3 | 0 | 0 |

### host:757487

Calls written directly in this body: `m2.update`.

Assignment or increment targets: `patch2.description`, `patch2.name`.

SHA-256 of the source span: `4685f3eaedf6a12a48471ffa6e075bffd802c1d77a1612773bf37106c3c3352c`.

### evaluation:543510

Calls written directly in this body: `m2.update`.

Assignment or increment targets: `patch2.description`, `patch2.name`.

SHA-256 of the source span: `4685f3eaedf6a12a48471ffa6e075bffd802c1d77a1612773bf37106c3c3352c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
