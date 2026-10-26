# `sheetsCopyDestination`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774132-774136](../../../../../../reference/runtime/host-main.cjs#L774132-L774136) | `FunctionDeclaration` | no | `args` |
| [evaluation:573347-573351](../../../../../../reference/runtime/sand-eval-runner.cjs#L573347-L573351) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774132-774136](../../../../../../reference/runtime/host-main.cjs#L774132-L774136) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573347-573351](../../../../../../reference/runtime/sand-eval-runner.cjs#L573347-L573351) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:774132

Calls written directly in this body: `googleDoc`, `stringArg2`.

SHA-256 of the source span: `424fe4f8288c675a671f3535d796adb229558361217385754bffe3c13f0135e8`.

### evaluation:573347

Calls written directly in this body: `googleDoc`, `stringArg2`.

SHA-256 of the source span: `da3cae4f9272e6ddb1840e32a0ced294147fa9f101f4f5d09ec00257fed15a5e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
