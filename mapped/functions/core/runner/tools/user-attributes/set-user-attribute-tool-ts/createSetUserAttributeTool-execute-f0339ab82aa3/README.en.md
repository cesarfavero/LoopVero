# `createSetUserAttributeTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-attributes/set-user-attribute-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/user-attributes/set-user-attribute-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771513-771524](../../../../../../../../reference/runtime/host-main.cjs#L771513-L771524) | `ArrowFunctionExpression` | yes | `ctx, write4, d` |
| [evaluation:570746-570757](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570746-L570757) | `ArrowFunctionExpression` | yes | `ctx, write2, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771513-771524](../../../../../../../../reference/runtime/host-main.cjs#L771513-L771524) | 0 | 0 | 1 | 2 | 0 | 1 |
| [evaluation:570746-570757](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570746-L570757) | 0 | 0 | 1 | 2 | 0 | 1 |

### host:771513

Calls written directly in this body: `attributeSets.increment`, `d.requestSource`, `d.userAttributes.set`, `errorLogTag`, `logger122.warn`.

SHA-256 of the source span: `0b4eab138b3a1e3f4a85a647624592fc279e29deddeefe5f2d1849218cb94814`.

### evaluation:570746

Calls written directly in this body: `attributeSets.increment`, `d.requestSource`, `d.userAttributes.set`, `errorLogTag`, `logger95.warn`.

SHA-256 of the source span: `84392d65a447e799e9e52d1333aac4ea3f5f939ab57724f2236ce750bb28fbbf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
