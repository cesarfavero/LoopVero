# `initSandHostTracing`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-tracing.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731654-731721](../../../../../../../reference/runtime/host-main.cjs#L731654-L731721) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731654-731721](../../../../../../../reference/runtime/host-main.cjs#L731654-L731721) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:731654

Chamadas escritas diretamente neste corpo: `createSendTraceSampler`, `import_node_os32.default.hostname`, `import_node_os32.default.platform`, `new TokenRefreshingSpanExporter`, `new import_sdk_trace_node3.BatchSpanProcessor`, `new import_sdk_trace_node3.NodeTracerProvider`, `options2.backendUrl.replace`, `process.once`, `provider.register`.

Alvos de atribuição ou incremento: `hostTracing`, `initialized`.

SHA-256 do trecho: `481b7ed84ea349d28443eaa5acb53bb86202b3f30e9c129a3a2db9a1e4585bcd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
