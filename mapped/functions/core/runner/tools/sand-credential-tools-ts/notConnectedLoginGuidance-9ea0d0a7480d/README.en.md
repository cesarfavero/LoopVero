# `notConnectedLoginGuidance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751857-751861](../../../../../../../reference/runtime/host-main.cjs#L751857-L751861) | `FunctionDeclaration` | yes | `offer, guidance` |
| [evaluation:524923-524927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524923-L524927) | `FunctionDeclaration` | yes | `offer, guidance` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751857-751861](../../../../../../../reference/runtime/host-main.cjs#L751857-L751861) | 2 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:524923-524927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524923-L524927) | 2 | 0 | 1 | 2 | 0 | 0 |

### host:751857

Calls written directly in this body: `.catch`, `offer.isDeclined`.

SHA-256 of the source span: `693b07166f4d78769a7348818bbfb6d8a0a97f5aafe2c5993094dfee08d4024e`.

### evaluation:524923

Calls written directly in this body: `.catch`, `offer.isDeclined`.

SHA-256 of the source span: `693b07166f4d78769a7348818bbfb6d8a0a97f5aafe2c5993094dfee08d4024e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
