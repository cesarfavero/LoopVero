# `isConventionalAvatarFilename`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-avatar-format.ts` · [Module README](../../../../../modules/core/agents/agent-avatar-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494451-494453](../../../../../../reference/runtime/host-main.cjs#L494451-L494453) | `FunctionDeclaration` | no | `name18` |
| [evaluation:543609-543611](../../../../../../reference/runtime/sand-eval-runner.cjs#L543609-L543611) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494451-494453](../../../../../../reference/runtime/host-main.cjs#L494451-L494453) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543609-543611](../../../../../../reference/runtime/sand-eval-runner.cjs#L543609-L543611) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494451

Calls written directly in this body: `CONVENTIONAL_AVATAR_RE.test`.

SHA-256 of the source span: `982c3b236979235ac8c0d25b62feef31aa8cff42864d0f2bd128cb892ed57ea0`.

### evaluation:543609

Calls written directly in this body: `CONVENTIONAL_AVATAR_RE.test`.

SHA-256 of the source span: `982c3b236979235ac8c0d25b62feef31aa8cff42864d0f2bd128cb892ed57ea0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
