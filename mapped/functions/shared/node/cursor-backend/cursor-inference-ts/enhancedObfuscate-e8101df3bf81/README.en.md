# `enhancedObfuscate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224904-224911](../../../../../../../reference/runtime/host-main.cjs#L224904-L224911) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:511920-511927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511920-L511927) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224904-224911](../../../../../../../reference/runtime/host-main.cjs#L224904-L224911) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:511920-511927](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511920-L511927) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:224904

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `bytes[computed]`, `i`, `lastByte`.

SHA-256 of the source span: `bde5311fdbcd22e48c187d49799e4107352f7dc9c6b42432d339bfcb469b53a4`.

### evaluation:511920

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `bytes[computed]`, `i`, `lastByte`.

SHA-256 of the source span: `bde5311fdbcd22e48c187d49799e4107352f7dc9c6b42432d339bfcb469b53a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
