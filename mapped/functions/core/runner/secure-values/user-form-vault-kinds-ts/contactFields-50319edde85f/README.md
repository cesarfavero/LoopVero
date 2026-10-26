# `contactFields`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/secure-values/user-form-vault-kinds.ts` · [README do módulo](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:724751-724770](../../../../../../../reference/runtime/host-main.cjs#L724751-L724770) | `FunctionDeclaration` | não | `parts, prefill` |
| [evaluation:560310-560329](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560310-L560329) | `FunctionDeclaration` | não | `parts, prefill` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724751-724770](../../../../../../../reference/runtime/host-main.cjs#L724751-L724770) | 2 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:560310-560329](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560310-L560329) | 2 | 1 | 0 | 1 | 1 | 0 |

### host:724751

Chamadas escritas diretamente neste corpo: `.flatMap`, `JSON.stringify`, `Object.entries`, `checkPrefillKeys`, `isVaultContactFormFieldId`, `new SandToolInputError`, `new Set`, `parts.flatMap`, `vaultContactFormFields`, `vaultContactFormValueProblem`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `fd96a1bf50f153a759a3a6f561b9738266b477c68dd66b51d29d0e830112f44e`.

### evaluation:560310

Chamadas escritas diretamente neste corpo: `.flatMap`, `JSON.stringify`, `Object.entries`, `checkPrefillKeys`, `isVaultContactFormFieldId`, `new SandToolInputError`, `new Set`, `parts.flatMap`, `vaultContactFormFields`, `vaultContactFormValueProblem`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `fd96a1bf50f153a759a3a6f561b9738266b477c68dd66b51d29d0e830112f44e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
