# `retrySqliteBusy`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/storage/sqlite-busy.ts` · [README do módulo](../../../../../modules/host/storage/sqlite-busy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:480296-480317](../../../../../../reference/runtime/host-main.cjs#L480296-L480317) | `FunctionDeclaration` | sim | `operation, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:480296-480317](../../../../../../reference/runtime/host-main.cjs#L480296-L480317) | 2 | 1 | 2 | 1 | 2 | 1 |

### host:480296

Chamadas escritas diretamente neste corpo: `Math.max`, `backoff2.schedule`, `createRetryPolicy`, `isSqliteBusyError`, `operation`.

Alvos de atribuição ou incremento: `attempt`, `lastError`.

Alvos de lançamento explícito: `error64`, `lastError`.

SHA-256 do trecho: `cfe89cc16be2022d3fce3dd806aa145b48a73e7d4d912d34b9ed8d1d94275176`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
