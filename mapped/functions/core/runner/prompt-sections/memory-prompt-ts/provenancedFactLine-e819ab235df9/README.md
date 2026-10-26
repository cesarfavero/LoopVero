# `provenancedFactLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537983-537987](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537983-L537987) | `FunctionDeclaration` | não | `record4` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537983-537987](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537983-L537987) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:537983

Chamadas escritas diretamente neste corpo: `formatMemoryDate`, `record4.via.trim`.

SHA-256 do trecho: `f5c29bad6cdaf59525af84a5bccc440563eb513250f149d8f6ef3db730cb8524`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
