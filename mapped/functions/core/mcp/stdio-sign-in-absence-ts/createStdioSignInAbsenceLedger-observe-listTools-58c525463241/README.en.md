# `createStdioSignInAbsenceLedger/observe/listTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/stdio-sign-in-absence.ts` · [Module README](../../../../../modules/core/mcp/stdio-sign-in-absence-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700770-700781](../../../../../../reference/runtime/host-main.cjs#L700770-L700781) | `FunctionExpression` | yes | `serverIdentifiers, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700770-700781](../../../../../../reference/runtime/host-main.cjs#L700770-L700781) | 2 | 1 | 1 | 1 | 0 | 0 |

### host:700770

Calls written directly in this body: `exec2.listTools`, `listingSentAtMs.get`, `listingSentAtMs.set`, `now`.

SHA-256 of the source span: `ae27a0f3efa4aa2591c7f5c6d6dff04e8867b36e3ca4d0ebd943e48fa8dafdfb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
