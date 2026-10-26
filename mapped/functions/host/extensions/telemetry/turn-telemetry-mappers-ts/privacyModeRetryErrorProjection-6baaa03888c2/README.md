# `privacyModeRetryErrorProjection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/turn-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/turn-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472404-472413](../../../../../../../reference/runtime/host-main.cjs#L472404-L472413) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472404-472413](../../../../../../../reference/runtime/host-main.cjs#L472404-L472413) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472404

Chamadas escritas diretamente neste corpo: `brandLiteralEnum`, `brandedConnectCode`, `sandErrorTags`, `sandErrorWireCode`.

SHA-256 do trecho: `19421ff7d2152043fe20d270d85aae3e27299cdd2faaa8813f37baff0dc0aac1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
