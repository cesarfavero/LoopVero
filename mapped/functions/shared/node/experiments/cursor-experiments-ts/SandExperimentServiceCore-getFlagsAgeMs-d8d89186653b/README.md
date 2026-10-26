# `SandExperimentServiceCore.getFlagsAgeMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552743-552745](../../../../../../../reference/runtime/host-main.cjs#L552743-L552745) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552743-552745](../../../../../../../reference/runtime/host-main.cjs#L552743-L552745) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552743

Chamadas escritas diretamente neste corpo: `Math.max`, `this.clock.now`.

SHA-256 do trecho: `bac7d612d32ebf731517ef86fa8da228c34c43026af9abdee73609682240dbfe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
