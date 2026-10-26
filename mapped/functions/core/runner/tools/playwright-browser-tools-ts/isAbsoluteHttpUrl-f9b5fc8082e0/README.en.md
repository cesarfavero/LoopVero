# `isAbsoluteHttpUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750426-750428](../../../../../../../reference/runtime/host-main.cjs#L750426-L750428) | `FunctionDeclaration` | no | `url2` |
| [evaluation:523277-523279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523277-L523279) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750426-750428](../../../../../../../reference/runtime/host-main.cjs#L750426-L750428) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523277-523279](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523277-L523279) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750426

Calls written directly in this body: `ABSOLUTE_HTTP_URL.test`, `isHttpExternalUrl`.

SHA-256 of the source span: `d4a8c4d06bc161baabf66aafcfe5c7dbc86c4389c7d3a2c25b5a974af4d3527c`.

### evaluation:523277

Calls written directly in this body: `ABSOLUTE_HTTP_URL.test`, `isHttpExternalUrl`.

SHA-256 of the source span: `d4a8c4d06bc161baabf66aafcfe5c7dbc86c4389c7d3a2c25b5a974af4d3527c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
