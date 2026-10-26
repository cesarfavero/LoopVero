# `shoppingLinkInText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/shopping-card.ts` · [README do módulo](../../../../../modules/shared/transcript/shopping-card-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:707748-707763](../../../../../../reference/runtime/host-main.cjs#L707748-L707763) | `FunctionDeclaration` | não | `text3, card` |
| [evaluation:481870-481885](../../../../../../reference/runtime/sand-eval-runner.cjs#L481870-L481885) | `FunctionDeclaration` | não | `text3, card` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:707748-707763](../../../../../../reference/runtime/host-main.cjs#L707748-L707763) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:481870-481885](../../../../../../reference/runtime/sand-eval-runner.cjs#L481870-L481885) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:707748

Chamadas escritas diretamente neste corpo: `Array.from`, `card.products.flatMap`, `links.find`, `new Set`, `text3.matchAll`.

SHA-256 do trecho: `7bc234c6dfb193fbd62ae8c77d02eaf2b3a265fe4526f4567ad97415980704f6`.

### evaluation:481870

Chamadas escritas diretamente neste corpo: `Array.from`, `card.products.flatMap`, `links.find`, `new Set`, `text3.matchAll`.

SHA-256 do trecho: `7bc234c6dfb193fbd62ae8c77d02eaf2b3a265fe4526f4567ad97415980704f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
