# `containsSequence`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/connector-doc-registry.ts` · [README do módulo](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:573716-573718](../../../../../../reference/runtime/sand-eval-runner.cjs#L573716-L573718) | `FunctionDeclaration` | não | `words, sequence` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573716-573718](../../../../../../reference/runtime/sand-eval-runner.cjs#L573716-L573718) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:573716

Chamadas escritas diretamente neste corpo: `words.some`.

SHA-256 do trecho: `9fde6a43af8962f7d58e747792759c7d63b5961ec56a9881ce332a1f5f236fa4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
