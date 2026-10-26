# `TokenRefreshingSpanExporter.export`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-tracing.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-tracing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731624-731640](../../../../../../../reference/runtime/host-main.cjs#L731624-L731640) | `method` | não | `spans, resultCallback` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731624-731640](../../../../../../../reference/runtime/host-main.cjs#L731624-L731640) | 1 | 0 | 0 | 1 | 0 | 2 |

### host:731624

Chamadas escritas diretamente neste corpo: `delegate.export`, `resultCallback`, `this.resolveDelegate`.

Alvos de atribuição ou incremento: `delegate`.

SHA-256 do trecho: `59c5bedbed233956f419168ab0ed8328d2771fadb5d752d1e074ae4b08c135fe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
