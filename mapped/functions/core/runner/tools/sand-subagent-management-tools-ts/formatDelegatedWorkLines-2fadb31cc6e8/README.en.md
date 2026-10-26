# `formatDelegatedWorkLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tools/sand-subagent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-subagent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781012-781019](../../../../../../../reference/runtime/host-main.cjs#L781012-L781019) | `FunctionDeclaration` | no | `delegated` |
| [evaluation:581359-581366](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581359-L581366) | `FunctionDeclaration` | no | `delegated` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781012-781019](../../../../../../../reference/runtime/host-main.cjs#L781012-L781019) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581359-581366](../../../../../../../reference/runtime/sand-eval-runner.cjs#L581359-L581366) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:781012

Calls written directly in this body: `delegated.filter`, `delegated.map`.

SHA-256 of the source span: `38104b0ac421023438684ebbc048317e64261ec0ddb53cbc42a53f35db137f5d`.

### evaluation:581359

Calls written directly in this body: `delegated.filter`, `delegated.map`.

SHA-256 of the source span: `54598fb3e0af9cce83512d578f4859530670560fb4cfd3ed6ec13c434f829c76`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
