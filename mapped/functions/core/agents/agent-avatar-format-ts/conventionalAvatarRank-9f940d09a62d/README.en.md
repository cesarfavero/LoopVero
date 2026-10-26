# `conventionalAvatarRank`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-avatar-format.ts` · [Module README](../../../../../modules/core/agents/agent-avatar-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494454-494459](../../../../../../reference/runtime/host-main.cjs#L494454-L494459) | `FunctionDeclaration` | no | `name18` |
| [evaluation:543612-543617](../../../../../../reference/runtime/sand-eval-runner.cjs#L543612-L543617) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494454-494459](../../../../../../reference/runtime/host-main.cjs#L494454-L494459) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543612-543617](../../../../../../reference/runtime/sand-eval-runner.cjs#L543612-L543617) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:494454

Calls written directly in this body: `.slice`, `.toLowerCase`, `CONVENTIONAL_AVATAR_EXTENSIONS.findIndex`.

SHA-256 of the source span: `61bbecf95fd9c4b57cfc54c1726fa7984c841ff4bc4f1be918271a755650890a`.

### evaluation:543612

Calls written directly in this body: `.slice`, `.toLowerCase`, `CONVENTIONAL_AVATAR_EXTENSIONS.findIndex`.

SHA-256 of the source span: `cc20329b0b1d06af869faa058e7984ba210b3d8671ea98144cc82d8612dedcb2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
