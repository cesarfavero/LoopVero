# `vaultCardFormFieldsWithDefaults`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/user-form-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726422-726443](../../../../../../../reference/runtime/host-main.cjs#L726422-L726443) | `FunctionDeclaration` | não | `args` |
| [evaluation:561037-561058](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561037-L561058) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726422-726443](../../../../../../../reference/runtime/host-main.cjs#L726422-L726443) | 3 | 1 | 0 | 1 | 1 | 0 |
| [evaluation:561037-561058](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561037-L561058) | 3 | 1 | 0 | 1 | 1 | 0 |

### host:726422

Chamadas escritas diretamente neste corpo: `VAULT_CARD_USER_FORM_FIELDS.map`, `canonicalVaultCountryCode`, `defaults2.set`, `new Map`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `fa132eb480df1d1ca8bd54dddb1d3f213fa0f63cdcfee45442d006f4c324c688`.

### evaluation:561037

Chamadas escritas diretamente neste corpo: `VAULT_CARD_USER_FORM_FIELDS.map`, `canonicalVaultCountryCode`, `defaults2.set`, `new Map`, `new SandToolInputError`.

Alvos de lançamento explícito: `SandToolInputError`.

SHA-256 do trecho: `fa132eb480df1d1ca8bd54dddb1d3f213fa0f63cdcfee45442d006f4c324c688`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
