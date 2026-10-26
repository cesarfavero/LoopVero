# `start/removeLiveReferences`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/extension.ts` · [Module README](../../../../../../modules/host/extensions/mcp/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702498-702498](../../../../../../../reference/runtime/host-main.cjs#L702498-L702498) | `ArrowFunctionExpression` | no | `sourceUrls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702498-702498](../../../../../../../reference/runtime/host-main.cjs#L702498-L702498) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:702498 uses an implicit arrow-function return.

### host:702498

Calls written directly in this body: `removeSkillLiveReferences`.

SHA-256 of the source span: `ed0b53f79e36c1b081dfb9dfcb82d635c0a51160383e4ceff4c5d6325de9092f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
