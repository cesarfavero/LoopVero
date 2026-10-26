# `openCdpConnection/<callback>/<callback>/failed2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [Module README](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:543150-543154](../../../../../../../reference/runtime/host-main.cjs#L543150-L543154) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543150-543154](../../../../../../../reference/runtime/host-main.cjs#L543150-L543154) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:543150

Calls written directly in this body: `new Error`, `reject2`, `signal.removeEventListener`, `socket.removeEventListener`.

SHA-256 of the source span: `40ac8ba1b1922aae6df58c199fdd1b910a5453ab7868b2f61114d0f6b0203f58`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
