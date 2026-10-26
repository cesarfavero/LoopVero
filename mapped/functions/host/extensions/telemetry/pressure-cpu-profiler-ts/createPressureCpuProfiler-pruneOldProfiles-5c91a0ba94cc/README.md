# `createPressureCpuProfiler/pruneOldProfiles`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/pressure-cpu-profiler.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/pressure-cpu-profiler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731866-731871](../../../../../../../reference/runtime/host-main.cjs#L731866-L731871) | `ArrowFunctionExpression` | não | `maxRetainedProfiles` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731866-731871](../../../../../../../reference/runtime/host-main.cjs#L731866-L731871) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:731866

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `Math.max`, `profiles.slice`.

SHA-256 do trecho: `0955830807b35ffaa17edefa4bf796c75ef48537c344cd6aa50f8b9e2a6f3968`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
