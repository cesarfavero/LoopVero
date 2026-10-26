# `parseMcpAppResourceMeta`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486844-486856](../../../../../../reference/runtime/host-main.cjs#L486844-L486856) | `FunctionDeclaration` | no | `metaJson` |
| [evaluation:495160-495172](../../../../../../reference/runtime/sand-eval-runner.cjs#L495160-L495172) | `FunctionDeclaration` | no | `metaJson` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486844-486856](../../../../../../reference/runtime/host-main.cjs#L486844-L486856) | 7 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:495160-495172](../../../../../../reference/runtime/sand-eval-runner.cjs#L495160-L495172) | 7 | 0 | 0 | 2 | 0 | 0 |

### host:486844

Calls written directly in this body: `Object.keys`, `isUnknownRecord2`, `parseCsp`, `parseJsonOrUndefined`, `parsePermissions`.

SHA-256 of the source span: `371f554b4a7385558db64c33705a70897e186120dfbfc6f43e18307983ae3e82`.

### evaluation:495160

Calls written directly in this body: `Object.keys`, `isUnknownRecord2`, `parseCsp`, `parseJsonOrUndefined2`, `parsePermissions`.

SHA-256 of the source span: `5757b180e473ab9862fdbc6ebd142096734278fba75c43ff23580fb096ad50f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
