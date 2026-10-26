# `closeLink`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732546-732558](../../../../../../../reference/runtime/host-main.cjs#L732546-L732558) | `FunctionDeclaration` | não | `reading` |
| [evaluation:539558-539570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539558-L539570) | `FunctionDeclaration` | não | `reading` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732546-732558](../../../../../../../reference/runtime/host-main.cjs#L732546-L732558) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539558-539570](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539558-L539570) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:732546

Chamadas escritas diretamente neste corpo: `LINK_LIKE_TEXT.test`, `reading.targets.push`, `reading.words.push`, `reading.words.slice`, `sameWords`, `showsTarget`, `wordsOf3`.

Alvos de atribuição ou incremento: `reading.link`, `reading.misleadingLink`.

SHA-256 do trecho: `880614130abb9203015773b22d361d6128375c77949ced9f24df12f5e1e377ba`.

### evaluation:539558

Chamadas escritas diretamente neste corpo: `LINK_LIKE_TEXT.test`, `reading.targets.push`, `reading.words.push`, `reading.words.slice`, `sameWords`, `showsTarget`, `wordsOf2`.

Alvos de atribuição ou incremento: `reading.link`, `reading.misleadingLink`.

SHA-256 do trecho: `87ca050c25e5ddaeb7849660162b5df4281e4eb56c4821e752e607f1719f7191`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
