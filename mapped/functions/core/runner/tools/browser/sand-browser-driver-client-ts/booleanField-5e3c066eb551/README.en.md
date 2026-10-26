# `booleanField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/sand-browser-driver-client.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/sand-browser-driver-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724179-724183](../../../../../../../../reference/runtime/host-main.cjs#L724179-L724183) | `FunctionDeclaration` | no | `fields3, key` |
| [evaluation:560073-560077](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560073-L560077) | `FunctionDeclaration` | no | `fields3, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724179-724183](../../../../../../../../reference/runtime/host-main.cjs#L724179-L724183) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:560073-560077](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560073-L560077) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:724179

Calls written directly in this body: `fields3.get`.

SHA-256 of the source span: `1614402684478f6b7ab0b947ddee20d27bf967b00866f895ffdc326e2966fc9e`.

### evaluation:560073

Calls written directly in this body: `fields3.get`.

SHA-256 of the source span: `1614402684478f6b7ab0b947ddee20d27bf967b00866f895ffdc326e2966fc9e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
