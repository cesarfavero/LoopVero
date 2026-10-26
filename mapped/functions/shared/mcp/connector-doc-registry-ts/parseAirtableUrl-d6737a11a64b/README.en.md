# `parseAirtableUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774177-774179](../../../../../../reference/runtime/host-main.cjs#L774177-L774179) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573392-573394](../../../../../../reference/runtime/sand-eval-runner.cjs#L573392-L573394) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774177-774179](../../../../../../reference/runtime/host-main.cjs#L774177-L774179) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573392-573394](../../../../../../reference/runtime/sand-eval-runner.cjs#L573392-L573394) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774177

Calls written directly in this body: `airtableDoc`, `isHostOf`, `segmentsOf`.

SHA-256 of the source span: `a2c68657d836059b2fdc8e0a4077412cc1b38fa4a0c60f4ca87dc90626b33381`.

### evaluation:573392

Calls written directly in this body: `airtableDoc`, `isHostOf`, `segmentsOf`.

SHA-256 of the source span: `a2c68657d836059b2fdc8e0a4077412cc1b38fa4a0c60f4ca87dc90626b33381`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
