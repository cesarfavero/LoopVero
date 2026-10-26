# `withChoiceSpelled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758587-758593](../../../../../../reference/runtime/host-main.cjs#L758587-L758593) | `FunctionDeclaration` | no | `args` |
| [evaluation:548747-548753](../../../../../../reference/runtime/sand-eval-runner.cjs#L548747-L548753) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758587-758593](../../../../../../reference/runtime/host-main.cjs#L758587-L758593) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:548747-548753](../../../../../../reference/runtime/sand-eval-runner.cjs#L548747-L548753) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:758587

Calls written directly in this body: `choiceNameOf`, `choiceSpelling.applied`, `isChoiceControl`, `reportShim`.

SHA-256 of the source span: `6a1ae61b95424d828abfb161e47702ef663da3ca0ac539d8004a28c3a0684022`.

### evaluation:548747

Calls written directly in this body: `choiceNameOf`, `choiceSpelling.applied`, `isChoiceControl`, `reportShim`.

SHA-256 of the source span: `6a1ae61b95424d828abfb161e47702ef663da3ca0ac539d8004a28c3a0684022`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
