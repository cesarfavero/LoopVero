# `readTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-email-html.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732535-732545](../../../../../../../reference/runtime/host-main.cjs#L732535-L732545) | `FunctionDeclaration` | não | `reading, tag` |
| [evaluation:539547-539557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539547-L539557) | `FunctionDeclaration` | não | `reading, tag` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732535-732545](../../../../../../../reference/runtime/host-main.cjs#L732535-L732545) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539547-539557](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539547-L539557) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:732535

Chamadas escritas diretamente neste corpo: `.replace`, `closeLink`, `decodeEntities`, `tag.attributes.get`.

Alvos de atribuição ou incremento: `reading.link`.

SHA-256 do trecho: `beda02b190b6380876e381fe929098a725c811fbdaecb3ed67c946da1cfab83c`.

### evaluation:539547

Chamadas escritas diretamente neste corpo: `.replace`, `closeLink`, `decodeEntities`, `tag.attributes.get`.

Alvos de atribuição ou incremento: `reading.link`.

SHA-256 do trecho: `beda02b190b6380876e381fe929098a725c811fbdaecb3ed67c946da1cfab83c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
