# `createScreenshotArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777346-777351](../../../../../../../reference/runtime/host-main.cjs#L777346-L777351) | `FunctionDeclaration` | no | `toolCallId` |
| [evaluation:576991-576996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576991-L576996) | `FunctionDeclaration` | no | `toolCallId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777346-777351](../../../../../../../reference/runtime/host-main.cjs#L777346-L777351) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576991-576996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576991-L576996) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777346

Calls written directly in this body: `new ComputerUseArgs`, `toAction`.

SHA-256 of the source span: `ec180f9fdff1abbff23609f2324e7a6555391a2a23a0f503c3ac94cb7b5a178d`.

### evaluation:576991

Calls written directly in this body: `new ComputerUseArgs`, `toAction`.

SHA-256 of the source span: `ec180f9fdff1abbff23609f2324e7a6555391a2a23a0f503c3ac94cb7b5a178d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
