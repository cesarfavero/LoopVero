# `pluginVariablesSchemaToFields`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-plugin-variables.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-plugin-variables-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:404354-404393](../../../../../../../reference/runtime/host-main.cjs#L404354-L404393) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404354-404393](../../../../../../../reference/runtime/host-main.cjs#L404354-L404393) | 12 | 1 | 0 | 2 | 0 | 0 |

### host:404354

Calls written directly in this body: `Array.isArray`, `Object.entries`, `fields3.push`, `humanizeVariableName`, `isSecretVariableName`, `isUnknownRecord2`, `new Set`, `required2.has`, `root.required.filter`, `toDefaultValue`, `toFieldType`, `toOptions`, `unsupportedFieldKeys.push`.

SHA-256 of the source span: `bf0b471dd96ba4b54eece11e7f8bbaf11a6e4be853fcfbccba78621149cf42b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
