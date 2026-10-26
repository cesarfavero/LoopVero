# `resolveTls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-config.ts` · [README do módulo](../../../../modules/host/gateway-config-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:483858-483877](../../../../../reference/runtime/host-main.cjs#L483858-L483877) | `FunctionDeclaration` | não | `env` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483858-483877](../../../../../reference/runtime/host-main.cjs#L483858-L483877) | 2 | 0 | 0 | 2 | 2 | 1 |

### host:483858

Chamadas escritas diretamente neste corpo: `String`, `env.SAND_GATEWAY_TLS_CERT.trim`, `env.SAND_GATEWAY_TLS_KEY.trim`, `new SandGatewayConfigError`.

Alvos de lançamento explícito: `SandGatewayConfigError`.

SHA-256 do trecho: `63912f138b7adff6aa2208d9b648e6115f62d52a5745321abcb04f365e601ef8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
