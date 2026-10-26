# `readSendingAddresses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735326-735336](../../../../../../../reference/runtime/host-main.cjs#L735326-L735336) | `FunctionDeclaration` | yes | `execute, route, sender, sendingAddress` |
| [evaluation:540891-540901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540891-L540901) | `FunctionDeclaration` | yes | `execute, route, sender, sendingAddress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735326-735336](../../../../../../../reference/runtime/host-main.cjs#L735326-L735336) | 3 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:540891-540901](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540891-L540901) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:735326

Calls written directly in this body: `.filter`, `execute`, `sender.aliasRead.parseAliases`, `sendingAddress.toLowerCase`.

SHA-256 of the source span: `66a17c7830f7990cc6a890d09ecb3e3f886fb0958300f1401ad6a670e182469f`.

### evaluation:540891

Calls written directly in this body: `.filter`, `execute`, `sender.aliasRead.parseAliases`, `sendingAddress.toLowerCase`.

SHA-256 of the source span: `66a17c7830f7990cc6a890d09ecb3e3f886fb0958300f1401ad6a670e182469f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
