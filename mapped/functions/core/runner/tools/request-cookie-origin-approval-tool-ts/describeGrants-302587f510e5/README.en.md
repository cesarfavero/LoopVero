# `describeGrants`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775187-775190](../../../../../../../reference/runtime/host-main.cjs#L775187-L775190) | `FunctionDeclaration` | no | `grants` |
| [evaluation:574834-574837](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574834-L574837) | `FunctionDeclaration` | no | `grants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775187-775190](../../../../../../../reference/runtime/host-main.cjs#L775187-L775190) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:574834-574837](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574834-L574837) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:775187

Calls written directly in this body: `.join`, `grants.map`.

SHA-256 of the source span: `5f8af84beddbb8a52cf9a957e2ffcde66cd35b5cc9f90aa18acfa90aef85eb33`.

### evaluation:574834

Calls written directly in this body: `.join`, `grants.map`.

SHA-256 of the source span: `5f8af84beddbb8a52cf9a957e2ffcde66cd35b5cc9f90aa18acfa90aef85eb33`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
