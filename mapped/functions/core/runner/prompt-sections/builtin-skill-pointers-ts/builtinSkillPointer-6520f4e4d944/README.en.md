# `builtinSkillPointer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/prompts/README.en.md).

**Module:** `core/runner/prompt-sections/builtin-skill-pointers.ts` · [Module README](../../../../../../modules/core/runner/prompt-sections/builtin-skill-pointers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:752130-752132](../../../../../../../reference/runtime/host-main.cjs#L752130-L752132) | `FunctionDeclaration` | no | `when, id, skillAccess = "read"` |
| [evaluation:528936-528938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528936-L528938) | `FunctionDeclaration` | no | `when, id, skillAccess = "read"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:752130-752132](../../../../../../../reference/runtime/host-main.cjs#L752130-L752132) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528936-528938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L528936-L528938) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:752130

Calls written directly in this body: `SKILL_OPEN_COPY[computed].openManaged`.

SHA-256 of the source span: `e9e28efdea7baa73eed2788d5ff883003b210fded4a5596e40dca1c10fb82273`.

### evaluation:528936

Calls written directly in this body: `SKILL_OPEN_COPY[computed].openManaged`.

SHA-256 of the source span: `e9e28efdea7baa73eed2788d5ff883003b210fded4a5596e40dca1c10fb82273`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
