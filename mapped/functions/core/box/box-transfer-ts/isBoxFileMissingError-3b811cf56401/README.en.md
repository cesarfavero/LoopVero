# `isBoxFileMissingError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476472-476477](../../../../../../reference/runtime/host-main.cjs#L476472-L476477) | `FunctionDeclaration` | no | `error64` |
| [evaluation:515610-515615](../../../../../../reference/runtime/sand-eval-runner.cjs#L515610-L515615) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476472-476477](../../../../../../reference/runtime/host-main.cjs#L476472-L476477) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515610-515615](../../../../../../reference/runtime/sand-eval-runner.cjs#L515610-L515615) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:476472

Calls written directly in this body: `error64.message.toLowerCase`, `findSystemErrno`, `message.includes`.

SHA-256 of the source span: `aa5f1c342b803108d35ce1b731b4f4a8f29150fd938a995ef0e1cf150d7ac665`.

### evaluation:515610

Calls written directly in this body: `error63.message.toLowerCase`, `findSystemErrno`, `message.includes`.

SHA-256 of the source span: `8eeee64615372a195a88ee393886ae7e5f455b3966e387e065022737d1670e12`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
