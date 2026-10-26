# `createSendTraceSampler`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/send-trace-sampler.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/send-trace-sampler-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731567-731569](../../../../../../../reference/runtime/host-main.cjs#L731567-L731569) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731567-731569](../../../../../../../reference/runtime/host-main.cjs#L731567-L731569) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:731567

Chamadas escritas diretamente neste corpo: `new import_sdk_trace_node2.AlwaysOffSampler`, `new import_sdk_trace_node2.ParentBasedSampler`.

SHA-256 do trecho: `3584182e493190c8dcfbd401db2e41c7b7486e07e7769c3d73f659edff48349d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
