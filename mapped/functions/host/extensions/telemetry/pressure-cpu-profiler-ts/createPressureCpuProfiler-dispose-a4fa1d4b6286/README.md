# `createPressureCpuProfiler/dispose`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731932-731939](../../../../../../../reference/runtime/host-main.cjs#L731932-L731939) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731932-731939](../../../../../../../reference/runtime/host-main.cjs#L731932-L731939) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:731932

Chamadas escritas diretamente neste corpo: `backend.dispose`.

Alvos de atribuição ou incremento: `disposed`, `state`.

SHA-256 do trecho: `83b09d3122abbee6b8c6bf8f2ce0c23ec85cc2e1e9517cc74b4a1dc4e007f6e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
