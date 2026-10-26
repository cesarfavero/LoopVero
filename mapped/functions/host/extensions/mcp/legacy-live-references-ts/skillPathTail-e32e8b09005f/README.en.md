# `skillPathTail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/extensions/mcp/legacy-live-references.ts` · [Module README](../../../../../../modules/host/extensions/mcp/legacy-live-references-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684771-684775](../../../../../../../reference/runtime/host-main.cjs#L684771-L684775) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684771-684775](../../../../../../../reference/runtime/host-main.cjs#L684771-L684775) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:684771

Calls written directly in this body: `normalized.lastIndexOf`, `normalized.slice`, `path33.replaceAll`.

SHA-256 of the source span: `b5a56ab9810ae5da3f148cfb7af35d4acbf6c487248dd033632b399a2e0e7096`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
