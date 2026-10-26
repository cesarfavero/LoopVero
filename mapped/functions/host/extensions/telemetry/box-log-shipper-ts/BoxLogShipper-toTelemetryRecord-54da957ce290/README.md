# `BoxLogShipper.toTelemetryRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/box-log-shipper.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731061-731083](../../../../../../../reference/runtime/host-main.cjs#L731061-L731083) | `method` | não | `entry, segment` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731061-731083](../../../../../../../reference/runtime/host-main.cjs#L731061-L731083) | 4 | 0 | 0 | 6 | 0 | 1 |

### host:731061

Chamadas escritas diretamente neste corpo: `JSON.parse`, `boxInfrastructureEventSchema.safeParse`, `this.countRejectedBoxTelemetryLine`.

Alvos de atribuição ou incremento: `value`.

SHA-256 do trecho: `3b6942bcc0ca6714018e82027d1563cf50322b99667c49af370c824f98c73381`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
