# `preparedRenderCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760900-760909](../../../../../../../reference/runtime/host-main.cjs#L760900-L760909) | `FunctionDeclaration` | sim | `ctx, cards, entries` |
| [evaluation:551715-551724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551715-L551724) | `FunctionDeclaration` | sim | `ctx, cards, entries` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760900-760909](../../../../../../../reference/runtime/host-main.cjs#L760900-L760909) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:551715-551724](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551715-L551724) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:760900

Chamadas escritas diretamente neste corpo: `Promise.all`, `cards.items.map`, `entries.map`, `new Map`.

SHA-256 do trecho: `36c654c976e49e1012cacfeac7240e82d008fa53fc0a992d4bb0bddaeaa69134`.

### evaluation:551715

Chamadas escritas diretamente neste corpo: `Promise.all`, `cards.items.map`, `entries.map`, `new Map`.

SHA-256 do trecho: `36c654c976e49e1012cacfeac7240e82d008fa53fc0a992d4bb0bddaeaa69134`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
