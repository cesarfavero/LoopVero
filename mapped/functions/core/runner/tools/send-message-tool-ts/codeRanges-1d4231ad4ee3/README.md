# `codeRanges`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:760697-760727](../../../../../../../reference/runtime/host-main.cjs#L760697-L760727) | `FunctionDeclaration` | não | `content` |
| [evaluation:551512-551542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551512-L551542) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760697-760727](../../../../../../../reference/runtime/host-main.cjs#L760697-L760727) | 6 | 3 | 0 | 1 | 0 | 0 |
| [evaluation:551512-551542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551512-L551542) | 6 | 3 | 0 | 1 | 0 | 0 |

### host:760697

Chamadas escritas diretamente neste corpo: `.matchAll`, `FENCE_LINE.exec`, `content.slice`, `content.split`, `fences.push`, `info2.trim`, `isFenceOpener`, `ranges.push`.

Alvos de atribuição ou incremento: `lineStart`, `open13`, `proseStart`.

SHA-256 do trecho: `45fb1c57b2fc0239962d511fb5f7096658f1b7df945138c9aa34792af1943f45`.

### evaluation:551512

Chamadas escritas diretamente neste corpo: `.matchAll`, `FENCE_LINE.exec`, `content.slice`, `content.split`, `fences.push`, `info2.trim`, `isFenceOpener`, `ranges.push`.

Alvos de atribuição ou incremento: `lineStart`, `open4`, `proseStart`.

SHA-256 do trecho: `bfffe91f7f9ad03b1fdc465023619f798a91a59d85617b1463a4abe145e2e936`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
