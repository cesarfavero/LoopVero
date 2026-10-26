# `queryTerms`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/bot-templates/search-bot-templates-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/bot-templates/search-bot-templates-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:770771-770777](../../../../../../../../reference/runtime/host-main.cjs#L770771-L770777) | `FunctionDeclaration` | não | `query2` |
| [evaluation:569866-569872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569866-L569872) | `FunctionDeclaration` | não | `query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770771-770777](../../../../../../../../reference/runtime/host-main.cjs#L770771-L770777) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569866-569872](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L569866-L569872) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770771

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 do trecho: `5ff2063c62a9fe2b80e29e360b586b166d7495c4332b5b7e474d67d9a0b9a6b4`.

### evaluation:569866

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 do trecho: `5ff2063c62a9fe2b80e29e360b586b166d7495c4332b5b7e474d67d9a0b9a6b4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
