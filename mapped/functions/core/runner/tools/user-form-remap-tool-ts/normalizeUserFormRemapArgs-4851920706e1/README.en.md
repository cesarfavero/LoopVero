# `normalizeUserFormRemapArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-remap-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-remap-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778397-778417](../../../../../../../reference/runtime/host-main.cjs#L778397-L778417) | `FunctionDeclaration` | no | `args` |
| [evaluation:578131-578151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578131-L578151) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778397-778417](../../../../../../../reference/runtime/host-main.cjs#L778397-L778417) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:578131-578151](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578131-L578151) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:778397

Calls written directly in this body: `args.targets.map`, `new Set`.

SHA-256 of the source span: `6a43b17c189acc2072088e8e93524cb0e5353541dfd11db9369c391b6599c80b`.

### evaluation:578131

Calls written directly in this body: `args.targets.map`, `new Set`.

SHA-256 of the source span: `6a43b17c189acc2072088e8e93524cb0e5353541dfd11db9369c391b6599c80b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
