# `skillsSubagentTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/tools/subagent-toolsets.ts` · [README do módulo](../../../../../../modules/core/runner/tools/subagent-toolsets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:582526-582530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582526-L582530) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:582526-582530](../../../../../../../reference/runtime/sand-eval-runner.cjs#L582526-L582530) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:582526

Chamadas escritas diretamente neste corpo: `createSkillsTool`, `recallMemoryTools`, `tools.push`.

SHA-256 do trecho: `6b6d410cfee32e3e0086c829d73230400001e4843363198b1980852ecc62f389`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
