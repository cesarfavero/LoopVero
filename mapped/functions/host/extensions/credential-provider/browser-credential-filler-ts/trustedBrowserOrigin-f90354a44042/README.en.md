# `trustedBrowserOrigin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547637-547647](../../../../../../../reference/runtime/host-main.cjs#L547637-L547647) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547637-547647](../../../../../../../reference/runtime/host-main.cjs#L547637-L547647) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:547637

Calls written directly in this body: `URL.canParse`, `isLoopbackHostname`, `new URL`, `raw.trim`, `url2.origin.toLowerCase`, `value.includes`.

SHA-256 of the source span: `dc8461b778fec55b403912f46621d7c7950c52a73128f732f65d3d08b583dbbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
