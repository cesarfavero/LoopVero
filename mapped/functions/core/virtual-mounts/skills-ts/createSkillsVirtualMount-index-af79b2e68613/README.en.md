# `createSkillsVirtualMount/index`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/virtual-mounts/skills.ts` · [Module README](../../../../../modules/core/virtual-mounts/skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:565618-565630](../../../../../../reference/runtime/sand-eval-runner.cjs#L565618-L565630) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:565618-565630](../../../../../../reference/runtime/sand-eval-runner.cjs#L565618-L565630) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:565618

Calls written directly in this body: `deps.skills`, `new Map`, `skills.map`.

Assignment or increment targets: `docs`, `indexed`.

SHA-256 of the source span: `9dcd8bd7a7a15021afaff324a86ac06ba5445899573a9b25d6821ec34b0f7def`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
