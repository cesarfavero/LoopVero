# `deviceLocalToolParameters`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/device-local-tool.ts` · [Module README](../../../../../modules/core/device-local-tools/device-local-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758417-758422](../../../../../../reference/runtime/host-main.cjs#L758417-L758422) | `ArrowFunctionExpression` | no | `shape2` |
| [evaluation:548577-548582](../../../../../../reference/runtime/sand-eval-runner.cjs#L548577-L548582) | `ArrowFunctionExpression` | no | `shape2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758417-758422](../../../../../../reference/runtime/host-main.cjs#L758417-L758422) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:758417 uses an implicit arrow-function return.
| [evaluation:548577-548582](../../../../../../reference/runtime/sand-eval-runner.cjs#L548577-L548582) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:548577 uses an implicit arrow-function return.

### host:758417

Calls written directly in this body: `.describe`, `.optional`, `object`, `string2`.

SHA-256 of the source span: `4a498d4cb0f6c11951b246d96f7bfed9885128a266a40ef6991d48858b8557b4`.

### evaluation:548577

Calls written directly in this body: `.describe`, `.optional`, `object`, `string2`.

SHA-256 of the source span: `4a498d4cb0f6c11951b246d96f7bfed9885128a266a40ef6991d48858b8557b4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
