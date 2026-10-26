# `subagentWebToolFallback`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532526-532534](../../../../../../reference/runtime/sand-eval-runner.cjs#L532526-L532534) | `FunctionDeclaration` | não | `webTools2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532526-532534](../../../../../../reference/runtime/sand-eval-runner.cjs#L532526-L532534) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:532526

Chamadas escritas diretamente neste corpo: `.join`, `offeredWebToolNames`.

SHA-256 do trecho: `d29863781e9c184c7cd3f77eb865f8278e4ae58ed3b1d8de629e6b1575ca0a2b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
