# `refusePrivateTailnetPluginInstall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780094-780105](../../../../../../../reference/runtime/host-main.cjs#L780094-L780105) | `FunctionDeclaration` | yes | `uninstallPlugin, install` |
| [evaluation:580339-580350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580339-L580350) | `FunctionDeclaration` | yes | `uninstallPlugin, install` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780094-780105](../../../../../../../reference/runtime/host-main.cjs#L780094-L780105) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:580339-580350](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580339-L580350) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:780094

Calls written directly in this body: `privateTailnetPluginRefusedMessage`, `privateTailnetUrlsAdded`, `removePlugin`.

SHA-256 of the source span: `7ead5f6a00a98d70734c8b038c1d4d2666127d47c51e34f64c92dbeea338c383`.

### evaluation:580339

Calls written directly in this body: `privateTailnetPluginRefusedMessage`, `privateTailnetUrlsAdded`, `removePlugin`.

SHA-256 of the source span: `7ead5f6a00a98d70734c8b038c1d4d2666127d47c51e34f64c92dbeea338c383`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
