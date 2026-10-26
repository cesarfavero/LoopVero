# `delayWith`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/async.ts` · [Module README](../../../../../modules/shared/node/async-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494335-494351](../../../../../../reference/runtime/host-main.cjs#L494335-L494351) | `FunctionDeclaration` | no | `clock, ms2, signal` |
| [evaluation:474704-474720](../../../../../../reference/runtime/sand-eval-runner.cjs#L474704-L474720) | `FunctionDeclaration` | no | `clock, ms2, signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494335-494351](../../../../../../reference/runtime/host-main.cjs#L494335-L494351) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474704-474720](../../../../../../reference/runtime/sand-eval-runner.cjs#L474704-L474720) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:494335

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `9d7c89425f28db61832232e7bbbcb2fe6ac0c232fec0ada7570b2eb3e0a0ae80`.

### evaluation:474704

Calls written directly in this body: `new Promise`.

SHA-256 of the source span: `271f28654837cf406a3fb142d34331b90001bc028a88572c01caecc789aa56fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
