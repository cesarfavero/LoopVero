# `start/getAccessToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/auth/extension.ts` · [Module README](../../../../../../modules/host/extensions/auth/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:499819-499819](../../../../../../../reference/runtime/host-main.cjs#L499819-L499819) | `ArrowFunctionExpression` | no | `options2` |
| [host:499855-499855](../../../../../../../reference/runtime/host-main.cjs#L499855-L499855) | `ArrowFunctionExpression` | no | `options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:499819-499819](../../../../../../../reference/runtime/host-main.cjs#L499819-L499819) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499819 uses an implicit arrow-function return.
| [host:499855-499855](../../../../../../../reference/runtime/host-main.cjs#L499855-L499855) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:499855 uses an implicit arrow-function return.

### host:499819

Calls written directly in this body: `service.getAccessToken`.

SHA-256 of the source span: `5f2fe99afe4459c2997179a6377248456655c3fd8231a39659820ffb7fa9331e`.

### host:499855

Calls written directly in this body: `service.getAccessToken`.

SHA-256 of the source span: `5f2fe99afe4459c2997179a6377248456655c3fd8231a39659820ffb7fa9331e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
