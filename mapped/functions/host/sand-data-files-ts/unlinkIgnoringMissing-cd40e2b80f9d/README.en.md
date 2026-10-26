# `unlinkIgnoringMissing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454022-454028](../../../../../reference/runtime/host-main.cjs#L454022-L454028) | `FunctionDeclaration` | no | `entry` |
| [evaluation:627622-627628](../../../../../reference/runtime/sand-eval-runner.cjs#L627622-L627628) | `FunctionDeclaration` | no | `entry` |
| [state-worker:623-629](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L623-L629) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454022-454028](../../../../../reference/runtime/host-main.cjs#L454022-L454028) | 1 | 0 | 0 | 0 | 1 | 1 |
| [evaluation:627622-627628](../../../../../reference/runtime/sand-eval-runner.cjs#L627622-L627628) | 1 | 0 | 0 | 0 | 1 | 1 |
| [state-worker:623-629](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L623-L629) | 1 | 0 | 0 | 0 | 1 | 1 |

### host:454022

Calls written directly in this body: `findSystemErrno`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `368f70ca176127ab98fbf7e9fbb70725adcecc9d1f1e5551e39d2d57916aef61`.

### evaluation:627622

Calls written directly in this body: `findSystemErrno`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `73cf7c8093a90229d36856c15990292a5dfb8689c1284f94d6c42fdc2381f8a9`.

### state-worker:623

Calls written directly in this body: `findSystemErrno`.

Explicit throw targets: `error`.

SHA-256 of the source span: `8aa0c3b1d082ec89f7166d07485b752dcddbb13be13a5727b1e53aa379f47f56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
