# `quoteReport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512622-512627](../../../../../../reference/runtime/host-main.cjs#L512622-L512627) | `FunctionDeclaration` | no | `report, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512622-512627](../../../../../../reference/runtime/host-main.cjs#L512622-L512627) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:512622

Calls written directly in this body: `cloudAgentDumpActionPointer`, `report.slice`.

SHA-256 of the source span: `db661bedeb8dda8d684530614584a2a9318c1218aa4b8f20a16049725fd0d162`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
