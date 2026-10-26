# `SandHost.getApi/setWindowFocused`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786634-786634](../../../../../reference/runtime/host-main.cjs#L786634-L786634) | `ArrowFunctionExpression` | no | `isFocused, surface` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786634-786634](../../../../../reference/runtime/host-main.cjs#L786634-L786634) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786634 uses an implicit arrow-function return.

### host:786634

Calls written directly in this body: `this.setWindowFocused`.

SHA-256 of the source span: `1c11834bff7dbbcb471a5f2e633a22142dbd14a12478feef4df2341bc554fd8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
