# `connectorDocRefFromId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774507-774523](../../../../../../reference/runtime/host-main.cjs#L774507-L774523) | `FunctionDeclaration` | no | `{   connector,   key,   value,   onDocumentObject }` |
| [evaluation:573743-573759](../../../../../../reference/runtime/sand-eval-runner.cjs#L573743-L573759) | `FunctionDeclaration` | no | `{   connector,   key,   value,   onDocumentObject }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774507-774523](../../../../../../reference/runtime/host-main.cjs#L774507-L774523) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573743-573759](../../../../../../reference/runtime/sand-eval-runner.cjs#L573743-L573759) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:774507

Calls written directly in this body: `.find`, `Object.entries`, `fromKey`, `normalizedArgKey`, `spec.documentId`, `toRef`.

SHA-256 of the source span: `239a12d6efc7cec7054a072b8dd0c779752f9e30f4841456a94784b6a0ab4486`.

### evaluation:573743

Calls written directly in this body: `.find`, `Object.entries`, `fromKey`, `normalizedArgKey`, `spec.documentId`, `toRef`.

SHA-256 of the source span: `239a12d6efc7cec7054a072b8dd0c779752f9e30f4841456a94784b6a0ab4486`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
