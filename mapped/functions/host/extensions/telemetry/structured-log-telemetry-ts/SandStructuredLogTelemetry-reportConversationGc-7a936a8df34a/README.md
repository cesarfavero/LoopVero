# `SandStructuredLogTelemetry.reportConversationGc`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473194-473197](../../../../../../../reference/runtime/host-main.cjs#L473194-L473197) | `method` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473194-473197](../../../../../../../reference/runtime/host-main.cjs#L473194-L473197) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473194

Chamadas escritas diretamente neste corpo: `conversationGcTelemetry`, `this.enqueue`.

SHA-256 do trecho: `ed773f22e8f295bad3fe323cf5b26715423b99eede8b94c0ba481be3c794e4bc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
