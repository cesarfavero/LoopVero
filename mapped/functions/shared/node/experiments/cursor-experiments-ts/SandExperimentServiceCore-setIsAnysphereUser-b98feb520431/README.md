# `SandExperimentServiceCore.setIsAnysphereUser`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552749-552762](../../../../../../../reference/runtime/host-main.cjs#L552749-L552762) | `method` | não | `isAnysphereUser` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552749-552762](../../../../../../../reference/runtime/host-main.cjs#L552749-L552762) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:552749

Chamadas escritas diretamente neste corpo: `this.canUseFeatureFlagOverrides`, `this.experimentOverrideStore.clearAll`, `this.overrideStore.clearAll`, `this.overrideStore.hydrateFromDisk`, `this.refreshSnapshot`.

Alvos de atribuição ou incremento: `this.isAnysphereUser`.

SHA-256 do trecho: `17b35cf6b5a737d90c5c8e068375142a9e0d7176bcec979f57afb6c9e4c78a38`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
