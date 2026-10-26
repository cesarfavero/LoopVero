# `streamPutFromFile/<callback>/settle3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/extensions/box-store-sync/agent-store-sand-files.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/agent-store-sand-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:474350-474355](../../../../../../../reference/runtime/host-main.cjs#L474350-L474355) | `ArrowFunctionExpression` | no | `error64, status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:474350-474355](../../../../../../../reference/runtime/host-main.cjs#L474350-L474355) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:474350

Calls written directly in this body: `reject2`, `resolve31`.

Assignment or increment targets: `settled`.

SHA-256 of the source span: `c5535293f765c186d3e3efc18fe858fdcfa59b2316da82fc24ee9f5f391ca169`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
