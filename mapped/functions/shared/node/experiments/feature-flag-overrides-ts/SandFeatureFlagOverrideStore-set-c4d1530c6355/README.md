# `SandFeatureFlagOverrideStore.set`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/feature-flag-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552211-552218](../../../../../../../reference/runtime/host-main.cjs#L552211-L552218) | `method` | não | `name18, value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552211-552218](../../../../../../../reference/runtime/host-main.cjs#L552211-L552218) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:552211

Chamadas escritas diretamente neste corpo: `this.clock.now`, `this.overrides.set`.

SHA-256 do trecho: `4d0c85afe93dd7388e6f4bb66f9f149f9d22785c6886d64b5d9a0771364d7c12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
