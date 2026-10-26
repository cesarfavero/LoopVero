# `createMachineRoutedTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-user-computer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778334-778377](../../../../../../../reference/runtime/host-main.cjs#L778334-L778377) | `FunctionDeclaration` | no | `{   boxTool,   machineTool,   descriptionSuffix,   rejectUnknownMachineIds }` |
| [evaluation:578069-578112](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578069-L578112) | `FunctionDeclaration` | no | `{   boxTool,   machineTool,   descriptionSuffix,   rejectUnknownMachineIds }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778334-778377](../../../../../../../reference/runtime/host-main.cjs#L778334-L778377) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578069-578112](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578069-L578112) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778334

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `61602085e16e92c681ca53fae40cf5c8681def846800352b11607e90dc9398df`.

### evaluation:578069

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `bae1f001667ed9d9e46d44187cf72c829ba11f528e4b65c4618a16a839aac623`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
