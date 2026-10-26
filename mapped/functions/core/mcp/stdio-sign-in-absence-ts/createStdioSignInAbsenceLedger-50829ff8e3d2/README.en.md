# `createStdioSignInAbsenceLedger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/stdio-sign-in-absence.ts` · [Module README](../../../../../modules/core/mcp/stdio-sign-in-absence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700764-700788](../../../../../../reference/runtime/host-main.cjs#L700764-L700788) | `FunctionDeclaration` | no | `now = Date.now` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700764-700788](../../../../../../reference/runtime/host-main.cjs#L700764-L700788) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700764

Calls written directly in this body: `new Map`.

SHA-256 of the source span: `bd5c88d9ce21fb0e47aed97b29e0f3da612d46af98071a58ccaaeb58d0632259`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
