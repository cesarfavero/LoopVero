# `unregisteredConnectorDocRef`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573862-573882](../../../../../../reference/runtime/sand-eval-runner.cjs#L573862-L573882) | `FunctionDeclaration` | no | `{   connectorNames,   raw,   registrableLabel: registrableLabel2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573862-573882](../../../../../../reference/runtime/sand-eval-runner.cjs#L573862-L573882) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:573862

Calls written directly in this body: `.replaceAll`, `connectorNames.includes`, `label.toLowerCase`, `parseHttpsUrl`, `registrableLabel2`, `url2.hostname.toLowerCase`, `url2.pathname.replace`.

SHA-256 of the source span: `83be6dbec032e202b9296afe941d30c1b7baed8fe014157e8b587acef7b99bf0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
