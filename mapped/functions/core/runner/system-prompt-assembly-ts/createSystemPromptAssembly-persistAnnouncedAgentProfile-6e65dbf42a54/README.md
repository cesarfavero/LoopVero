# `createSystemPromptAssembly/persistAnnouncedAgentProfile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt-assembly.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-assembly-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552779-552788](../../../../../../reference/runtime/sand-eval-runner.cjs#L552779-L552788) | `FunctionDeclaration` | não | `store, turnSnapshot, identity2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552779-552788](../../../../../../reference/runtime/sand-eval-runner.cjs#L552779-L552788) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552779

Chamadas escritas diretamente neste corpo: `agentProfileIdentitiesEqual`, `persistAgentProfilePromptSnapshot`, `readAgentProfilePromptSnapshot`.

SHA-256 do trecho: `321c03a17b9d9e33410bd5f8edd673e819684b32aeffaa858443d4726c417a84`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
