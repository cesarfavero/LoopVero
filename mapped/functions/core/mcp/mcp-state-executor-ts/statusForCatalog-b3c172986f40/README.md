# `statusForCatalog`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-state-executor.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-state-executor-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693535-693537](../../../../../../reference/runtime/host-main.cjs#L693535-L693537) | `FunctionDeclaration` | não | `status` |
| [evaluation:584786-584788](../../../../../../reference/runtime/sand-eval-runner.cjs#L584786-L584788) | `FunctionDeclaration` | não | `status` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693535-693537](../../../../../../reference/runtime/host-main.cjs#L693535-L693537) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:584786-584788](../../../../../../reference/runtime/sand-eval-runner.cjs#L584786-L584788) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693535

Chamadas escritas diretamente neste corpo: `UNUSABLE_SERVER_STATUSES.has`.

SHA-256 do trecho: `967307c09728a56c0cb72ec77b0ac1c8b02f526f1d448e37a57d473c02a33513`.

### evaluation:584786

Chamadas escritas diretamente neste corpo: `UNUSABLE_SERVER_STATUSES.has`.

SHA-256 do trecho: `967307c09728a56c0cb72ec77b0ac1c8b02f526f1d448e37a57d473c02a33513`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
