# `createPressureCpuProfiler/knobs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731844-731860](../../../../../../../reference/runtime/host-main.cjs#L731844-L731860) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731844-731860](../../../../../../../reference/runtime/host-main.cjs#L731844-L731860) | 0 | 0 | 0 | 1 | 0 | 1 |

### host:731844

Chamadas escritas diretamente neste corpo: `Math.max`, `options2.overrides`.

Alvos de atribuição ou incremento: `live`.

SHA-256 do trecho: `508e1215a2f3a58826943d230180cdd250b1c94287c7f8872e423fc31c04c388`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
