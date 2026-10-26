# `teamsChannelThreadOfSessionId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/teams-session-id.ts` · [README do módulo](../../../../../modules/shared/channels/teams-session-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:538214-538222](../../../../../../reference/runtime/sand-eval-runner.cjs#L538214-L538222) | `FunctionDeclaration` | não | `sessionId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:538214-538222](../../../../../../reference/runtime/sand-eval-runner.cjs#L538214-L538222) | 3 | 0 | 0 | 4 | 0 | 0 |

### evaluation:538214

Chamadas escritas diretamente neste corpo: `TEAMS_MESSAGE_ID_PATTERN.test`, `rest.indexOf`, `rest.slice`, `sessionId.slice`, `sessionId.startsWith`.

SHA-256 do trecho: `37cf4897b05a46325beaa160cc63840b7630c6905ea5177da43c996b21629959`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
