# `profileConfigFromJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490813-490822](../../../../../../reference/runtime/host-main.cjs#L490813-L490822) | `FunctionDeclaration` | no | `parsed2` |
| [evaluation:629024-629033](../../../../../../reference/runtime/sand-eval-runner.cjs#L629024-L629033) | `FunctionDeclaration` | no | `parsed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490813-490822](../../../../../../reference/runtime/host-main.cjs#L490813-L490822) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:629024-629033](../../../../../../reference/runtime/sand-eval-runner.cjs#L629024-L629033) | 6 | 0 | 0 | 1 | 0 | 0 |

### host:490813

Calls written directly in this body: `isSandProfileNamedBy`, `parsed2.avatarColor.trim`, `parsed2.avatarShape.trim`, `parsed2.title.trim`.

SHA-256 of the source span: `7ddd7ef695f1182b7faeb19b3d351fcb2b01d943bf9b3f93be5949b1a01bd9f5`.

### evaluation:629024

Calls written directly in this body: `isSandProfileNamedBy`, `parsed.avatarColor.trim`, `parsed.avatarShape.trim`, `parsed.title.trim`.

SHA-256 of the source span: `9f66415e89f6d6ada42cad80f8c70dd694cab1c8ceb2aa257d2860ff92055cb0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
