# `localExecFailedTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/local-exec-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/local-exec-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472106-472119](../../../../../../../reference/runtime/host-main.cjs#L472106-L472119) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472106-472119](../../../../../../../reference/runtime/host-main.cjs#L472106-L472119) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:472106

Chamadas escritas diretamente neste corpo: `brandedId`, `logFields`.

SHA-256 do trecho: `985798af33b5cf3f554a82648ea70db2a5845a62ee2978a6f69e1f4cd896aab9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
