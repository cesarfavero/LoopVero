# `BoxTransferError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476460-476464](../../../../../../reference/runtime/host-main.cjs#L476460-L476464) | `method` | no | `code, message, options2` |
| [evaluation:515598-515602](../../../../../../reference/runtime/sand-eval-runner.cjs#L515598-L515602) | `method` | no | `code, message, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476460-476464](../../../../../../reference/runtime/host-main.cjs#L476460-L476464) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515598-515602](../../../../../../reference/runtime/sand-eval-runner.cjs#L515598-L515602) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:476460

Calls written directly in this body: `super`.

Assignment or increment targets: `this.code`, `this.name`.

SHA-256 of the source span: `fe9df5cc4ae069bdf64df56e532e5a5785298124b9161e1273f36b93c6ecdb20`.

### evaluation:515598

Calls written directly in this body: `super`.

Assignment or increment targets: `this.code`, `this.name`.

SHA-256 of the source span: `fe9df5cc4ae069bdf64df56e532e5a5785298124b9161e1273f36b93c6ecdb20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
