# `recordLibraryDocTouches`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/library-docs/library-doc-recorder.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/library-doc-recorder-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:774544-774562](../../../../../../../reference/runtime/host-main.cjs#L774544-L774562) | `FunctionDeclaration` | não | `ctx, deps, candidates, meta3` |
| [evaluation:574120-574138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574120-L574138) | `FunctionDeclaration` | não | `ctx, deps, candidates, meta3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774544-774562](../../../../../../../reference/runtime/host-main.cjs#L774544-L774562) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:574120-574138](../../../../../../../reference/runtime/sand-eval-runner.cjs#L574120-L574138) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:774544

Chamadas escritas diretamente neste corpo: `deps.recorder.record`, `turnAttributionFromContext`.

SHA-256 do trecho: `897c5ea8c0c34eb0acd274bf9ff55dfa0b6721948ce7f328fcdfe108e12d82bd`.

### evaluation:574120

Chamadas escritas diretamente neste corpo: `deps.recorder.record`, `turnAttributionFromContext`.

SHA-256 do trecho: `897c5ea8c0c34eb0acd274bf9ff55dfa0b6721948ce7f328fcdfe108e12d82bd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
