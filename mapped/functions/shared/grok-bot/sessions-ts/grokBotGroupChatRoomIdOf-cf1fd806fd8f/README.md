# `grokBotGroupChatRoomIdOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/grok-bot/sessions.ts` · [README do módulo](../../../../../modules/shared/grok-bot/sessions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:490294-490296](../../../../../../reference/runtime/host-main.cjs#L490294-L490296) | `FunctionDeclaration` | não | `sessionId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490294-490296](../../../../../../reference/runtime/host-main.cjs#L490294-L490296) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:490294

Chamadas escritas diretamente neste corpo: `sessionId.slice`, `sessionId.startsWith`.

SHA-256 do trecho: `6f760f18a66af33e288fdd0fa27cd48ade76f489eed116f45fdf496ea7ed7f49`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
