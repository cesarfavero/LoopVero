# `uploadedDocTouch`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774534-774541](../../../../../../../reference/runtime/host-main.cjs#L774534-L774541) | `FunctionDeclaration` | no | `serviceKey, uploaded` |
| [evaluation:574110-574117](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574110-L574117) | `FunctionDeclaration` | no | `serviceKey, uploaded` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774534-774541](../../../../../../../reference/runtime/host-main.cjs#L774534-L774541) | 4 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:574110-574117](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574110-L574117) | 4 | 0 | 0 | 3 | 0 | 0 |

### host:774534

Calls written directly in this body: `connectorDocConnectorForUploadService`, `connectorDocRefFromId`, `connectorDocRefFromUrl`, `sanitizeTitle`.

SHA-256 of the source span: `bcdbd8b65ba36c5f55b504100e20334e9e9baa29dfce339e6df61079460ae402`.

### evaluation:574110

Calls written directly in this body: `connectorDocConnectorForUploadService`, `connectorDocRefFromId`, `connectorDocRefFromUrl`, `sanitizeTitle`.

SHA-256 of the source span: `bcdbd8b65ba36c5f55b504100e20334e9e9baa29dfce339e6df61079460ae402`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
