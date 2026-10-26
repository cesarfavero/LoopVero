# `boundedText2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/app-home.ts` · [Module README](../../../../../modules/core/ports/app-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770972-770972](../../../../../../reference/runtime/host-main.cjs#L770972-L770972) | `ArrowFunctionExpression` | no | `max` |
| [evaluation:570078-570078](../../../../../../reference/runtime/sand-eval-runner.cjs#L570078-L570078) | `ArrowFunctionExpression` | no | `max` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770972-770972](../../../../../../reference/runtime/host-main.cjs#L770972-L770972) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:770972 uses an implicit arrow-function return.
| [evaluation:570078-570078](../../../../../../reference/runtime/sand-eval-runner.cjs#L570078-L570078) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:570078 uses an implicit arrow-function return.

### host:770972

Calls written directly in this body: `.max`, `.min`, `.trim`, `external_exports2.string`.

SHA-256 of the source span: `2d3bbdfd0455c411e8a22438928e2096db6ad4bc232e07c6e2357bbd81e92e19`.

### evaluation:570078

Calls written directly in this body: `.max`, `.min`, `.trim`, `external_exports3.string`.

SHA-256 of the source span: `e938b7fef46a62171dc0f4c306ecb486b336e4e48008f231f1af4f77bb2b6c7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
