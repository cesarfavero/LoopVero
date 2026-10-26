# `SandFeatureFlagOverrideStore.setAllToBundledDefaults`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/feature-flag-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552225-552234](../../../../../../../reference/runtime/host-main.cjs#L552225-L552234) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552225-552234](../../../../../../../reference/runtime/host-main.cjs#L552225-L552234) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:552225

Chamadas escritas diretamente neste corpo: `Object.keys`, `this.clock.now`, `this.isFlagName`, `this.overrides.set`.

SHA-256 do trecho: `75e9d2499a2f3d876ac8da39259dbf14e0cb33ea54a320d4e40f18d988fb3e32`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
