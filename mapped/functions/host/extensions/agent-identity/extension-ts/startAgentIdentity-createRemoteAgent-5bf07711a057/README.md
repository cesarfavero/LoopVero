# `startAgentIdentity/createRemoteAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496712-496741](../../../../../../../reference/runtime/host-main.cjs#L496712-L496741) | `ArrowFunctionExpression` | sim | `req` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496712-496741](../../../../../../../reference/runtime/host-main.cjs#L496712-L496741) | 5 | 0 | 1 | 5 | 1 | 1 |

### host:496712

Chamadas escritas diretamente neste corpo: `client.createGrokBotAgent`, `createCallerKindOf`, `createIntentKindOf`, `harnessKindOf`, `invariant`, `isConnectCode`, `isServerAgentIdTakenRefusal`, `isServerBoxHarnessCreateRefusal`, `isServerTemporalHarnessRefusal`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `5a204b75306e94b3b73680cc542f5aa2f1f77e17a8c1ee6e44896118a51789cd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
