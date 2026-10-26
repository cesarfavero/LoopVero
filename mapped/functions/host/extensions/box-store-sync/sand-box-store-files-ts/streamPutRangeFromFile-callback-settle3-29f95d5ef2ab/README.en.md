# `streamPutRangeFromFile/<callback>/settle3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/sand-box-store-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/sand-box-store-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474746-474751](../../../../../../../reference/runtime/host-main.cjs#L474746-L474751) | `ArrowFunctionExpression` | no | `error64, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474746-474751](../../../../../../../reference/runtime/host-main.cjs#L474746-L474751) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:474746

Calls written directly in this body: `reject2`, `resolve31`.

Assignment or increment targets: `settled`.

SHA-256 of the source span: `ce64ab374a49daeb8710d8e0302dceb6797598b402347fb147290a056a993eae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
