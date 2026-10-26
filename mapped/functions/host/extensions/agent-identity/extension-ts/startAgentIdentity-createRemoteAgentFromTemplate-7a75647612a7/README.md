# `startAgentIdentity/createRemoteAgentFromTemplate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496743-496775](../../../../../../../reference/runtime/host-main.cjs#L496743-L496775) | `ArrowFunctionExpression` | sim | `{       shareId,       agentId,       expectedActiveVersion,       creatorContext,       language: language2     }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496743-496775](../../../../../../../reference/runtime/host-main.cjs#L496743-L496775) | 1 | 0 | 2 | 1 | 2 | 1 |

### host:496743

Chamadas escritas diretamente neste corpo: `client.createGrokBotAgentFromTemplate`, `invariant`, `isConnectCode`, `new BotTemplateImportAccessDeniedError`, `readTemplateSetup`.

Alvos de lançamento explícito: `BotTemplateImportAccessDeniedError`, `error64`.

SHA-256 do trecho: `2de1e961154c33f7315492170f4450be7c92b0fb5ffc9f03fc83412f7f367348`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
