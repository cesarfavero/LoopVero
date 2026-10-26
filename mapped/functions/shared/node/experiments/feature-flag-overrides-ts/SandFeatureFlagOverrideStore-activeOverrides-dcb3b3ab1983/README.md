# `SandFeatureFlagOverrideStore.activeOverrides`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/feature-flag-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552193-552200](../../../../../../../reference/runtime/host-main.cjs#L552193-L552200) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552193-552200](../../../../../../../reference/runtime/host-main.cjs#L552193-L552200) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:552193

Chamadas escritas diretamente neste corpo: `new Map`, `result.set`, `this.clock.now`.

SHA-256 do trecho: `ef8ea3bb0e83051f9c07523b7a753dffda1735c228f151836c1f14ce536da9df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
