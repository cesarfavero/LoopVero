# `createFileTransferTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777740-777748](../../../../../../../reference/runtime/host-main.cjs#L777740-L777748) | `ArrowFunctionExpression` | no | `ctx, args, deps` |
| [host:777756-777764](../../../../../../../reference/runtime/host-main.cjs#L777756-L777764) | `ArrowFunctionExpression` | no | `ctx, args, deps` |
| [evaluation:577435-577443](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577435-L577443) | `ArrowFunctionExpression` | no | `ctx, args, deps` |
| [evaluation:577451-577459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577451-L577459) | `ArrowFunctionExpression` | no | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777740-777748](../../../../../../../reference/runtime/host-main.cjs#L777740-L777748) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:777740 uses an implicit arrow-function return.
| [host:777756-777764](../../../../../../../reference/runtime/host-main.cjs#L777756-L777764) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:777756 uses an implicit arrow-function return.
| [evaluation:577435-577443](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577435-L577443) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577435 uses an implicit arrow-function return.
| [evaluation:577451-577459](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577451-L577459) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:577451 uses an implicit arrow-function return.

### host:777740

Calls written directly in this body: `copyFileToBox`, `resolveMachineIdArgument`.

SHA-256 of the source span: `f52432cb50e8c76fa72969686f432cf3e20e8bc219f37d0fe6672aafd5eb161d`.

### host:777756

Calls written directly in this body: `copyFileFromBox`, `resolveMachineIdArgument`.

SHA-256 of the source span: `e1b3c8ca0437ddc5d2c634487459ededc58f3cbc2e7ddb5316fe8a812b7836a6`.

### evaluation:577435

Calls written directly in this body: `copyFileToBox`, `resolveMachineIdArgument`.

SHA-256 of the source span: `f52432cb50e8c76fa72969686f432cf3e20e8bc219f37d0fe6672aafd5eb161d`.

### evaluation:577451

Calls written directly in this body: `copyFileFromBox`, `resolveMachineIdArgument`.

SHA-256 of the source span: `e1b3c8ca0437ddc5d2c634487459ededc58f3cbc2e7ddb5316fe8a812b7836a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
