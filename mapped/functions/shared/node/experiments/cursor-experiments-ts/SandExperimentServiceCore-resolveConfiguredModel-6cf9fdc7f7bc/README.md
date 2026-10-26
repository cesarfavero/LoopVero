# `SandExperimentServiceCore.resolveConfiguredModel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/cursor-experiments.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553205-553215](../../../../../../../reference/runtime/host-main.cjs#L553205-L553215) | `method` | não | `configName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553205-553215](../../../../../../../reference/runtime/host-main.cjs#L553205-L553215) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:553205

Chamadas escritas diretamente neste corpo: `Object.hasOwn`, `resolveSandDefaultModelConfig`, `this.getDynamicConfig`, `this.hasHydratedStatsigUserId`, `this.reportModelConfigRejection`.

SHA-256 do trecho: `a7df14163b53281611bea26b95310a9d2ecf8a1a7f3d6e1f8faf59ba126dc521`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
