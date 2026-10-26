# `pinnedProfileIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `core/runner/tools/request-cookie-origin-approval-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-cookie-origin-approval-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775135-775139](../../../../../../../reference/runtime/host-main.cjs#L775135-L775139) | `FunctionDeclaration` | no | `origins` |
| [evaluation:574782-574786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574782-L574786) | `FunctionDeclaration` | no | `origins` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775135-775139](../../../../../../../reference/runtime/host-main.cjs#L775135-L775139) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:574782-574786](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574782-L574786) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:775135

Calls written directly in this body: `new Set`, `origins.flatMap`.

SHA-256 of the source span: `0aa923e33d05965202bbea5f93678cda36b79260292c8021711b379f9e7609fc`.

### evaluation:574782

Calls written directly in this body: `new Set`, `origins.flatMap`.

SHA-256 of the source span: `0aa923e33d05965202bbea5f93678cda36b79260292c8021711b379f9e7609fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
