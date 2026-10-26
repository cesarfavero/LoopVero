# `readSandBoxBrowser`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/navigation-telemetry.ts` · [Module README](../../../../../modules/core/runner/navigation-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490054-490063](../../../../../../reference/runtime/host-main.cjs#L490054-L490063) | `FunctionDeclaration` | no | `recordPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490054-490063](../../../../../../reference/runtime/host-main.cjs#L490054-L490063) | 2 | 0 | 0 | 2 | 1 | 1 |

### host:490054

Calls written directly in this body: `.trim`, `findSystemErrno`, `isSandBoxBrowser`.

Assignment or increment targets: `recorded`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `c5249b7e5560e9bff2e7dbbdd858489033d41af63e42719b6b88bbb5f629fe79`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
