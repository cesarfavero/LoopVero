# `sortConventionalAvatarFilenames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-avatar-format.ts` · [Module README](../../../../../modules/core/agents/agent-avatar-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494460-494462](../../../../../../reference/runtime/host-main.cjs#L494460-L494462) | `FunctionDeclaration` | no | `names3` |
| [evaluation:543618-543620](../../../../../../reference/runtime/sand-eval-runner.cjs#L543618-L543620) | `FunctionDeclaration` | no | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494460-494462](../../../../../../reference/runtime/host-main.cjs#L494460-L494462) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543618-543620](../../../../../../reference/runtime/sand-eval-runner.cjs#L543618-L543620) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494460

Calls written directly in this body: `.sort`, `names3.filter`.

SHA-256 of the source span: `a93e6a818642d5d1734fd46be116a96adac7125c180409cabaaaad21d86995d6`.

### evaluation:543618

Calls written directly in this body: `.sort`, `names3.filter`.

SHA-256 of the source span: `a93e6a818642d5d1734fd46be116a96adac7125c180409cabaaaad21d86995d6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
