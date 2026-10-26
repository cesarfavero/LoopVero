# `readBoundedSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453774-453789](../../../../../reference/runtime/host-main.cjs#L453774-L453789) | `FunctionDeclaration` | no | `fd, path33, maxBytes` |
| [evaluation:627516-627531](../../../../../reference/runtime/sand-eval-runner.cjs#L627516-L627531) | `FunctionDeclaration` | no | `fd, path33, maxBytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453774-453789](../../../../../reference/runtime/host-main.cjs#L453774-L453789) | 3 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:627516-627531](../../../../../reference/runtime/sand-eval-runner.cjs#L627516-L627531) | 3 | 1 | 0 | 1 | 1 | 0 |

### host:453774

Calls written directly in this body: `Buffer.allocUnsafe`, `Math.max`, `Math.min`, `buffer.copy`, `buffer.toString`, `oversizedSandDataFile`.

Assignment or increment targets: `buffer`, `length`.

Explicit throw targets: `oversizedSandDataFile`.

SHA-256 of the source span: `63c4dcb676c930cbb705d8e2d9ef233aa7eacd025aa438821ee692a90ea06399`.

### evaluation:627516

Calls written directly in this body: `Buffer.allocUnsafe`, `Math.max`, `Math.min`, `buffer.copy`, `buffer.toString`, `oversizedSandDataFile`.

Assignment or increment targets: `buffer`, `length`.

Explicit throw targets: `oversizedSandDataFile`.

SHA-256 of the source span: `1836e606d8914f71f2a9619a83ab44eb6b369a53258170ddac173cb35c16759c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
