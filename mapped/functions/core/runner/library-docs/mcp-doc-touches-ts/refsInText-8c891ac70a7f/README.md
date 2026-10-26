# `refsInText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/library-docs/mcp-doc-touches.ts` · [README do módulo](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:573899-573906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573899-L573906) | `FunctionDeclaration` | não | `text3, resolver` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573899-573906](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573899-L573906) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:573899

Chamadas escritas diretamente neste corpo: `match2[computed].replace`, `refs.push`, `resolver.url`, `text3.matchAll`.

SHA-256 do trecho: `9dfbb0d961a1850e7bb5cbec9a1bde374b4ca36c0b62e77d9233ca407082ff51`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
