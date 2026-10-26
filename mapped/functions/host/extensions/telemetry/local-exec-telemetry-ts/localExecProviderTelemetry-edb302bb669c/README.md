# `localExecProviderTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/local-exec-telemetry.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/local-exec-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472120-472144](../../../../../../../reference/runtime/host-main.cjs#L472120-L472144) | `FunctionDeclaration` | não | `report` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472120-472144](../../../../../../../reference/runtime/host-main.cjs#L472120-L472144) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:472120

Chamadas escritas diretamente neste corpo: `Math.round`, `brandedId`, `logFields`.

SHA-256 do trecho: `1977d7c6b2e825c10d5b9b57966aee497e6725cab32ebf601ae231c583c2c1f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
