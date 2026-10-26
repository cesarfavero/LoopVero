# `createPressureCpuProfiler/finishCapture`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731872-731891](../../../../../../../reference/runtime/host-main.cjs#L731872-L731891) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731872-731891](../../../../../../../reference/runtime/host-main.cjs#L731872-L731891) | 1 | 0 | 1 | 1 | 0 | 1 |

### host:731872

Chamadas escritas diretamente neste corpo: `backend.stop`, `errorLogTag`, `knobs`, `now`, `options2.onCaptured`, `options2.reportHostLog`, `pruneOldProfiles`.

Alvos de atribuição ou incremento: `state`.

SHA-256 do trecho: `66ee6bfa36794aadc94379ab1dc184b53b6cc74147fc0a3038e9d0d07cf59a37`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
