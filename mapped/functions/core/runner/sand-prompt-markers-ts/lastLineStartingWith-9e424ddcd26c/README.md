# `lastLineStartingWith`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491186-491195](../../../../../../reference/runtime/host-main.cjs#L491186-L491195) | `FunctionDeclaration` | não | `text3, prefix` |
| [evaluation:526104-526113](../../../../../../reference/runtime/sand-eval-runner.cjs#L526104-L526113) | `FunctionDeclaration` | não | `text3, prefix` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491186-491195](../../../../../../reference/runtime/host-main.cjs#L491186-L491195) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:526104-526113](../../../../../../reference/runtime/sand-eval-runner.cjs#L526104-L526113) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:491186

Chamadas escritas diretamente neste corpo: `text3.indexOf`, `text3.startsWith`.

Alvos de atribuição ou incremento: `found`, `lineStart`.

SHA-256 do trecho: `2a1bfdbed031364a78a6714fb2bdc3fd6b6d77ccf28304fa342130255ef3d214`.

### evaluation:526104

Chamadas escritas diretamente neste corpo: `text3.indexOf`, `text3.startsWith`.

Alvos de atribuição ou incremento: `found`, `lineStart`.

SHA-256 do trecho: `2a1bfdbed031364a78a6714fb2bdc3fd6b6d77ccf28304fa342130255ef3d214`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
