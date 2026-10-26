# `OmitTestingDirectivesSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/testing/parent.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/testing/parent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636336-636338](../../../../../../../reference/runtime/host-main.cjs#L636336-L636338) | `FunctionDeclaration` | não | `{ additionalInstructions }` |
| [evaluation:424389-424391](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424389-L424391) | `FunctionDeclaration` | não | `{ additionalInstructions }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636336-636338](../../../../../../../reference/runtime/host-main.cjs#L636336-L636338) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424389-424391](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424389-L424391) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:636336

Chamadas escritas diretamente neste corpo: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 do trecho: `baa4c1623e12169317e6f35e8205a0abe562b8e18f93c0938149d0977902fa60`.

### evaluation:424389

Chamadas escritas diretamente neste corpo: `additionalInstructions.map`, `jsx`, `jsxs`.

SHA-256 do trecho: `baa4c1623e12169317e6f35e8205a0abe562b8e18f93c0938149d0977902fa60`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
