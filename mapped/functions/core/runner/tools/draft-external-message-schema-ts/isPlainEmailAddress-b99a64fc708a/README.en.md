# `isPlainEmailAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755062-755064](../../../../../../../reference/runtime/host-main.cjs#L755062-L755064) | `FunctionDeclaration` | no | `value` |
| [evaluation:539687-539689](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539687-L539689) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755062-755064](../../../../../../../reference/runtime/host-main.cjs#L755062-L755064) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539687-539689](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539687-L539689) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755062

Calls written directly in this body: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test`.

SHA-256 of the source span: `e4767355ef0f297ea82add9b43b799523bd506fc4ca2e48536a104edfc333de1`.

### evaluation:539687

Calls written directly in this body: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test`.

SHA-256 of the source span: `e4767355ef0f297ea82add9b43b799523bd506fc4ca2e48536a104edfc333de1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
