# `createCodebaseTelemetryService/createAdapter`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/codebase-telemetry-service.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541002-541007](../../../../../../../reference/runtime/host-main.cjs#L541002-L541007) | `ArrowFunctionExpression` | sim | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541002-541007](../../../../../../../reference/runtime/host-main.cjs#L541002-L541007) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:541002

Chamadas escritas diretamente neste corpo: `adapter.terminalFailure.then`, `createAdapter`.

Alvos de atribuição ou incremento: `currentAdapter`.

SHA-256 do trecho: `d50e6180023c67f8c64e6f52003a0d580fb650c31986c61cb226925148055657`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
