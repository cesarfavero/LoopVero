# `classifyGatewayCommandError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-command-error.ts` · [README do módulo](../../../../modules/host/gateway-command-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:489566-489591](../../../../../reference/runtime/host-main.cjs#L489566-L489591) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489566-489591](../../../../../reference/runtime/host-main.cjs#L489566-L489591) | 7 | 0 | 0 | 7 | 0 | 0 |

### host:489566

Chamadas escritas diretamente neste corpo: `NETWORK_ERRNOS.has`, `findSystemErrno`, `hasTimeoutName`.

SHA-256 do trecho: `a3bd99e2246f67c7f886222f8307e8dc1da1efe87a8241d8b5b53d58c462a328`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
