# `createSkillsVirtualMount/read`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/virtual-mounts/skills.ts` · [Module README](../../../../../modules/core/virtual-mounts/skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565651-565667](../../../../../../reference/runtime/sand-eval-runner.cjs#L565651-L565667) | `ArrowFunctionExpression` | yes | `ctx, _access, path33, window2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565651-565667](../../../../../../reference/runtime/sand-eval-runner.cjs#L565651-L565667) | 4 | 0 | 1 | 3 | 0 | 0 |

### evaluation:565651

Calls written directly in this body: `.byPath.get`, `body.split`, `deps.readBody`, `index`, `refused`, `windowOf`.

SHA-256 of the source span: `d6ba51fd7087423a48e63271a7dfd5c2ed5aa38a3e73b8d6b286f879f0b4265f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
