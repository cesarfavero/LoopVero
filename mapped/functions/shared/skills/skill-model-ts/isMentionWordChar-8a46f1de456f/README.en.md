# `isMentionWordChar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683161-683163](../../../../../../reference/runtime/host-main.cjs#L683161-L683163) | `FunctionDeclaration` | no | `char` |
| [evaluation:534197-534199](../../../../../../reference/runtime/sand-eval-runner.cjs#L534197-L534199) | `FunctionDeclaration` | no | `char` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683161-683163](../../../../../../reference/runtime/host-main.cjs#L683161-L683163) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534197-534199](../../../../../../reference/runtime/sand-eval-runner.cjs#L534197-L534199) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:683161

Calls written directly in this body: `/[a-z0-9]/.test`.

SHA-256 of the source span: `e6fccfc6fd2380d11d7d8a272aba38574328cebe3d6111c54049bb819f94df45`.

### evaluation:534197

Calls written directly in this body: `/[a-z0-9]/.test`.

SHA-256 of the source span: `e6fccfc6fd2380d11d7d8a272aba38574328cebe3d6111c54049bb819f94df45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
