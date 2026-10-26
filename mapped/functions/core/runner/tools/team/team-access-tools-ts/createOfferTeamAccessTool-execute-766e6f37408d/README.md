# `createOfferTeamAccessTool/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/team/team-access-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/team/team-access-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:781646-781656](../../../../../../../../reference/runtime/host-main.cjs#L781646-L781656) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [host:781664-781670](../../../../../../../../reference/runtime/host-main.cjs#L781664-L781670) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:581993-582003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581993-L582003) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |
| [evaluation:582011-582017](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582011-L582017) | `ArrowFunctionExpression` | sim | `_ctx, args, d` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781646-781656](../../../../../../../../reference/runtime/host-main.cjs#L781646-L781656) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:781664-781670](../../../../../../../../reference/runtime/host-main.cjs#L781664-L781670) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:581993-582003](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L581993-L582003) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582011-582017](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582011-L582017) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:781646

Chamadas escritas diretamente neste corpo: `Date.now`, `d.onSendMessage`, `normalizeSendMessageTextContent`, `teamCopy.completeTurn`, `teamCopy.isOwnerOffDesktop`.

SHA-256 do trecho: `de52ad6062dda7e8e1ff8c26ead0d0ee3ec1aaba0d8d179a773bb5571a058186`.

### host:781664

Chamadas escritas diretamente neste corpo: `Date.now`, `d.onSendMessage`.

SHA-256 do trecho: `68efc98f4d4f2e136368348f6d8474c7ec9d7616fe07dec736d3a477d84d8a7e`.

### evaluation:581993

Chamadas escritas diretamente neste corpo: `Date.now`, `d.onSendMessage`, `normalizeSendMessageTextContent`, `teamCopy.completeTurn`, `teamCopy.isOwnerOffDesktop`.

SHA-256 do trecho: `de52ad6062dda7e8e1ff8c26ead0d0ee3ec1aaba0d8d179a773bb5571a058186`.

### evaluation:582011

Chamadas escritas diretamente neste corpo: `Date.now`, `d.onSendMessage`.

SHA-256 do trecho: `68efc98f4d4f2e136368348f6d8474c7ec9d7616fe07dec736d3a477d84d8a7e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
