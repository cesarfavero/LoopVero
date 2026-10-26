# `analyticsOnlyUnboundedConnectorDomain`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/connector-auth-telemetry.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455691-455696](../../../../../../reference/runtime/host-main.cjs#L455691-L455696) | `FunctionDeclaration` | não | `serverUrl` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455691-455696](../../../../../../reference/runtime/host-main.cjs#L455691-L455696) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:455691

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `URL.canParse`, `new URL`.

SHA-256 do trecho: `99072348e9f8aa87e42da843539cf15c3eb56ff8f4bbbed198e96ef82080908f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
