# `carriesPageText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-spotlight-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-spotlight-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761887-761891](../../../../../../../reference/runtime/host-main.cjs#L761887-L761891) | `FunctionDeclaration` | no | `tool` |
| [evaluation:554332-554336](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554332-L554336) | `FunctionDeclaration` | no | `tool` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761887-761891](../../../../../../../reference/runtime/host-main.cjs#L761887-L761891) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:554332-554336](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554332-L554336) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:761887

Calls written directly in this body: `WEB_PAGE_TOOLS.has`, `playwrightBoxMcpWindowIndex`.

SHA-256 of the source span: `a846665e6583e12dd3233dfe192ecf563b7f67198b4f2cdac927ac0cbdd8f31b`.

### evaluation:554332

Calls written directly in this body: `WEB_PAGE_TOOLS.has`, `playwrightBoxMcpWindowIndex`.

SHA-256 of the source span: `a846665e6583e12dd3233dfe192ecf563b7f67198b4f2cdac927ac0cbdd8f31b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
