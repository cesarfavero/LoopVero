# `SandExperimentServiceCore.checkGate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552923-552927](../../../../../../../reference/runtime/host-main.cjs#L552923-L552927) | `method` | sim | `name18, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552923-552927](../../../../../../../reference/runtime/host-main.cjs#L552923-L552927) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:552923

Chamadas escritas diretamente neste corpo: `this.checkFeatureGate`, `this.whenReady`.

SHA-256 do trecho: `890470505d7d0905f2c78a943b751663c7830a99a9fbb91005d72e07d012e047`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
