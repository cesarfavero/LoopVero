# `flatten`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/agent-content-search.ts` · [Module README](../../../../../../modules/host/extensions/content-search/agent-content-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541780-541782](../../../../../../../reference/runtime/host-main.cjs#L541780-L541782) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541780-541782](../../../../../../../reference/runtime/host-main.cjs#L541780-L541782) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541780

Calls written directly in this body: `.trim`, `text3.replace`.

SHA-256 of the source span: `1a937c86a38579b10117e32476e26e6f648f61192bfe83cb220029de2e61dcd2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
