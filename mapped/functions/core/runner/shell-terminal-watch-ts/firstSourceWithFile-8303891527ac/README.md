# `firstSourceWithFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/shell-terminal-watch.ts` · [README do módulo](../../../../../modules/core/runner/shell-terminal-watch-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:533354-533366](../../../../../../reference/runtime/sand-eval-runner.cjs#L533354-L533366) | `FunctionDeclaration` | sim | `sources` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:533354-533366](../../../../../../reference/runtime/sand-eval-runner.cjs#L533354-L533366) | 2 | 1 | 1 | 2 | 1 | 1 |

### evaluation:533354

Chamadas escritas diretamente neste corpo: `source`.

Alvos de atribuição ou incremento: `failure3`.

Alvos de lançamento explícito: `failure3.error`.

SHA-256 do trecho: `84ca5840c2d11be67f3c23f6100cf9e1cb4292ad1a9e5b11da3807581546bf65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
