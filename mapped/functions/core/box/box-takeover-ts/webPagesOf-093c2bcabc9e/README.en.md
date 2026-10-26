# `webPagesOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:775955-775972](../../../../../../reference/runtime/host-main.cjs#L775955-L775972) | `FunctionDeclaration` | no | `pageList` |
| [evaluation:575612-575629](../../../../../../reference/runtime/sand-eval-runner.cjs#L575612-L575629) | `FunctionDeclaration` | no | `pageList` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775955-775972](../../../../../../reference/runtime/host-main.cjs#L775955-L775972) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:575612-575629](../../../../../../reference/runtime/sand-eval-runner.cjs#L575612-L575629) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:775955

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `targets.flatMap`.

Assignment or increment targets: `targets`.

SHA-256 of the source span: `533bd88d7fdc7e4abb4fad233ebe21c8c4730d34aedb2a2ee7dec8aee61e00e6`.

### evaluation:575612

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `targets.flatMap`.

Assignment or increment targets: `targets`.

SHA-256 of the source span: `533bd88d7fdc7e4abb4fad233ebe21c8c4730d34aedb2a2ee7dec8aee61e00e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
