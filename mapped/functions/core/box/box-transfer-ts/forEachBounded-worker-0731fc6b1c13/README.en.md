# `forEachBounded/worker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476521-476531](../../../../../../reference/runtime/host-main.cjs#L476521-L476531) | `FunctionDeclaration` | yes | `(none)` |
| [evaluation:515660-515670](../../../../../../reference/runtime/sand-eval-runner.cjs#L515660-L515670) | `FunctionDeclaration` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476521-476531](../../../../../../reference/runtime/host-main.cjs#L476521-L476531) | 0 | 1 | 1 | 0 | 1 | 1 |
| [evaluation:515660-515670](../../../../../../reference/runtime/sand-eval-runner.cjs#L515660-L515670) | 0 | 1 | 1 | 0 | 1 | 1 |

### host:476521

Calls written directly in this body: `fn`.

Assignment or increment targets: `cursor`, `isAborted3`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `0c2f4f95fbf9b0dd400a673b898890eb798997e696709bf2f3a4988c0a332fc7`.

### evaluation:515660

Calls written directly in this body: `fn`.

Assignment or increment targets: `cursor`, `isAborted3`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `02be5ae6d805e089c5184b1ce3b213a19bed43f92d9116cde321a388c626d367`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
