# `createSystemPromptAssembly/getProfileSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552715-552751](../../../../../../reference/runtime/sand-eval-runner.cjs#L552715-L552751) | `FunctionDeclaration` | não | `profile` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552715-552751](../../../../../../reference/runtime/sand-eval-runner.cjs#L552715-L552751) | 11 | 0 | 0 | 3 | 0 | 0 |

### evaluation:552715

Chamadas escritas diretamente neste corpo: `.join`, `deps.gates.agentDescription`, `lines2.push`, `profile.description.trim`, `profile.name.trim`.

SHA-256 do trecho: `94d4a6cf5d0eceed3d3e1f4d9bbb190d793e718f4addb20bf57b83f1b28d5d8f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
