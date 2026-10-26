# `stripOneLeadingNote`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491236-491249](../../../../../../reference/runtime/host-main.cjs#L491236-L491249) | `FunctionDeclaration` | não | `body` |
| [evaluation:526154-526167](../../../../../../reference/runtime/sand-eval-runner.cjs#L526154-L526167) | `FunctionDeclaration` | não | `body` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491236-491249](../../../../../../reference/runtime/host-main.cjs#L491236-L491249) | 6 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:526154-526167](../../../../../../reference/runtime/sand-eval-runner.cjs#L526154-L526167) | 6 | 0 | 0 | 5 | 0 | 0 |

### host:491236

Chamadas escritas diretamente neste corpo: `.trimEnd`, `.trimStart`, `SINGLE_LINE_NOTE_RES.some`, `body.indexOf`, `body.match`, `body.slice`, `firstLine.startsWith`.

SHA-256 do trecho: `56f2932742ebb0fe5432a39e5dc8aafc59cacd74d56d4caecced0f5e156303cf`.

### evaluation:526154

Chamadas escritas diretamente neste corpo: `.trimEnd`, `.trimStart`, `SINGLE_LINE_NOTE_RES.some`, `body.indexOf`, `body.match`, `body.slice`, `firstLine.startsWith`.

SHA-256 do trecho: `56f2932742ebb0fe5432a39e5dc8aafc59cacd74d56d4caecced0f5e156303cf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
