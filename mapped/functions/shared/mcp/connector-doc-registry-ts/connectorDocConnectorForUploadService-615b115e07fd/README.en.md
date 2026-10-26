# `connectorDocConnectorForUploadService`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774491-774493](../../../../../../reference/runtime/host-main.cjs#L774491-L774493) | `FunctionDeclaration` | no | `service` |
| [evaluation:573727-573729](../../../../../../reference/runtime/sand-eval-runner.cjs#L573727-L573729) | `FunctionDeclaration` | no | `service` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774491-774493](../../../../../../reference/runtime/host-main.cjs#L774491-L774493) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573727-573729](../../../../../../reference/runtime/sand-eval-runner.cjs#L573727-L573729) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774491

Calls written directly in this body: `CONNECTORS.find`.

SHA-256 of the source span: `36b93a3b2eb1d40f7de0cc7bbd92486872dbd5fe763fe376a64fb5ea38691a3e`.

### evaluation:573727

Calls written directly in this body: `CONNECTORS.find`.

SHA-256 of the source span: `36b93a3b2eb1d40f7de0cc7bbd92486872dbd5fe763fe376a64fb5ea38691a3e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
