# `start`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541681-541732](../../../../../../../reference/runtime/host-main.cjs#L541681-L541732) | `ArrowFunctionExpression` | não | `context2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541681-541732](../../../../../../../reference/runtime/host-main.cjs#L541681-L541732) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:541681

Chamadas escritas diretamente neste corpo: `context2.onStop`, `createCodebaseTelemetryService`, `createDeadlinePolicy`, `createRetryPolicy`, `createSandCodebaseTelemetryLogger`.

SHA-256 do trecho: `b430257875f56b05ae8d897fe0592b256079076b04b9157bc813d614beade282`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
