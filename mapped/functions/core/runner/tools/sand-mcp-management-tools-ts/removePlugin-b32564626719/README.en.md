# `removePlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780080-780086](../../../../../../../reference/runtime/host-main.cjs#L780080-L780086) | `FunctionDeclaration` | yes | `uninstallPlugin, pluginId` |
| [evaluation:580325-580331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580325-L580331) | `FunctionDeclaration` | yes | `uninstallPlugin, pluginId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780080-780086](../../../../../../../reference/runtime/host-main.cjs#L780080-L780086) | 1 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:580325-580331](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580325-L580331) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:780080

Calls written directly in this body: `uninstallPlugin`.

SHA-256 of the source span: `cf9e9a4521ebd4dd65ad156359d7fbec8ae867ef9b00c67763650670d2a2d22b`.

### evaluation:580325

Calls written directly in this body: `uninstallPlugin`.

SHA-256 of the source span: `cf9e9a4521ebd4dd65ad156359d7fbec8ae867ef9b00c67763650670d2a2d22b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
