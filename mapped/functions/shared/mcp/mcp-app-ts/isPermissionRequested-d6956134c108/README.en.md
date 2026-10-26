# `isPermissionRequested`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp-app.ts` · [Module README](../../../../../modules/shared/mcp/mcp-app-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:486831-486833](../../../../../../reference/runtime/host-main.cjs#L486831-L486833) | `FunctionDeclaration` | no | `marker17` |
| [evaluation:495147-495149](../../../../../../reference/runtime/sand-eval-runner.cjs#L495147-L495149) | `FunctionDeclaration` | no | `marker17` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486831-486833](../../../../../../reference/runtime/host-main.cjs#L486831-L486833) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495147-495149](../../../../../../reference/runtime/sand-eval-runner.cjs#L495147-L495149) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:486831

Calls written directly in this body: `isUnknownRecord2`.

SHA-256 of the source span: `c3afed7ceff86d8c27aac1b3db1f6474cf9d7090ccdd134e9cfbef4f345cab17`.

### evaluation:495147

Calls written directly in this body: `isUnknownRecord2`.

SHA-256 of the source span: `c3afed7ceff86d8c27aac1b3db1f6474cf9d7090ccdd134e9cfbef4f345cab17`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
