# `SandFeatureFlagOverrideStore.activeRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/feature-flag-overrides.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/feature-flag-overrides-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:552201-552207](../../../../../../../reference/runtime/host-main.cjs#L552201-L552207) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552201-552207](../../../../../../../reference/runtime/host-main.cjs#L552201-L552207) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:552201

Chamadas escritas diretamente neste corpo: `this.activeOverrides`.

Alvos de atribuição ou incremento: `record3[computed]`.

SHA-256 do trecho: `29f21fb062b9502d1d3cf78402143f6edf2d80abbb91093435b3fcb0755508ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
