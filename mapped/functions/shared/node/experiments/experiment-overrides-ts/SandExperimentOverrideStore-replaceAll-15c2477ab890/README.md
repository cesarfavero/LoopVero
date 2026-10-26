# `SandExperimentOverrideStore.replaceAll`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/experiment-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/experiment-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552078-552083](../../../../../../../reference/runtime/host-main.cjs#L552078-L552083) | `method` | não | `overrides` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552078-552083](../../../../../../../reference/runtime/host-main.cjs#L552078-L552083) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:552078

Chamadas escritas diretamente neste corpo: `Object.entries`, `this.isExperimentName`, `this.overrides.clear`, `this.overrides.set`.

SHA-256 do trecho: `d0edef55b03cdbb63fbe6c93dfb344f78baff9b449bf3db190b56450663eb3b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
