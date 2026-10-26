# `parsedInputSchemaJson`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/cursor-backend/backend-mcp-exec.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/backend-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486919-486928](../../../../../../../reference/runtime/host-main.cjs#L486919-L486928) | `FunctionDeclaration` | no | `json3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486919-486928](../../../../../../../reference/runtime/host-main.cjs#L486919-L486928) | 1 | 0 | 0 | 2 | 0 | 1 |

### host:486919

Calls written directly in this body: `JSON.parse`.

Assignment or increment targets: `schema3`.

SHA-256 of the source span: `ebe1368471c3ee1b35744e7de065e3e9d6b6e5b2ce1305ffb80c4de0fac57b0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
