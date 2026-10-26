# `SandExperimentOverrideStore.setParam`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/experiment-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/experiment-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552049-552057](../../../../../../../reference/runtime/host-main.cjs#L552049-L552057) | `method` | não | `{     experiment,     param,     value   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552049-552057](../../../../../../../reference/runtime/host-main.cjs#L552049-L552057) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:552049

Chamadas escritas diretamente neste corpo: `this.isExperimentName`, `this.overrides.get`, `this.overrides.set`.

SHA-256 do trecho: `b5cc7f3481d4aded2154983fc4cb904c48cd97f6ca86b4d78cd907033789ec62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
