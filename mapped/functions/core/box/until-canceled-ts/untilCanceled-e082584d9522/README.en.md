# `untilCanceled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/until-canceled.ts` · [Module README](../../../../../modules/core/box/until-canceled-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553792-553803](../../../../../../reference/runtime/host-main.cjs#L553792-L553803) | `FunctionDeclaration` | yes | `ctx, start` |
| [evaluation:575561-575572](../../../../../../reference/runtime/sand-eval-runner.cjs#L575561-L575572) | `FunctionDeclaration` | yes | `ctx, start` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553792-553803](../../../../../../reference/runtime/host-main.cjs#L553792-L553803) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:575561-575572](../../../../../../reference/runtime/sand-eval-runner.cjs#L575561-L575572) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:553792

Calls written directly in this body: `Promise.race`, `Promise.withResolvers`, `signal.addEventListener`, `signal.removeEventListener`, `signal.throwIfAborted`, `start`.

SHA-256 of the source span: `8fc614aa4e143b7a0b6a1e6f50ce5553146649ba08a51777eb044062e6f7ec56`.

### evaluation:575561

Calls written directly in this body: `Promise.race`, `Promise.withResolvers`, `signal.addEventListener`, `signal.removeEventListener`, `signal.throwIfAborted`, `start`.

SHA-256 of the source span: `8fc614aa4e143b7a0b6a1e6f50ce5553146649ba08a51777eb044062e6f7ec56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
