# `checkPrefillKeys`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/user-form-vault-kinds.ts` · [Module README](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724707-724714](../../../../../../../reference/runtime/host-main.cjs#L724707-L724714) | `FunctionDeclaration` | no | `kind, allowed, prefill` |
| [evaluation:560266-560273](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560266-L560273) | `FunctionDeclaration` | no | `kind, allowed, prefill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724707-724714](../../../../../../../reference/runtime/host-main.cjs#L724707-L724714) | 1 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:560266-560273](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560266-L560273) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:724707

Calls written directly in this body: `.find`, `.join`, `JSON.stringify`, `Object.keys`, `allowed.map`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `28c12cc7757b06f5c40eb764535c1d1d9a0d38c620b9b385014703451070ae87`.

### evaluation:560266

Calls written directly in this body: `.find`, `.join`, `JSON.stringify`, `Object.keys`, `allowed.map`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `46b4ce3a1f0ad221e88e1a48c3e6216e84552bb0c5c0115b4db5b7a8e37b530b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
