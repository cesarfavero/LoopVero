# `realpathNearestExisting`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/paths.ts` · [Module README](../../../../../modules/shared/node/paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430816-430831](../../../../../../reference/runtime/host-main.cjs#L430816-L430831) | `FunctionDeclaration` | yes | `p2` |
| [evaluation:530426-530441](../../../../../../reference/runtime/sand-eval-runner.cjs#L530426-L530441) | `FunctionDeclaration` | yes | `p2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430816-430831](../../../../../../reference/runtime/host-main.cjs#L430816-L430831) | 3 | 1 | 1 | 2 | 1 | 1 |
| [evaluation:530426-530441](../../../../../../reference/runtime/sand-eval-runner.cjs#L530426-L530441) | 3 | 1 | 1 | 2 | 1 | 1 |

### host:430816

Calls written directly in this body: `findSystemErrno`, `missing.push`, `missing.reverse`.

Assignment or increment targets: `current2`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `54505a323689630b6cec1cc77775f996d9d2468717855ba36ec994be183d7e47`.

### evaluation:530426

Calls written directly in this body: `findSystemErrno`, `missing.push`, `missing.reverse`.

Assignment or increment targets: `current2`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `522d15de1bcdba941240df99b99d9ab58bfd091db045414842a2ab092023459e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
