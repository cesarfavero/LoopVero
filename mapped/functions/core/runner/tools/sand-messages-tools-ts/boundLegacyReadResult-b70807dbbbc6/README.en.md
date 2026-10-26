# `boundLegacyReadResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778018-778041](../../../../../../../reference/runtime/host-main.cjs#L778018-L778041) | `FunctionDeclaration` | no | `result` |
| [evaluation:577753-577776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577753-L577776) | `FunctionDeclaration` | no | `result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778018-778041](../../../../../../../reference/runtime/host-main.cjs#L778018-L778041) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577753-577776](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577753-L577776) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:778018

Calls written directly in this body: `pageChats`, `pageNewest`.

SHA-256 of the source span: `1a3d9694b877176db1c85f3b08efec456c56ded2e88df8703d0264b4dabfd16f`.

### evaluation:577753

Calls written directly in this body: `pageChats`, `pageNewest`.

SHA-256 of the source span: `1a3d9694b877176db1c85f3b08efec456c56ded2e88df8703d0264b4dabfd16f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
