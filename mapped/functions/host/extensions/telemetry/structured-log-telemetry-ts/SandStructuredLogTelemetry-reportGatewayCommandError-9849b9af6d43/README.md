# `SandStructuredLogTelemetry.reportGatewayCommandError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/structured-log-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/structured-log-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473395-473397](../../../../../../../reference/runtime/host-main.cjs#L473395-L473397) | `method` | não | `level, metadata2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473395-473397](../../../../../../../reference/runtime/host-main.cjs#L473395-L473397) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:473395

Chamadas escritas diretamente neste corpo: `this.enqueue`.

SHA-256 do trecho: `57912f2ec32a5c1e175d4c32a8e2261dffd9c4fcb5420972ec611ebc386b656b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
