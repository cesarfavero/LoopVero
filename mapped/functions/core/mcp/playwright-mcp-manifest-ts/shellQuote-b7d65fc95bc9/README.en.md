# `shellQuote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-mcp-manifest.ts` · [Module README](../../../../../modules/core/mcp/playwright-mcp-manifest-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:693565-693567](../../../../../../reference/runtime/host-main.cjs#L693565-L693567) | `FunctionDeclaration` | no | `value` |
| [evaluation:514859-514861](../../../../../../reference/runtime/sand-eval-runner.cjs#L514859-L514861) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693565-693567](../../../../../../reference/runtime/host-main.cjs#L693565-L693567) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514859-514861](../../../../../../reference/runtime/sand-eval-runner.cjs#L514859-L514861) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:693565

Calls written directly in this body: `value.replaceAll`.

SHA-256 of the source span: `c977a40b910ceafc48255348aef2792f7a4c00d181bc05aa10c61302a7497c5f`.

### evaluation:514859

Calls written directly in this body: `value.replaceAll`.

SHA-256 of the source span: `c977a40b910ceafc48255348aef2792f7a4c00d181bc05aa10c61302a7497c5f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
