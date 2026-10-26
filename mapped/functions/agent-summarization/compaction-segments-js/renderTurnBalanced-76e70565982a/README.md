# `renderTurnBalanced`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617026-617028](../../../../../reference/runtime/host-main.cjs#L617026-L617028) | `FunctionDeclaration` | não | `turn, index` |
| [evaluation:285566-285568](../../../../../reference/runtime/sand-eval-runner.cjs#L285566-L285568) | `FunctionDeclaration` | não | `turn, index` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617026-617028](../../../../../reference/runtime/host-main.cjs#L617026-L617028) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:285566-285568](../../../../../reference/runtime/sand-eval-runner.cjs#L285566-L285568) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:617026

Chamadas escritas diretamente neste corpo: `renderTurnParts`.

SHA-256 do trecho: `a0e269d463e06e3b91151ee6266df62c4c84c19ff17661661e54a486c90db68f`.

### evaluation:285566

Chamadas escritas diretamente neste corpo: `renderTurnParts`.

SHA-256 do trecho: `a0e269d463e06e3b91151ee6266df62c4c84c19ff17661661e54a486c90db68f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
