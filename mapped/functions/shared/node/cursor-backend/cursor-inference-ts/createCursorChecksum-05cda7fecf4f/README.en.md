# `createCursorChecksum`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/inference/README.en.md).

**Module:** `shared/node/cursor-backend/cursor-inference.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cursor-inference-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:224912-224924](../../../../../../../reference/runtime/host-main.cjs#L224912-L224924) | `FunctionDeclaration` | no | `machineId` |
| [evaluation:511928-511940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511928-L511940) | `FunctionDeclaration` | no | `machineId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:224912-224924](../../../../../../../reference/runtime/host-main.cjs#L224912-L224924) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:511928-511940](../../../../../../../reference/runtime/sand-eval-runner.cjs#L511928-L511940) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:224912

Calls written directly in this body: `.toString`, `Buffer.from`, `Date.now`, `Math.floor`, `enhancedObfuscate`, `new Uint8Array`.

SHA-256 of the source span: `827a474e69bec4497818d4532ade0a158bda3f590b71cd75632fa29e27590a3d`.

### evaluation:511928

Calls written directly in this body: `.toString`, `Buffer.from`, `Date.now`, `Math.floor`, `enhancedObfuscate`, `new Uint8Array`.

SHA-256 of the source span: `827a474e69bec4497818d4532ade0a158bda3f590b71cd75632fa29e27590a3d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
