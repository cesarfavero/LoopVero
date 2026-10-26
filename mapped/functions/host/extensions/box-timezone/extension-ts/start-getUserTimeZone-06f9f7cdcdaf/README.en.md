# `start/getUserTimeZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-timezone/extension.ts` · [Module README](../../../../../../modules/host/extensions/box-timezone/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506496-506496](../../../../../../../reference/runtime/host-main.cjs#L506496-L506496) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506496-506496](../../../../../../../reference/runtime/host-main.cjs#L506496-L506496) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506496 uses an implicit arrow-function return.

### host:506496

Calls written directly in this body: `settings.getUserTimeZone`.

SHA-256 of the source span: `edb00cef59617688b72f4baa312d99302e577244efe239329f4d955abb6adbec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
