# `fragmentProblem`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/visualize/visualize-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/visualize/visualize-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768548-768561](../../../../../../../../reference/runtime/host-main.cjs#L768548-L768561) | `FunctionDeclaration` | no | `{   html,   origin }` |
| [evaluation:564063-564076](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564063-L564076) | `FunctionDeclaration` | no | `{   html,   origin }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768548-768561](../../../../../../../../reference/runtime/host-main.cjs#L768548-L768561) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:564063-564076](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564063-L564076) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:768548

Calls written directly in this body: `.encode`, `THREE_CLASS_CALLED_WITHOUT_NEW.exec`, `html.trim`, `new TextEncoder`.

SHA-256 of the source span: `7352890a3c42e4e036cc932283376abbcc11252dd6317c2b2e1b84d2fb3eb32e`.

### evaluation:564063

Calls written directly in this body: `.encode`, `THREE_CLASS_CALLED_WITHOUT_NEW.exec`, `html.trim`, `new TextEncoder`.

SHA-256 of the source span: `7352890a3c42e4e036cc932283376abbcc11252dd6317c2b2e1b84d2fb3eb32e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
