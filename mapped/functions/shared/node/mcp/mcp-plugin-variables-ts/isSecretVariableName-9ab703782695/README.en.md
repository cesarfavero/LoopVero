# `isSecretVariableName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-plugin-variables.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-plugin-variables-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404322-404324](../../../../../../../reference/runtime/host-main.cjs#L404322-L404324) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404322-404324](../../../../../../../reference/runtime/host-main.cjs#L404322-L404324) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:404322

Calls written directly in this body: `.replace`, `.some`, `.split`, `.toUpperCase`, `name18.replace`.

SHA-256 of the source span: `00cfe5569a846056588aaa79c1adadc20b9e8f88b8123fc9746c5a92829dd753`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
