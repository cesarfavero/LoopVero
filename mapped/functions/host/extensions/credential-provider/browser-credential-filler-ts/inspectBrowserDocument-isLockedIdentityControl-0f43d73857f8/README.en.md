# `inspectBrowserDocument/isLockedIdentityControl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547494-547494](../../../../../../../reference/runtime/host-main.cjs#L547494-L547494) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547494-547494](../../../../../../../reference/runtime/host-main.cjs#L547494-L547494) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:547494 uses an implicit arrow-function return.

### host:547494

Calls written directly in this body: `Element.prototype.matches.call`, `input2.getAttribute`, `input2.value.trim`.

SHA-256 of the source span: `0341e9eba7cdd837dd56a3c0e79024bcee0bd3b051e0b84594fa7beafd6023a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
