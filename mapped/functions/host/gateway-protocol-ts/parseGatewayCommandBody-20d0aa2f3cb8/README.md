# `parseGatewayCommandBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-protocol.ts` · [README do módulo](../../../../modules/host/gateway-protocol-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489941-489956](../../../../../reference/runtime/host-main.cjs#L489941-L489956) | `FunctionDeclaration` | sim | `method, body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489941-489956](../../../../../reference/runtime/host-main.cjs#L489941-L489956) | 2 | 0 | 1 | 1 | 2 | 1 |

### host:489941

Chamadas escritas diretamente neste corpo: `JSON.parse`, `String`, `describeIssues`, `new SandGatewayRequestError`, `schema3[computed].validate`.

Alvos de atribuição ou incremento: `parsed2`.

Alvos de lançamento explícito: `SandGatewayRequestError`.

SHA-256 do trecho: `5b9044b723898f18c878bfb5838eb16c8cb5f93c59aa8a25b4977880a0ad2566`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
