# `rankWithRecall`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779519-779524](../../../../../../../../reference/runtime/host-main.cjs#L779519-L779524) | `FunctionDeclaration` | não | `plugins, query2` |
| [evaluation:579757-579762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579757-L579762) | `FunctionDeclaration` | não | `plugins, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779519-779524](../../../../../../../../reference/runtime/host-main.cjs#L779519-L779524) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579757-579762](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579757-L579762) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779519

Chamadas escritas diretamente neste corpo: `.sort`, `queryTerms2`, `rankByTerms`, `terms.some`, `withAliases`.

SHA-256 do trecho: `da128468c844ff011ded594b2043895f4bca4280831054ce75f76c82911354f5`.

### evaluation:579757

Chamadas escritas diretamente neste corpo: `.sort`, `queryTerms2`, `rankByTerms`, `terms.some`, `withAliases`.

SHA-256 do trecho: `c86415aeda2f266dff15e94f79d2a0e9a5e9d6ecce3e66716fb9649378cd1357`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
