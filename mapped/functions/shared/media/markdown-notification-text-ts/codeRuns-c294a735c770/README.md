# `codeRuns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/markdown-notification-text.ts` · [README do módulo](../../../../../modules/shared/media/markdown-notification-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:722218-722241](../../../../../../reference/runtime/host-main.cjs#L722218-L722241) | `FunctionDeclaration` | não | `source, cut` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722218-722241](../../../../../../reference/runtime/host-main.cjs#L722218-L722241) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:722218

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `codeSpanRanges`, `fencedBlockRanges`, `fences.map`, `indentedCodeRuns`, `monotonicRangeProbe`, `source.lastIndexOf`, `source.matchAll`.

SHA-256 do trecho: `522208931e82120efa31ba6d9beac99571169aee35012771b527f4b3749c841e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
