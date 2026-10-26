# `SandExperimentServiceCore.clearFeatureFlagOverride`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552776-552781](../../../../../../../reference/runtime/host-main.cjs#L552776-L552781) | `method` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552776-552781](../../../../../../../reference/runtime/host-main.cjs#L552776-L552781) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:552776

Chamadas escritas diretamente neste corpo: `this.canUseFeatureFlagOverrides`, `this.overrideStore.clear`, `this.persistAndBroadcastOverrides`.

SHA-256 do trecho: `95af5674d83ec3a5617d81a810d5c09a40cc0a8cb3f858dfdd1d808e67b5dd2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
