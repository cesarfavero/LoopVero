# `SandExperimentServiceCore.getFeatureGateProperty`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552694-552701](../../../../../../../reference/runtime/host-main.cjs#L552694-L552701) | `method` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552694-552701](../../../../../../../reference/runtime/host-main.cjs#L552694-L552701) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:552694

Chamadas escritas diretamente neste corpo: `new MutableGateProperty`, `this.checkFeatureGate`, `this.gateProperties.get`, `this.gateProperties.set`.

Alvos de atribuição ou incremento: `property`.

SHA-256 do trecho: `af5edc745a3559bc94abf5fa60dca913541957179a953c1ab281970e872fdfac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
