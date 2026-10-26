# `codePoints`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `shared/transcript/card-text.ts` · [README do módulo](../../../../../modules/shared/transcript/card-text-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706889-706895](../../../../../../reference/runtime/host-main.cjs#L706889-L706895) | `FunctionDeclaration` | não | `text3, pattern` |
| [evaluation:480986-480992](../../../../../../reference/runtime/sand-eval-runner.cjs#L480986-L480992) | `FunctionDeclaration` | não | `text3, pattern` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706889-706895](../../../../../../reference/runtime/host-main.cjs#L706889-L706895) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480986-480992](../../../../../../reference/runtime/sand-eval-runner.cjs#L480986-L480992) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:706889

Chamadas escritas diretamente neste corpo: `Array.from`, `new Set`, `text3.matchAll`.

SHA-256 do trecho: `e093ce84de9d4d6718676765490ee2d36f93e0f3a78ac21cc35b4e2caa38f5fd`.

### evaluation:480986

Chamadas escritas diretamente neste corpo: `Array.from`, `new Set`, `text3.matchAll`.

SHA-256 do trecho: `e093ce84de9d4d6718676765490ee2d36f93e0f3a78ac21cc35b4e2caa38f5fd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
