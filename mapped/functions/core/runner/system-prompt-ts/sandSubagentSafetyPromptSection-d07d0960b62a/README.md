# `sandSubagentSafetyPromptSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532535-532542](../../../../../../reference/runtime/sand-eval-runner.cjs#L532535-L532542) | `FunctionDeclaration` | não | `webTools2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532535-532542](../../../../../../reference/runtime/sand-eval-runner.cjs#L532535-L532542) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:532535

Chamadas escritas diretamente neste corpo: `.join`, `subagentWebToolFallback`.

SHA-256 do trecho: `e5a419bf818378256b090a664610c12abad756718c846a6b0d83e8afa4bdce4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
