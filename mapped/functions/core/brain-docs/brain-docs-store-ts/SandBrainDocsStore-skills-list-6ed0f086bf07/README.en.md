# `SandBrainDocsStore.skills/list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/brain-docs/brain-docs-store.ts` · [Module README](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629678-629681](../../../../../../reference/runtime/sand-eval-runner.cjs#L629678-L629681) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629678-629681](../../../../../../reference/runtime/sand-eval-runner.cjs#L629678-L629681) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:629678 uses an implicit arrow-function return.

### evaluation:629678

Calls written directly in this body: `.map`, `this.automations.listDefinitions`, `this.boxFamilies.has`, `this.listSkills`.

SHA-256 of the source span: `3ff12e6399ef2c6c1947c866fbf43aeadc7e79e2384a3ea93a7ab19a846ac59a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
