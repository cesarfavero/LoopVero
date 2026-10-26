# `describeParamIncompatibilities`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/model-catalog.ts` · [README do módulo](../../../../../modules/shared/agents/model-catalog-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567605-567636](../../../../../../reference/runtime/sand-eval-runner.cjs#L567605-L567636) | `FunctionDeclaration` | não | `entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567605-567636](../../../../../../reference/runtime/sand-eval-runner.cjs#L567605-L567636) | 4 | 4 | 0 | 2 | 0 | 0 |

### evaluation:567605

Chamadas escritas diretamente neste corpo: `coOccurs`, `new Set`, `notes.push`, `present2.entries`, `present2.push`, `present2.slice`, `seen.add`, `seen.has`.

SHA-256 do trecho: `3593ff185f850b565ce397e5a4ba38b10ea851d4e393ad13d55acce8dd6a6146`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
