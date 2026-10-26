# `webauthnProxyTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/webauthn-proxy-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/webauthn-proxy-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472579-472595](../../../../../../../reference/runtime/host-main.cjs#L472579-L472595) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472579-472595](../../../../../../../reference/runtime/host-main.cjs#L472579-L472595) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472579

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedId`, `causeError`, `logFields`, `sandErrorTags`.

SHA-256 do trecho: `a89be960950eb2a1e27d521ea4a959680e9eaecee8f2a99c657f4ff193e82382`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
