# `withoutPlaywrightBoxServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-mcp-servers.ts` · [Module README](../../../../../modules/core/mcp/playwright-mcp-servers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:514910-514928](../../../../../../reference/runtime/sand-eval-runner.cjs#L514910-L514928) | `FunctionDeclaration` | no | `accessor, catalog` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:514910-514928](../../../../../../reference/runtime/sand-eval-runner.cjs#L514910-L514928) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:514910

Calls written directly in this body: `accessor.get`, `catalog.map`, `new CombinedResourceAccessor`, `new Set`, `resourceEntry`.

SHA-256 of the source span: `83ab014fb5df3a48b1ef3c6bc7afef04a9e7eacd726eefaa56864e6f76e672ee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
