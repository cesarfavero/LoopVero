# `runCodeDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750479-750486](../../../../../../../reference/runtime/host-main.cjs#L750479-L750486) | `FunctionDeclaration` | no | `locators` |
| [evaluation:523330-523337](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523330-L523337) | `FunctionDeclaration` | no | `locators` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750479-750486](../../../../../../../reference/runtime/host-main.cjs#L750479-L750486) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523330-523337](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523330-L523337) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:750479

Calls written directly in this body: `.join`.

SHA-256 of the source span: `d4837899c732c0df7def24ca2b29440d8d7f8aca25ebeccb73db0971965d4289`.

### evaluation:523330

Calls written directly in this body: `.join`.

SHA-256 of the source span: `d4837899c732c0df7def24ca2b29440d8d7f8aca25ebeccb73db0971965d4289`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
