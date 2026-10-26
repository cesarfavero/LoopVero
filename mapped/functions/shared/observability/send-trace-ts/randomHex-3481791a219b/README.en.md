# `randomHex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/send-trace.ts` · [Module README](../../../../../modules/shared/observability/send-trace-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:528670-528678](../../../../../../reference/runtime/sand-eval-runner.cjs#L528670-L528678) | `FunctionDeclaration` | no | `byteLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528670-528678](../../../../../../reference/runtime/sand-eval-runner.cjs#L528670-L528678) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:528670

Calls written directly in this body: `.padStart`, `byte.toString`, `globalThis.crypto.getRandomValues`, `new Uint8Array`.

Assignment or increment targets: `out`.

SHA-256 of the source span: `b0e1f7bd1e8911f037138c84e20b4ba441afa856ed23e0bc5f2703825ca81c02`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
