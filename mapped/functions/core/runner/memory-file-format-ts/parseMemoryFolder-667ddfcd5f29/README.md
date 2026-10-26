# `parseMemoryFolder`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/memory-file-format.ts` · [README do módulo](../../../../../modules/core/runner/memory-file-format-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536586-536597](../../../../../../reference/runtime/sand-eval-runner.cjs#L536586-L536597) | `FunctionDeclaration` | não | `files, memoryDir` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536586-536597](../../../../../../reference/runtime/sand-eval-runner.cjs#L536586-L536597) | 0 | 2 | 0 | 1 | 0 | 0 |

### evaluation:536586

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `files.logs.get`, `files.logs.keys`, `log5.push`, `parseMemoryFacts`.

SHA-256 do trecho: `e40dd562cee3a29b686e64f660d8251a7fc3906c1442ec87273553fb34f478c6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
