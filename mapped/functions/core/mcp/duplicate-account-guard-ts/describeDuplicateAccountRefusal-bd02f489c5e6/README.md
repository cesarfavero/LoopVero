# `describeDuplicateAccountRefusal`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/duplicate-account-guard.ts` · [README do módulo](../../../../../modules/core/mcp/duplicate-account-guard-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779418-779422](../../../../../../reference/runtime/host-main.cjs#L779418-L779422) | `FunctionDeclaration` | não | `duplicates` |
| [evaluation:579591-579595](../../../../../../reference/runtime/sand-eval-runner.cjs#L579591-L579595) | `FunctionDeclaration` | não | `duplicates` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779418-779422](../../../../../../reference/runtime/host-main.cjs#L779418-L779422) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579591-579595](../../../../../../reference/runtime/sand-eval-runner.cjs#L579591-L579595) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779418

Chamadas escritas diretamente neste corpo: `.join`, `duplicates.accountKeys.find`, `duplicates.accountKeys.map`, `encodeMcpAccountLabelForListing`.

SHA-256 do trecho: `b62dbae0f78d644491957695cdeb6572cbce5422e0ed7dfcec806349032fe723`.

### evaluation:579591

Chamadas escritas diretamente neste corpo: `.join`, `duplicates.accountKeys.find`, `duplicates.accountKeys.map`, `encodeMcpAccountLabelForListing`.

SHA-256 do trecho: `b62dbae0f78d644491957695cdeb6572cbce5422e0ed7dfcec806349032fe723`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
