# `writeResult`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/main.ts` · [README do módulo](../../../../modules/evaluation/main-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630749-630755](../../../../../reference/runtime/sand-eval-runner.cjs#L630749-L630755) | `FunctionDeclaration` | sim | `path33, result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630749-630755](../../../../../reference/runtime/sand-eval-runner.cjs#L630749-L630755) | 0 | 0 | 3 | 0 | 0 | 0 |

### evaluation:630749

Chamadas escritas diretamente neste corpo: `JSON.stringify`.

SHA-256 do trecho: `2d35f88ba4b9caaaca643934b403e0d3ba5c726c1db26297218e92350d3e20f2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
