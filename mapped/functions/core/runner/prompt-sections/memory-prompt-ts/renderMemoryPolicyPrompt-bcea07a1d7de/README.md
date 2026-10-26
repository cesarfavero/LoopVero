# `renderMemoryPolicyPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/prompt-sections/memory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/memory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537754-537790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537754-L537790) | `FunctionDeclaration` | não | `location, opts, includeSourceTagGuidance = true` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537754-537790](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537754-L537790) | 8 | 0 | 0 | 3 | 0 | 0 |

### evaluation:537754

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `lines2.join`, `lines2.push`, `lines3.join`, `lines3.push`, `memoryLegendLine`, `memoryOpeningLine`, `memoryPersistenceLine`, `renderMemoryConversationScopeStory`.

SHA-256 do trecho: `c6cfefa78762239b3dacf09111a592e180866aecc9dfad744f20427a0bcfbb33`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
