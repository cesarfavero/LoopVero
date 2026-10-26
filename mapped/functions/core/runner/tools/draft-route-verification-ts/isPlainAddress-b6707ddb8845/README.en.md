# `isPlainAddress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735004-735006](../../../../../../../reference/runtime/host-main.cjs#L735004-L735006) | `FunctionDeclaration` | no | `value` |
| [evaluation:540578-540580](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540578-L540580) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735004-735006](../../../../../../../reference/runtime/host-main.cjs#L735004-L735006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540578-540580](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540578-L540580) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:735004

Calls written directly in this body: `/^[^\s@<>]+@[^\s@<>]+$/.test`.

SHA-256 of the source span: `c960d7c5b6d909c387d5221de2f45252792583a9c34287186f83a1a3804de130`.

### evaluation:540578

Calls written directly in this body: `/^[^\s@<>]+@[^\s@<>]+$/.test`.

SHA-256 of the source span: `c960d7c5b6d909c387d5221de2f45252792583a9c34287186f83a1a3804de130`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
