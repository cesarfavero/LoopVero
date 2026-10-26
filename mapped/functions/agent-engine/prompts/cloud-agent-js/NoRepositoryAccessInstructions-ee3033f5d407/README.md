# `NoRepositoryAccessInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-agent.js` · [README do módulo](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636207-636217](../../../../../../reference/runtime/host-main.cjs#L636207-L636217) | `FunctionDeclaration` | não | `{ repolessPromptVariant }` |
| [evaluation:424263-424273](../../../../../../reference/runtime/sand-eval-runner.cjs#L424263-L424273) | `FunctionDeclaration` | não | `{ repolessPromptVariant }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636207-636217](../../../../../../reference/runtime/host-main.cjs#L636207-L636217) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424263-424273](../../../../../../reference/runtime/sand-eval-runner.cjs#L424263-L424273) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:636207

Chamadas escritas diretamente neste corpo: `jsx`, `repolessGuidanceBullets`.

SHA-256 do trecho: `7269f7560be76139982cd334dbac927ceb1e142a642feef330535ebbbcdba5f9`.

### evaluation:424263

Chamadas escritas diretamente neste corpo: `jsx`, `repolessGuidanceBullets`.

SHA-256 do trecho: `7269f7560be76139982cd334dbac927ceb1e142a642feef330535ebbbcdba5f9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
