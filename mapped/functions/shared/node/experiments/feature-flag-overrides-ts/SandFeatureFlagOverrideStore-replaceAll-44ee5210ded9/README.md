# `SandFeatureFlagOverrideStore.replaceAll`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/feature-flag-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552235-552242](../../../../../../../reference/runtime/host-main.cjs#L552235-L552242) | `method` | não | `overrides` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552235-552242](../../../../../../../reference/runtime/host-main.cjs#L552235-L552242) | 1 | 1 | 0 | 0 | 0 | 0 |

### host:552235

Chamadas escritas diretamente neste corpo: `Object.entries`, `this.clock.now`, `this.isFlagName`, `this.overrides.clear`, `this.overrides.set`.

SHA-256 do trecho: `4dc1a41d0d3f6695f5dcb1db7275ea481941f4aae77a78ac644a51a3ec7f6780`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
