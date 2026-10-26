# `SandStructuredLogTelemetry.enqueue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473824-473826](../../../../../../../reference/runtime/host-main.cjs#L473824-L473826) | `method` | não | `level, message, metadata2, onSettled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473824-473826](../../../../../../../reference/runtime/host-main.cjs#L473824-L473826) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473824

Chamadas escritas diretamente neste corpo: `this.transport.enqueue`.

SHA-256 do trecho: `aac93f2347fc989b28f5eb86742b3dbd0e479ed8b64adc4f66f67f78c8d7241a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
