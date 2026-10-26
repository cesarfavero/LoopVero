# `readFenceLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-external-message-schema.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755138-755147](../../../../../../../reference/runtime/host-main.cjs#L755138-L755147) | `FunctionDeclaration` | no | `trimmed, fence` |
| [evaluation:539763-539772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539763-L539772) | `FunctionDeclaration` | no | `trimmed, fence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755138-755147](../../../../../../../reference/runtime/host-main.cjs#L755138-L755147) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:539763-539772](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539763-L539772) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:755138

Calls written directly in this body: `/^('+|~+)$/.exec`, `CLOSE_AFTER_TEXT.exec`, `CLOSE_BEFORE_TEXT.exec`, `run.startsWith`.

SHA-256 of the source span: `08160499ed60f52fbf3c7b81f6fbc2681b0afd8ac418c282ea6e042821f8512f`.

### evaluation:539763

Calls written directly in this body: `/^('+|~+)$/.exec`, `CLOSE_AFTER_TEXT.exec`, `CLOSE_BEFORE_TEXT.exec`, `run.startsWith`.

SHA-256 of the source span: `08160499ed60f52fbf3c7b81f6fbc2681b0afd8ac418c282ea6e042821f8512f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
