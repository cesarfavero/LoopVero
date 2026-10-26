# `stockErrorHint`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750920-750947](../../../../../../../reference/runtime/host-main.cjs#L750920-L750947) | `FunctionDeclaration` | no | `tool, success2, runCodeOffered` |
| [evaluation:523771-523798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523771-L523798) | `FunctionDeclaration` | no | `tool, success2, runCodeOffered` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750920-750947](../../../../../../../reference/runtime/host-main.cjs#L750920-L750947) | 15 | 0 | 0 | 8 | 0 | 0 |
| [evaluation:523771-523798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523771-L523798) | 15 | 0 | 0 | 8 | 0 | 0 |

### host:750920

Calls written directly in this body: `NO_FILE_INPUT.test`, `playwrightRunCodeSuccessMeter`, `playwrightRunCodeToolError`, `playwrightToolErrorReason`, `runCodeErrorText`, `textOf`, `waitForTextHint`.

SHA-256 of the source span: `f5f8e50fbce3797d8eeeaef185e28a866cee238179a07ec5ed441d7c617816ce`.

### evaluation:523771

Calls written directly in this body: `NO_FILE_INPUT.test`, `playwrightRunCodeSuccessMeter`, `playwrightRunCodeToolError`, `playwrightToolErrorReason`, `runCodeErrorText`, `textOf2`, `waitForTextHint`.

SHA-256 of the source span: `d08a331ea8a07f6d0beac8a26d4033ef1f62e2a701127ee4a8e6a7ec36b5702b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
